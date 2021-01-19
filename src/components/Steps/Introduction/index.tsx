// Module Imports
import React from 'react';

// Components Import
import { Logo, Stepper } from '@components/index';

const Introduction: React.FC = () => {
  return (
    <div className='flex flex-col items-start justify-between h-full'>
      <Logo />
      <div>
        <h1 className='text-4xl font-bold text-gray-800'>
          Experiência Integrada Bayer
        </h1>
        <h3 className='mt-3 text-2xl font-medium text-gray-600'>
          Crie seu próprio vídeo de acompanhamento
        </h3>
        <h3 className='text-2xl font-medium text-gray-600'>
          para compartilhar com seus clientes.
        </h3>
      </div>
      <div className='w-full'>
        <h6 className='text-base tracking-wide text-gray-500'>
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
