import { DeepPartial } from 'redux';

import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'name' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('name'),
    )).toEqual({ username: 'name' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123123' };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('123123'),
    )).toEqual({ password: '123123' });
  });
});
