import { beforeEach } from '@jest/globals';
import { Dispatch } from 'redux';

import {
  loginByUsername,
} from './loginByUsername';

import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

describe('loginByUsername.test', () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('success login', async () => {
    const userValue = { username: 'name', id: '1' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const result = await thunk.callThunk({ username: 'name', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('failure login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: 'name', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
