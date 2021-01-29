// Module Imports
import React, { useEffect } from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

// Components Import
import { Logo } from '@components/index'

//Aplications Import
import { BiLoaderAlt } from 'react-icons/bi'
import { useInfo } from '@store/useInfo'

const queryClient = new QueryClient()

const LoadingVideo: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingVideoComponent />
    </QueryClientProvider>
  )
}

const LoadingVideoComponent: React.FC = () => {
  const { incrementCurrentStep, video, setVideo } = useInfo()

  const myHeaders = new Headers()
  myHeaders.append('external-id', 'a3b8d4c3-d639-4cc0-b6e6-894cf9898bd1')
  myHeaders.append('token', '0ebf28b8cc1c4fe407eabef4575e3a24')
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect,
  }

  useEffect(() => {
    fetch(`https://api.chiligum.com.br/api/videos/1103922`, requestOptions).then((res) => res.json())
  }, [])

  const { data } = useQuery(
    'repoData',
    () => fetch(`https://api.chiligum.com.br/api/videos/1103922`, requestOptions).then((res) => res.json()),
    {
      refetchInterval: 5000,
      enabled: Boolean(video.id),
    }
  )

  useEffect(() => {
    if (data && data.processed) {
      console.log('oi')
      setVideo(data)
      incrementCurrentStep()
    }
  }, [data])

  return (
    <div className="md:px-0 flex flex-col items-start min-h-screen px-6">
      <div className="flex flex-col w-full px-40 py-20">
        <Logo />
      </div>
      <div className="flex flex-col items-center self-center justify-center mt-40">
        <BiLoaderAlt className="text-9xl animate-spin text-green" />
        <h1 className="md:text-4xl text-2xl font-bold leading-snug text-gray-800">
          Aguarde, Estamos criando seu vídeo
        </h1>
        <h3 className="md:text-xl mt-3 text-base font-medium text-gray-600">
          Assim que o vídeo estiver pronto enviaremos o link de download para o seu e-mail
        </h3>
      </div>
    </div>
  )
}

export { LoadingVideo }
