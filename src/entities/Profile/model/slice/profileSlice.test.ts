import { ProfileSchema } from '../types/Profile';
import { profileActions, profileReducer } from './profileSlice';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const data = {
  first: 'Oleksandr',
  lastname: 'Hurov',
  age: 34,
  currency: Currency.UAH,
  country: Country.Ukraine,
  city: 'Kyiv',
  username: 'admin',
};

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(),
    )).toEqual({
      readonly: true,
      validateErrors: [],
      data,
      form: data,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ username: '123456' }),
    )).toEqual({
      form: { username: '123456' },
    });
  });
});
