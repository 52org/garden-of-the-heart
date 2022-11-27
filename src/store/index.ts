import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { base } from "./modules/base";

const reducer = combineReducers({
  base
});

export const createStore = () => {
  const store = configureStore({
    reducer,
    devTools: true
  });

  return store;
}

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;