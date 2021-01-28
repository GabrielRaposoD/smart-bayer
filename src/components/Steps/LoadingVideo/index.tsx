// Module Imports
import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

// Components Import
import { Logo } from '@components/index';

//Aplications Import
import { BiLoaderAlt } from 'react-icons/bi';
import { useInfo } from '@store/useInfo';

const queryClient = new QueryClient();

const LoadingVideo: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingVideoComponent />
    </QueryClientProvider>
  );
};

const LoadingVideoComponent: React.FC = () => {
  const { incrementCurrentStep, video, setVideo } = useInfo();

  const myHeaders = new Headers();
  myHeaders.append('external-id', '9a7853da-6cc1-4afd-8212-371b598a2572');
  myHeaders.append('token', '1392f700ac1f4f6036f6cf788a295d43');
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  const { data } = useQuery(
    'repoData',
    () =>
      fetch(
        `https://staging.api.chiligumvideos.com/api/videos/${video.id}`,
        requestOptions
      ).then((res) => res.json()),
    {
      refetchInterval: 5000,
      enabled: Boolean(video),
    }
  );

  useEffect(() => {
    if (data && data.processed) {
      console.log('oi');
      setVideo(data);
      incrementCurrentStep();
    }
  }, [data]);

  return (
    <div className='md:px-0 flex flex-col items-start min-h-screen px-6'>
      <div className='flex flex-col w-full px-40 py-20'>
        <Logo />
      </div>
      <div className='flex flex-col items-center self-center justify-center mt-40'>
        <BiLoaderAlt className='text-9xl animate-spin text-green' />
        <h1 className='md:text-4xl text-2xl font-bold leading-snug text-gray-800'>
          Aguarde, Estamos criando seu vídeo
        </h1>
        <h3 className='md:text-xl mt-3 text-base font-medium text-gray-600'>
          Assim que o vídeo estiver pronto enviaremos o link de download para o
          seu e-mail
        </h3>
      </div>
    </div>
  );
};

export { LoadingVideo };
