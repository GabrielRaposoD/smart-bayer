// Module Imports
import React from 'react';

// Application Import
import { ButtonState } from '@typings/index';

// Components Import
import { Button } from '@components/index';
import { useInfo } from '@store/useInfo';

const Stepper: React.FC = () => {
  const { currentStep, incrementCurrentStep, decrementCurrentStep } = useInfo();

  if (currentStep === 0) {
    return (
      <div className='flex justify-start w-full'>
        <Button
          title='Começar'
          state={ButtonState.normal}
          onClick={() => incrementCurrentStep()}
        />
      </div>
    );
  }

  return (
    <div className='flex justify-start w-full space-x-4'>
      <div className='w-1/2'>
        <Button
          title='Voltar'
          state={ButtonState.inverse}
          onClick={() => decrementCurrentStep()}
        />
      </div>
      <div className='w-1/2'>
        <Button
          title='Continuar'
          state={ButtonState.disabled}
          onClick={() => incrementCurrentStep()}
        />
      </div>
    </div>
  );
};

export { Stepper };
