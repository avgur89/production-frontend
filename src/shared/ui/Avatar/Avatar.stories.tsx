import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from './Avatar';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 150,
  src: 'https://avatars.githubusercontent.com/u/6349574?v=4',
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: 'https://avatars.githubusercontent.com/u/6349574?v=4',
};
