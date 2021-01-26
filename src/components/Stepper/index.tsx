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
  const {
    currentStep,
    incrementCurrentStep,
    decrementCurrentStep,
    steps,
    setVideo,
  } = useInfo();
  const formik = useFormikContext();

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
          title={steps[currentStep] === 8 ? 'Criar Video' : 'Continuar'}
          state={buttonState}
          onClick={
            formik
              ? formik.handleSubmit
              : () => {
                  incrementCurrentStep();
                  if (currentStep === 6) {
                    setVideo(createVideo());
                  }
                }
          }
        />
      </div>
    </div>
  );
};

export { Stepper };
