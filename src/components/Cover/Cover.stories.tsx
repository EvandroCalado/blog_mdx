import { Meta, StoryFn } from '@storybook/react';
import Cover, { CoverProps } from './Cover';

export default {
  title: 'Components/Cover',
  component: Cover,
  args: {
    cover:
      'https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    coverResource: 'unsplash',
    coverResourceUrl: 'https://unsplash.com/pt-br',
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<CoverProps> = (args) => <Cover {...args} />;
