// Module Imports
import React from 'react'

// Components Import
import { Logo, Stepper } from '@components/index'

const VideoType: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-between h-full">
      <div className="flex flex-col">
        <Logo />
        <div className="mt-10">
          <h1 className="text-4xl text-gray-800 leading-snug font-bold">Que tipo de vídeo você gostaria de criar?</h1>
          <h3 className="mt-6 text-2xl text-gray-600 font-medium">Crie seu próprio vídeo de acompanhamento</h3>
          <h3 className="text-2xl text-gray-600 font-medium">para compartilhar com seus clientes.</h3>
        </div>
      </div>
      <div className="w-full">
        <h6 className="tracking-wide text-base text-gray-500">
          Ao clicar em Criar vídeo, toda a informação inserida e criação dos materiais é de total responsabilidade do
          criador.
        </h6>
        <div className="mt-6">
          <Stepper step={1} />
        </div>
      </div>
    </div>
  )
}

export { VideoType }
