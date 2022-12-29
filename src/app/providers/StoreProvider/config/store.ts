import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: IS_DEV,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
