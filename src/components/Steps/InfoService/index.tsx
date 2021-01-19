// Module Imports
import React from 'react';
import { services } from '@mocks/services';

// Components Import
import { Logo, Stepper } from '@components/index';
import { SelectInput } from '@components/SelectInput';
import { Option } from '@typings/index';
import { useInfo } from '@store/useInfo';

const InfoService: React.FC = () => {
  const { service, setService } = useInfo();

  const mappedServices: Option[] = services.map((service) => {
    return { value: service, label: service.description };
  });

  return (
    <div className='flex flex-col items-start justify-between h-full'>
      <div className='flex flex-col'>
        <Logo />
        <div className='mt-10'>
          <h1 className='text-4xl font-bold leading-snug text-gray-800'>
            Quais são as informações do seu video?
          </h1>
          <h3 className='mt-3 text-base font-medium text-gray-600'>
            Insira as informações abaixo para criarmos seu anúncio, ele
            aparecerá no material que você pode visualizar ao lado.
          </h3>
          <div className='mt-10 text-base font-medium text-gray-600'>
            <label>Qual o serviço oferecido </label>
            <SelectInput
              options={mappedServices}
              value={service}
              onChange={(e) => setService(e)}
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

export { InfoService };
