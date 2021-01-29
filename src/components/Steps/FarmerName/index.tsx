// Module Imports
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// Components Import
import { Logo, Stepper } from '@components/index';
import { TextInput } from '@components/TextInput';
import { ButtonState } from '@typings/index';
import { useInfo } from '@store/useInfo';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, 'Nome requer ao menos 3 caracteres')
    .max(27, 'O Nome não pode passar de 27 caracteres')
    .required('This field is required.'),
});

const FarmerName: React.FC = () => {
  const { setFirstName } = useInfo();

  return (
    <div className='md:px-0 md:min-h-0 flex flex-col items-start justify-between h-full min-h-screen px-6'>
      <Formik
        initialValues={{ firstName: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setFirstName(values.firstName);
        }}
      >
        <Form className='md:min-h-0 md:pb-0 flex flex-col justify-between w-full h-full min-h-screen pb-10'>
          <div className='flex flex-col'>
            <div className='md:mt-0 mt-6'>
              <Logo />
            </div>
            <div className='mt-16'>
              <h1 className='md:text-4xl text-2xl font-bold leading-snug text-gray-800'>
                Qual primeiro nome do <br />
                agricultor?
              </h1>
              <h3 className='mt-3 text-base font-medium text-gray-600'>
                O nome aparecerá no material final renderizado.
              </h3>
              <div className='mt-4'>
                <TextInput
                  id='firstName'
                  name='firstName'
                  placeholder='Digite'
                />
              </div>
            </div>
          </div>
          <div className='w-full mt-6'>
            <Stepper />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export { FarmerName };
