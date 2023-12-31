import { Meta, StoryFn } from '@storybook/react';
import { Post } from 'contentlayer/generated';
import Card from './card';

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    title: 'Card title',
    description:
      'React é uma biblioteca JavaScript de código aberto para construir interfaces de usuário (IU). Ela é uma biblioteca declarativa, o que significa que você descreve como sua IU deve ser, e o React se encarrega de renderizá-la.',
    cover:
      'https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: '2023-08-26',
    url: '/',
    categories: [{ name: 'javascript' }, { name: 'react' }],
    author: {
      name: 'Evandro Calado',
      image: 'https://avatars.githubusercontent.com/u/110628201?v=4',
    },
  },
} as Meta;

export const Default: StoryFn<Post> = (args) => <Card {...args} />;
