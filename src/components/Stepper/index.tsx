// Module Imports
import React from 'react';

// Application Import
import { ButtonState } from '@typings/index';
import { useFormikContext } from 'formik';

// Components Import
import { Button } from '@components/index';
import { useInfo } from '@store/useInfo';
import { createVideo } from 'service/video.service';

interface StepperProps {
  buttonState?: ButtonState;
}

const Stepper: React.FC<StepperProps> = ({ buttonState }) => {
  const info = useInfo();
  const formik = useFormikContext();

  if (info.currentStep === 0) {
    return (
      <div className='flex justify-start w-full'>
        <Button
          title='Começar'
          state={ButtonState.normal}
          onClick={() => info.incrementCurrentStep()}
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
          onClick={() => info.decrementCurrentStep()}
        />
      </div>
      <div className='w-1/2'>
        <Button
          title={
            info.steps[info.currentStep] === 7 ? 'Criar Video' : 'Continuar'
          }
          state={buttonState}
          onClick={async () => {
            if (formik) formik.handleSubmit();
            info.incrementCurrentStep();
          }}
        />
      </div>
    </div>
  );
};

export { Stepper };
