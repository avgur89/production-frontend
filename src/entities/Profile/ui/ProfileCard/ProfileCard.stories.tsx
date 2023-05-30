import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ProfileCard } from './ProfileCard';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    first: 'Oleksandr',
    lastname: 'Hurov',
    age: 34,
    currency: Currency.UAH,
    country: Country.Ukraine,
    city: 'Kyiv',
    username: 'admin',
    avatar: 'https://avatars.githubusercontent.com/u/6349574?v=4',
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
