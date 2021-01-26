// Module Imports
import React from 'react';
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
        `https://api.chiligumvideos.com/api/videos/${video.id}`,
        requestOptions
      ).then((res) => res.json()),
    {
      refetchInterval: 1000,
    }
  );

  if (data && data.processed) {
    setVideo(data);
    incrementCurrentStep();
  } else {
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
            Assim que o vídeo estiver pronto enviaremos o link de download para
            o seu e-mail
          </h3>
        </div>
      </div>
    );
  }
};

export { LoadingVideo };

const mock = async () => {
  const x = {
    id: 1427368,
    name: 'smart_bayer',
    file_hash: '9bf382338485bf06cc04e52f',
    url:
      'https://d3t3wim14xaw3l.cloudfront.net/videos/9bf382338485bf06cc04e52f.mp4?Expires=1611762963&Signature=Dx0AWkjRiKECWwPnJUbgqluD2Vk7Q2k3yfZ72exjtLLJ4oFOK~CM4vK-Zu6rSJNmrL-iOyOZp3A1BWr5MpgsAnPrF3EQQf8GXiiSQ7oj-kOuoCJOw6Mx4MjNKzkJgA1m8fMpfc~-0H-H2qLnNH-ja6ay9QnjBLZmRAKCQkjpS~o5xgRI~w0YkV1O6f-R61dpXHzN-vZEbqT~gaA7P54mAJp376smpDq6v1Z4YpmUeBbVgC-WaTY30B2Rg~sgXXP4a6VdD4stFTamaBen37z~HxekcWZCVx-dtHjHCcqd1KCcT~5LIiX~ruYflaDx7MvtyNSL3dXkDoaXAi0nMUJB5g__&Key-Pair-Id=APKAJ22WF26BLHIHK4LQ',
    thumbnail_url:
      'https://d3t3wim14xaw3l.cloudfront.net/thumbnails/9bf382338485bf06cc04e52f.jpg?Expires=1611762963&Signature=gU-bqO5reL~Rbe0rQtxmbBDT1MJRuOrwUTyuKRn-qHh5aCLAk8FwXacQ1YQba43ooHEuEPmReubuReo1uGJz3ciUaDpF8U0cvJ-E9iod~nGghpT1idCwxDf57er8qzxqovdgL0VQZzJGs7uvzjHD7dximJ~3fccPzWZ8nCtA52oGxFj0ypgiAszghStK5SOsfAC4YNrH11si1mLH9098JJZWNXd9ek~dsIQZ2LNYHH61uT3EaPb3fbPOtpDkipypL93nvhjYOqQ87GwptDjY~H1hxByVhLKhOxeJXVqrWn~RKP8dIWGYyvyD5Lt1ZubvPejdMCd3cTF-VE~8rAWEBw__&Key-Pair-Id=APKAJ22WF26BLHIHK4LQ',
    preview_url: null,
    processed: true,
    template_id: 819,
    track_id: 2826,
    data: {
      foto_produto_01:
        'https://s3.amazonaws.com/chilicreatives/gallery/images/80a897baa162ee5bfb6831e5f4ef5ac24c6eac53.png',
      foto_servico_01:
        'https://s3.amazonaws.com/chilicreatives/gallery/images/a3f130a84f1c6cee0fe973de9b5707168099b691.jpg',
      texto_contato_01: 'Caio',
      texto_contato_02: '11 9 0000 5555',
      texto_hibrido_01:
        'Qualidade de grãos com altíssima produtividade para a safrinha Tropical',
      texto_produto_01:
        'Dekalb, a marca que oferece tecnologia e inovação para superar os limites da produtividade\n\n\n\n\n\n',
      texto_servico_01:
        'Resgate agora e conte com tecnologia para ajudar na tomada de decisões',
      titulo_hibrido_01: 'DKB 360 PRO3®',
      titulo_servico_01: 'Agricultura de Precisão',
      foto_experiencia_01:
        'https://s3.amazonaws.com/chilicreatives/gallery/images/bf75cb58d951cabc907f7e6fa20214588c3ebe11.jpg',
      texto_experiencia_01:
        'Conheça soluções inovadoras com as principais startups do Agro*',
      texto_experiencia_02:
        '* para clientes a partir de 1 estrela no Impulso Bayer',
      texto_nome_agricultor_01: 'Diego',
      texto_nome_agricultor_02: 'Diego',
    },
    player_id: null,
    player_token: null,
    player_send: false,
    created_at: '2021-01-25 15:27:26 -0200',
    updated_at: '2021-01-25 15:31:43 -0200',
    processed_at: '2021-01-25 15:31:43 -0200',
  };
  const mockData = new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });

  return await mockData;
};
