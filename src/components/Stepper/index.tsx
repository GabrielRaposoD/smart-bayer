// Module Imports
import React from 'react'

// Application Import
import { ButtonState } from '@typings/index'

// Components Import
import { Button } from '@components/index'

interface StepperProps {
  step: number
}

const Stepper: React.FC<StepperProps> = ({ step }) => {
  if (step === 0) {
    return (
      <div className="flex justify-start w-full">
        <Button title="Começar" state={ButtonState.normal} />
      </div>
    )
  }

  return (
    <div className="flex justify-start w-full space-x-4">
      <div className="w-1/2">
        <Button title="Voltar" state={ButtonState.inverse} />
      </div>
      <div className="w-1/2">
        <Button title="Continuar" state={ButtonState.disabled} />
      </div>
    </div>
  )
}

export { Stepper }
