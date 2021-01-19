// Module Imports
import React, { useState } from 'react';

// Components Import
import { Logo, Stepper } from '@components/index';
import { TextInput } from '@components/TextInput';

const FarmerName: React.FC = () => {
  const [farmerName, setFarmerName] = useState<string>('');

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
              value={farmerName}
              onChange={(value) => setFarmerName(value)}
            />
          </div>
        </div>
      </div>
      <div className='w-full mt-6'>
        <Stepper step={1} />
      </div>
    </div>
  );
};

export { FarmerName };
