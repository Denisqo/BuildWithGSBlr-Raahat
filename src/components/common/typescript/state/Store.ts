import { createStore, combineReducers } from '@reduxjs/toolkit';
import language from './Language';
import user from './User';

const reducer = combineReducers({
  language: language.reducer,
  user: user.reducer,
});

const store = createStore(reducer);

//TODO: remove in production.
const slices = { language, user };
declare global {
  interface Window {
    store: typeof store;
    slices: typeof slices;
  }
}
if (process.env.NODE_ENV === 'development') {
  window.slices = slices;
  window.store = store;
}

export default store;
