import { NavigateOptions } from 'react-router';
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { To } from '@remix-run/router';

import { createReducerManager } from './reducerManager';
import { StateSchema } from './StateSchema';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: IS_DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate,
        },
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
