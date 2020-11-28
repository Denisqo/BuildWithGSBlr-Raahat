import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import en from '../languages/en';
import sk from '../languages/sk';

const dictionaryList = { sk, en };
const availableLocales = ['sk', 'en'];

export interface Language {
  locale: 'en' | 'sk';
  dictionary: { [key: string]: string };
}

const getDefaultLocale = (): Language['locale'] => {
  let locale = localStorage.getItem('locale');
  if (locale && availableLocales.includes(locale)) {
    return locale as Language['locale'];
  }

  for (let loc of navigator.languages) {
    loc = loc.substring(0, 2);
    if (availableLocales.includes(loc)) {
      return loc as Language['locale'];
    }
  }

  return 'en';
};

const defaultLocale = getDefaultLocale();

const initialState: Language = {
  locale: defaultLocale,
  dictionary: dictionaryList[defaultLocale],
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<Language['locale']>) {
      localStorage.setItem('locale', action.payload);
      state.locale = action.payload;
      state.dictionary = dictionaryList[action.payload];
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice;
