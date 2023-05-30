import { NavigateOptions } from 'react-router';
import {
  CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { To } from '@remix-run/router';

import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArguments } from './StateSchema';

import { userReducer } from 'entities/User';
import { $api } from 'shared/api/api';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArg: ThunkExtraArguments = {
    api: $api,
    navigate,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: IS_DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
