import LinkButton, { LinkButtonProps } from './LinkButton';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Atoms/LinkButton',
  component: LinkButton,
  args: {
    children: 'LinkButton',
    href: '#',
  },
} as Meta;

export const Default: StoryFn<LinkButtonProps> = (args) => (
  <LinkButton {...args} />
);
