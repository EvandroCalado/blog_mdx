import { Meta, StoryFn } from '@storybook/react';
import PostGrid, { PostGridProps } from './PostGrid';

import mock from './PostGrid.mock';

export default {
  title: 'Components/PostGrid',
  component: PostGrid,
  args: {
    posts: mock,
  },
} as Meta;

export const Default: StoryFn<PostGridProps> = (args) => <PostGrid {...args} />;
