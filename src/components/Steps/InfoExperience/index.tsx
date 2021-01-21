// Module Imports
import React from 'react'
import { experiences } from '@mocks/experiences'

// Components Import
import { Logo, Stepper } from '@components/index'
import { SelectInput } from '@components/SelectInput'
import { ButtonState, Option } from '@typings/index'
import { useInfo } from '@store/useInfo'

const InfoExperience: React.FC = () => {
  const { experience, setExperience } = useInfo()
  const mappedExperiences: Option[] = experiences.map((experience) => {
    return { value: experience, label: experience.description }
  })

  return (
    <div className="flex flex-col items-start justify-between h-full px-6 md:px-0 md:min-h-0 md:pb-0 pb-10 min-h-screen">
      <div className="flex flex-col">
        <div className="mt-6 md:mt-0">
          <Logo />
        </div>
        <div className="mt-16">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug text-gray-800">
            Quais são as informações do seu video?
          </h1>
          <h3 className="mt-3 text-base font-medium text-gray-600">
            Insira as informações abaixo para criarmos seu anúncio, ele aparecerá no material que você pode visualizar
            ao lado.
          </h3>
          <div className="mt-10 text-base font-medium text-gray-600">
            <label>Qual a experiência oferecida </label>
            <SelectInput options={mappedExperiences} value={experience} onChange={(value) => setExperience(value)} />
          </div>
        </div>
      </div>
      <div className="w-full mt-6">
        <Stepper buttonState={experience ? ButtonState.normal : ButtonState.disabled} />
      </div>
    </div>
  )
}

export { InfoExperience }
