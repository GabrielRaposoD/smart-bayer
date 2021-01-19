// Module Imports
import React from 'react';

// Components Import
import { Logo } from '@components/index';

const VideoDone: React.FC = () => {
  return (
    <div className='flex flex-col items-start justify-between h-full'>
      <Logo />
      <div>
        <h1 className='text-4xl font-bold text-gray-800'>
          Seu vídeo está pronto!
        </h1>
        <h3 className='mt-3 text-base font-medium text-gray-600'>
          Parabéns! Você criou um vídeo e poderá compartilhar com seus clientes.
        </h3>
        <div className='w-full'>
          <div className='mt-6'>
            <button className='border-primary bg-primary w-2/3 py-2 text-lg font-normal text-white border border-solid rounded-full'>
              Baixar vídeo
            </button>
          </div>
        </div>
      </div>
      <p className='text-darkgreen mt-3 text-base font-medium underline'>
        Criar um novo vídeo
      </p>
    </div>
  );
};

export { VideoDone };
