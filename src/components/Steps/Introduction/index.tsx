// Module Imports
import React from 'react';

// Components Import
import { Logo, Stepper } from '@components/index';

const Introduction: React.FC = () => {
  return (
    <div className='flex flex-col items-start justify-between h-full min-h-full'>
      <Logo />
      <div>
        <h1 className='text-shaft text-4xl font-bold'>
          Experiência Integrada Bayer
        </h1>
        <h3 className='text-shaft mt-3 text-2xl font-medium'>
          Crie um vídeo customizado para o seu cliente
        </h3>
        <h3 className='text-shaft text-2xl font-medium'>
          com as ações recomendadas no{' '}
          <span className='font-bold'>Plano de Ação</span>
        </h3>
        <h3 className='text-shaft text-2xl font-medium'>
          e compartilhe esse material por WhatsApp
        </h3>
      </div>
      <div className='w-full'>
        <h6 className='text-shaft text-base tracking-wide'>
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
