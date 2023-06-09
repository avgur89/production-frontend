import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentItem } from './CommentItem';

export default {
  title: 'entities/CommentItem',
  component: CommentItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
