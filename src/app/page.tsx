'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { icons } from 'src/icons';

export default function Home() {
  return (
    <section className="body-font">
      <div className="container mx-auto flex flex-col items-center px-5 py-12 sm:py-[158px] md:flex-row">
        <div className="mb-10 flex w-5/6 items-center justify-center md:mb-0 md:w-1/2 md:justify-normal lg:w-full lg:max-w-lg">
          <Image
            className="w-5/6 rounded-full border-4 border-theme-700 object-cover object-center dark:border-theme-200"
            alt="hero"
            src="https://avatars.githubusercontent.com/u/110628201?v=4"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
          <h1 className="title-font mb-8 flex flex-col space-y-2 text-3xl font-medium lg:mb-12">
            <span className="font-bold sm:text-5xl lg:text-[6rem]">
              Evandro Calado
            </span>
            <TypeAnimation
              sequence={[
                'Desenvolvedor Frontend',
                1000,
                'Entusiasta de tecnologias',
                1000,
                'Eterno estudande',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-mono text-theme-300 sm:text-2xl lg:text-5xl"
            />
          </h1>
          {/* <p className="mb-8 leading-relaxed lg:text-lg">
            🚀 Comecei meus estudos na programação em 2022. Desde então, tenho
            me apaixonado cada vez mais pela área e pelo desafio de resolver
            problemas através da programação. Sempre fui fascinado pela
            tecnologia e como ela pode mudar o mundo. Mas foi só quando comecei
            a aprender programação que percebi o poder que ela tem para resolver
            problemas de maneira eficiente e escalável. Estou animado para
            continuar aprendendo e descobrindo novas maneiras de aplicar minhas
            habilidades de programação para criar soluções inovadoras e úteis.
          </p> */}
          <div className="flex flex-wrap items-center justify-center [&>svg]:w-10 [&>svg]:lg:w-14">
            {icons.javascript}
            {icons.typescript}
            {icons.react}
            {icons.next}
            {icons.storybook}
            {icons.tailwind}
            {icons.mongo}
            {icons.graphql}
            {icons.firebase}
            {icons.docker}
          </div>
        </div>
      </div>
    </section>
  );
}
