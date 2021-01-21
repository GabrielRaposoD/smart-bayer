// Module Imports
import React from 'react'

// Application Import
import { MainLayout } from '@layout/index'
import { useInfoHook } from '@hooks/useInfoHook'
import { useInfo } from '@store/useInfo'

// Components Import
import { items } from '@mocks/screenComponents'

const IndexPage: React.FC = () => {
  const { steps, currentStep } = useInfo()
  const hook = useInfoHook()
  const item = items[steps[currentStep] - 1]

  if (steps[currentStep] === 8) {
    return <item.Component />
  }

  return (
    <MainLayout
      img={item.img}
      isCover={item.isCover}
      hasCard={item.hasCard}
      cardImg={item.cardImg}
      hasMobileImg={item.hasMobileImg}
    >
      <item.Component />
    </MainLayout>
  )
}

export { IndexPage }
