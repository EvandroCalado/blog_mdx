import { Meta, StoryFn } from '@storybook/react';
import LinkButton, { LinkButtonProps } from './LinkButton';

export default {
  title: 'Components/LinkButton',
  component: LinkButton,
  args: {
    children: 'LinkButton',
    href: '#',
  },
} as Meta;

export const Default: StoryFn<LinkButtonProps> = (args) => (
  <LinkButton {...args} />
);
