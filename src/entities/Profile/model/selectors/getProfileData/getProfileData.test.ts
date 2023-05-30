import { getProfileData } from './getProfileData';

import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileData.test', () => {
  test('should return data', () => {
    const data = {
      first: 'Oleksandr',
      lastname: 'Hurov',
      age: 34,
      currency: Currency.UAH,
      country: Country.Ukraine,
      city: 'Kyiv',
      username: 'admin',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
