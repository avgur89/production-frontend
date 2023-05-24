import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { Profile } from '../../types/Profile';

import { ThunkConfig } from 'app/providers/StoreProvider';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const formData = getProfileForm(getState());

    try {
      const response = await extra.api.put<Profile>('/profile', formData);
      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
