import { Meta, StoryFn } from '@storybook/react';
import TypeEffect, { TypeEffectProps } from './TypeEffect';

export default {
  title: 'Components/TypeEffect',
  component: TypeEffect,
  args: {
    type1: 'Desenvolvedor Frontend',
    type2: 'Entusiasta de tecnologias',
    type3: 'Eterno estudande',
  },
} as Meta;

export const Default: StoryFn<TypeEffectProps> = (args) => (
  <TypeEffect {...args} />
);
