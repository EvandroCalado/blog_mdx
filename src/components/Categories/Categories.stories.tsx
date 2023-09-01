import { Meta, StoryFn } from '@storybook/react';
import Categories, { CategoriesProps } from './Categories';

export default {
  title: 'Components/Categories',
  component: Categories,
  args: {
    categories: [
      { name: 'category 1' },
      { name: 'category 2' },
      { name: 'category 3' },
    ],
  },
} as Meta;

export const Default: StoryFn<CategoriesProps> = (args) => (
  <Categories {...args} />
);
