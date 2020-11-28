class DB {
  key: any;
  schema: any;

  constructor(key: any, schema: any) {
    if (typeof key !== 'string' || typeof schema !== 'object' || key.length === 0 || schema.length === 0) {
      throw Error('Bad parameter "key" or "schema"');
    }
    this.key = key;
    this.schema = schema;
  }

  insert(entity: any) {
    if (
      typeof entity !== 'object' ||
      Object.keys(entity).length === 0 ||
      Object.keys(entity).length !== this.schema.length
    ) {
      throw Error('Bad parameter "entity"');
    }

    if (!this.isSameKeys(entity)) {
      throw Error('The entity object is not of the same type as the schema');
    }

    const localStorageItem = window.localStorage.getItem(this.key);

    if (localStorageItem === null) {
      window.localStorage.setItem(this.key, JSON.stringify([entity]));
    } else {
      const arrayOfEntity = JSON.parse(localStorageItem);
      arrayOfEntity.push(entity);
      window.localStorage.setItem(this.key, JSON.stringify(arrayOfEntity));
    }
  }

  isSameKeys(entity: any): boolean {
    const entityKeys = Object.keys(entity);
    const checkEntityKeys = new Set();
    this.schema.map((schemaKey: any) =>
      entityKeys.map((entityKey) => entityKey === schemaKey && checkEntityKeys.add(entityKey))
    );

    return this.schema.length === checkEntityKeys.size;
  }

  findAll(): any {
    return JSON.parse(window.localStorage.getItem(this.key) + '');
  }
}

export default DB;
