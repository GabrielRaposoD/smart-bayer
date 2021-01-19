// Module Imports
import React from 'react';
import { templates } from '@mocks/templates';

// Components Import
import { Logo, Stepper } from '@components/index';
import { SelectInput } from '@components/SelectInput';
import { Option, ButtonState } from '@typings/index';
import { useInfo } from '@store/useInfo';

const VideoType: React.FC = () => {
  const { template, setTemplate, setSteps } = useInfo();

  const mappedTemplates: Option[] = templates.map((template) => {
    return { value: template, label: template.type };
  });

  return (
    <div className='flex flex-col items-start justify-between h-full'>
      <div className='flex flex-col'>
        <Logo />
        <div className='mt-10'>
          <h1 className='text-4xl font-bold leading-snug text-gray-800'>
            Que tipo de vídeo você gostaria de criar?
          </h1>
          <h3 className='mt-3 text-2xl font-medium text-gray-600'>
            Escolha nas opções abaixo o que melhor te atende
          </h3>
          <div className='mt-3'>
            <SelectInput
              options={mappedTemplates}
              value={template}
              onChange={(e) => {
                setTemplate(e);
                setSteps(e.value.steps);
              }}
            />
          </div>
        </div>
      </div>
      <div className='w-full mt-6'>
        <Stepper
          buttonState={template ? ButtonState.normal : ButtonState.disabled}
        />
      </div>
    </div>
  );
};

export { VideoType };
