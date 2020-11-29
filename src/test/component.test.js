import React from "react";
import Text from '../components/common/typescript/common/Text';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { afterEach, beforeEach } from '@jest/globals';
import { Button } from 'react-bulma-components/src';
import IconButton from '../components/common/typescript/common/IconButton';
import DB from '../db';
import { assert } from '@typescript-eslint/scope-manager/dist/assert';
import Checkbox from '../components/common/typescript/common/Checkbox';

let container = null;


beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("renders with or without a name", () => {
  act(() => {
    render(<Text />, container);
  });
  expect(container.textContent).toBe("Hey, ERROR");

  act(() => {
    render(<IconButton id='icon-button' onClick={onChange} Icon={null}>test</IconButton>, container);
  });
  expect(container.textContent).toBe("test");
  button = document.getElementById("icon-button");
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });


  act(() => {
    render(<Text tag='racer' />, container);
  });
  expect(container.textContent).toBe("Racer");

  act(() => {
    render(<Text tag='admin' />, container);
  });
  expect(container.textContent).toBe("Admin");

  act(() => {
    render(<Text tag='live' />, container);
  });
  expect(container.textContent).toBe("Live");


  act(() => {
    render(<Button>test</Button>, container);
  });
  expect(container.textContent).toBe("Live");

  act(() => {
    render(<Button>test</Button>, container);
  });
  expect(container.textContent).toBe("test");

  const onChange = jest.fn();

  act(() => {
    render(<IconButton id='icon-button' onClick={onChange} Icon={null}>test</IconButton>, container);
  });
  expect(container.textContent).toBe("test");
  let button = document.getElementById("icon-button");
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  const db = new DB('test', ['name', 'value']);

  db.insert({name: 'name', value: 'value'})

  assert(db.findAll(), {name: 'name', value: 'value'});

  try {
    db.insert({ name: 'value' })
  } catch (e) {
    console.log('Great');
  }

  act(() => {
    render(<Checkbox>test</Checkbox>, container);
  });
  expect(container.textContent).toBe("test");


  act(() => {
    render(<IconButton id='icon-button' onClick={onChange} Icon={null}>test</IconButton>, container);
  });
  expect(container.textContent).toBe("test");
  button = document.getElementById("icon-button");
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
});
