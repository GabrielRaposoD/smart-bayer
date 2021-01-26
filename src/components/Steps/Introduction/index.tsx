// Module Imports
import React from 'react';

// Components Import
import { Logo, Stepper } from '@components/index';

const Introduction: React.FC = () => {
  return (
    <div className='md:px-0 md:pb-0 flex flex-col items-start justify-between h-full min-h-full px-4 pb-10'>
      <div className='md:mt-0 mt-10'>
        <Logo />
      </div>
      <div className='md:mt-0 mt-24'>
        <h1 className='text-shaft md:text-4xl text-2xl font-bold'>
          Experiência Integrada Bayer
        </h1>
        <h3 className='text-shaft md:text-2xl mt-3 text-base font-medium'>
          Crie um vídeo customizado para o seu cliente
        </h3>
        <h3 className='text-shaft md:text-2xl text-base font-medium'>
          com as ações recomendadas no
          <span className='font-bold'>Plano de Ação</span> e
        </h3>
        <h3 className='text-shaft md:text-2xl text-base font-medium'>
          compartilhe esse material por WhatsApp
        </h3>
      </div>
      <div className='md:mt-0 w-full mt-24'>
        <h6 className='text-shaft md:text-base text-xs tracking-wide'>
          Ao clicar em Criar vídeo, toda a informação inserida e criação dos
          materiais é de total responsabilidade do criador.
        </h6>
        <div className='mt-6'>
          <Stepper />
        </div>
      </div>
    </div>
  );
};

export { Introduction };
