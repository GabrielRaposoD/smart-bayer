// Module Imports
import React from 'react';

// Components Import
import { Logo, Stepper } from '@components/index';
import { useInfo } from '@store/useInfo';
import { TextInput } from '@components/TextInput';

const InfoPersonal: React.FC = () => {
  const { fullName, setFullName, email, setEmail } = useInfo();

  return (
    <div className='flex flex-col items-start justify-between h-full'>
      <div className='flex flex-col'>
        <Logo />
        <div className='mt-10'>
          <h1 className='text-4xl font-bold leading-snug text-gray-800'>
            Insira suas informações
            <br />
            pessoais
          </h1>
          <h3 className='mt-3 text-base font-medium text-gray-600'>
            Além de poder baixar, você também receberá o arquivo final por
            email.
          </h3>
          <div className='mt-10 text-base font-medium text-gray-600'>
            <label>Seu nome completo </label>
            <TextInput
              placeholder='Digite'
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </div>
          <div className='mt-10 text-base font-medium text-gray-600'>
            <label>Seu e-mail </label>
            <TextInput
              placeholder='Digite'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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

export { InfoPersonal };
