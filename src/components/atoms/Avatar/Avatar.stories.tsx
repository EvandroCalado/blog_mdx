import Avatar, { AvatarProps } from './Avatar';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  args: {
    name: 'Evandro Calado',
    image: 'https://avatars.githubusercontent.com/u/110628201?v=4',
    date: '2023-08-26',
  },
} as Meta;

export const Default: StoryFn<AvatarProps> = (args) => <Avatar {...args} />;
