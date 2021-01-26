// Module Imports
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Components Import
import { Logo, Stepper } from '@components/index';
import { useInfo } from '@store/useInfo';
import { TextInput } from '@components/TextInput';
import { ButtonState } from '@typings/index';
import { MaskedInputField } from '@components/MaskedInputField';

const phoneRegex = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/g;

const validationSchema = Yup.object({
  fullname: Yup.string().required('Insira seu nome completo'),
  email: Yup.string()
    .email('E-mail incorreto')
    .required('Insira seu e-mail completo'),
  phone: Yup.string()
    .matches(phoneRegex, 'Telefone incorreto')
    .required('Insira seu telefone'),
});

const InfoPersonal: React.FC = () => {
  const {
    fullName,
    setFullName,
    email,
    setEmail,
    incrementCurrentStep,
    phone,
    setPhone,
  } = useInfo();

  return (
    <div className='md:px-0 md:min-h-0 md:pb-0 flex flex-col items-start justify-between h-full min-h-screen px-6 pb-10'>
      <Formik
        initialValues={{ fullname: '', email: '', phone: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setFullName(values.fullname);
          setEmail(values.email);
          setPhone(values.phone);
          incrementCurrentStep();
        }}
      >
        <form className='md:min-h-0 md:pb-0 flex flex-col justify-between w-full h-full min-h-screen pb-10'>
          <div className='flex flex-col'>
            <div className='md:mt-0 mt-6'>
              <Logo />
            </div>
            <div className='mt-16'>
              <h1 className='md:text-4xl text-2xl font-bold leading-snug text-gray-800'>
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
                  name='fullname'
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
                  name='email'
                  placeholder='Digite'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className='mt-10 text-base font-medium text-gray-600'>
                <label>Seu telefone </label>
                <MaskedInputField
                  mask={[
                    '(',
                    /\d/,
                    /\d/,
                    ')',
                    ' ',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    '-',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                  ]}
                  name='phone'
                  type='phone'
                  placeholder='(11) 99999-9999'
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className='w-full mt-6'>
            <Stepper buttonState={ButtonState.normal} />
          </div>
        </form>
      </Formik>
    </div>
  );
};

export { InfoPersonal };
