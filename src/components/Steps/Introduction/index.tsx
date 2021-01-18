// Module Imports
import React from 'react'

// Components Import
import { Logo, Stepper } from '@components/index'

const Introduction: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-between h-full">
      <Logo />
      <div>
        <h1 className="text-4xl text-gray-800 font-bold">Experiência Integrada Bayer</h1>
        <h3 className="mt-6 text-2xl text-gray-600 font-medium">Crie seu próprio vídeo de acompanhamento</h3>
        <h3 className="text-2xl text-gray-600 font-medium">para compartilhar com seus clientes.</h3>
      </div>
      <div className="w-full">
        <h6 className="tracking-wide text-base text-gray-500">
          Ao clicar em Criar vídeo, toda a informação inserida e criação dos materiais é de total responsabilidade do
          criador.
        </h6>
        <div className="mt-6">
          <Stepper step={0} />
        </div>
      </div>
    </div>
  )
}

export { Introduction }
