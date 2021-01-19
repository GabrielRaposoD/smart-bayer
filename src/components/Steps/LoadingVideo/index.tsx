// Module Imports
import React from 'react';

// Components Import
import { Logo } from '@components/index';

//Aplications Import
import { BiLoaderAlt } from 'react-icons/bi';

const LoadingVideo: React.FC = () => {
  return (
    <div className='flex flex-col items-start min-h-screen'>
      <div className='flex flex-col w-full px-40 py-20'>
        <Logo />
      </div>
      <div className='flex flex-col items-center self-center justify-center mt-40'>
        <BiLoaderAlt className='text-9xl animate-spin text-green' />
        <h1 className='text-4xl font-bold leading-snug text-gray-800'>
          Aguarde, Estamos criando seu vídeo
        </h1>
        <h3 className='mt-3 text-xl font-medium text-gray-600'>
          Assim que o vídeo estiver pronto enviaremos o link de download para o
          seu e-mail
        </h3>
      </div>
    </div>
  );
};

export { LoadingVideo };
