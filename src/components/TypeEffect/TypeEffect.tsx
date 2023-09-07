'use client';

import { TypeAnimation } from 'react-type-animation';

export type TypeEffectProps = {
  type1: string;
  type2: string;
  type3: string;
};

export default function TypeEffect({ type1, type2, type3 }: TypeEffectProps) {
  return (
    <TypeAnimation
      sequence={[type1, 1000, type2, 1000, type3, 1000]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="font-mono text-theme-300 sm:text-2xl lg:text-5xl"
    />
  );
}
