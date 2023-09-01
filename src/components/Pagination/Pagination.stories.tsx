import { Meta, StoryFn } from '@storybook/react';
import Pagination, { PaginationProps } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  args: {
    totalPages: 10,
    currentPage: 1,
  },
} as Meta;

export const Default: StoryFn<PaginationProps> = (args) => (
  <Pagination {...args} />
);
