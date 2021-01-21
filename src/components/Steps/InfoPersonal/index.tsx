// Module Imports
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

// Components Import
import { Logo, Stepper } from '@components/index'
import { useInfo } from '@store/useInfo'
import { TextInput } from '@components/TextInput'
import { ButtonState } from '@typings/index'

const validationSchema = Yup.object({
  fullname: Yup.string().required('Insira seu nome completo'),
  email: Yup.string().email('E-mail incorreto').required('Insira seu e-mail completo'),
})

const InfoPersonal: React.FC = () => {
  const { fullName, setFullName, email, setEmail, incrementCurrentStep } = useInfo()

  return (
    <div className="flex flex-col items-start justify-between h-full px-6 md:px-0 md:min-h-0 md:pb-0 pb-10 min-h-screen">
      <Formik
        initialValues={{ fullname: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setFullName(values.fullname)
          setEmail(values.email)
          incrementCurrentStep()
        }}
      >
        <form className="w-full h-full md:min-h-0 min-h-screen md:pb-0 pb-10 flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="mt-6 md:mt-0">
              <Logo />
            </div>
            <div className="mt-16">
              <h1 className="text-2xl md:text-4xl font-bold leading-snug text-gray-800">
                Insira suas informações
                <br />
                pessoais
              </h1>
              <h3 className="mt-3 text-base font-medium text-gray-600">
                Além de poder baixar, você também receberá o arquivo final por email.
              </h3>
              <div className="mt-10 text-base font-medium text-gray-600">
                <label>Seu nome completo </label>
                <TextInput
                  name="fullname"
                  placeholder="Digite"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value)
                  }}
                />
              </div>
              <div className="mt-10 text-base font-medium text-gray-600">
                <label>Seu e-mail </label>
                <TextInput
                  name="email"
                  placeholder="Digite"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-6">
            <Stepper buttonState={ButtonState.normal} />
          </div>
        </form>
      </Formik>
    </div>
  )
}

export { InfoPersonal }
