// Module Imports
import React, { useState } from 'react';

// Components Import
import { Logo, Stepper } from '@components/index';
import { TextInput } from '@components/TextInput';
import { ButtonState } from '@typings/index';
import { useInfo } from '@store/useInfo';

const FarmerName: React.FC = () => {
  const { firstName, setFirstName } = useInfo();

  return (
    <div className='flex flex-col items-start justify-between h-full'>
      <div className='flex flex-col'>
        <Logo />
        <div className='mt-16'>
          <h1 className='text-4xl font-bold leading-snug text-gray-800'>
            Qual primeiro nome do <br />
            agricultor?
          </h1>
          <h3 className='mt-3 text-base font-medium text-gray-600'>
            O nome aparecerá no material que você pode visualizar ao lado.
          </h3>
          <div>
            <TextInput
              placeholder='Digite'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className='w-full mt-6'>
        <Stepper
          buttonState={firstName ? ButtonState.normal : ButtonState.disabled}
        />
      </div>
    </div>
  );
};

export { FarmerName };
