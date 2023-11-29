import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reducers } from '../reducers';

function saveToLocalStorage(store) {
  try {
    const serializedStore = JSON.stringify(store);
    window.localStorage.setItem('store', serializedStore);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedStore = window.localStorage.getItem('store');
    if (serializedStore === null) return undefined;
    return JSON.parse(serializedStore);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const preloadedState = loadFromLocalStorage();

const store = configureStore({
  reducer: reducers,
  preloadedState,
  middleware: [...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;