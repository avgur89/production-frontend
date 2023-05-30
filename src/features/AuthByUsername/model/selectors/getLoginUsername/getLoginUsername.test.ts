import {
  getLoginUsername,
} from './getLoginUsername';

import { StateSchema } from 'app/providers/StoreProvider';

describe('getLoginPassword.test', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'name',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('name');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
