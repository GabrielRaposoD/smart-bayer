// Module Imports
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

// Components Import
import { Logo, Stepper } from '@components/index'
import { TextInput } from '@components/TextInput'
import { ButtonState } from '@typings/index'
import { useInfo } from '@store/useInfo'

const validationSchema = Yup.object({
  firstName: Yup.string().min(3, 'Nome requer ao menos 3 caracteres').required('This field is required.'),
})

const FarmerName: React.FC = () => {
  const { setFirstName, incrementCurrentStep } = useInfo()

  return (
    <div className="flex flex-col items-start justify-between h-full px-6 md:px-0 md:min-h-0 min-h-screen">
      <Formik
        initialValues={{ firstName: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setFirstName(values.firstName)
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
                Qual primeiro nome do <br />
                agricultor?
              </h1>
              <h3 className="mt-3 text-base font-medium text-gray-600">
                O nome aparecerá no material que você pode visualizar ao lado.
              </h3>
              <div className="mt-4">
                <TextInput id="firstName" name="firstName" placeholder="Digite" />
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

export { FarmerName }
