import {
  updateProfileData,
} from './updateProfileData';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

const data = {
  first: 'Oleksandr',
  lastname: 'Hurov',
  age: 34,
  currency: Currency.UAH,
  country: Country.Ukraine,
  city: 'Kyiv',
  username: 'admin',
};

describe('updateProfileData.test', () => {
  test('success profile update', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('failure profile update', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '' },
      },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
