// Module Imports
import React from 'react'

// Application Import
import { MainLayout } from '@layout/index'
import { useInfo } from '@store/useInfo'

// Components Import
import { items } from '@mocks/screenComponents'

const IndexPage: React.FC = () => {
  const { video, steps, currentStep } = useInfo()
  const item = items[steps[currentStep] - 1]

  console.log(video)

  if (steps[currentStep] === 8) {
    return <item.Component />
  }

  return (
    <MainLayout
      img={item.img}
      isCover={item.isCover}
      hasCard={item.hasCard}
      cardImg={video.thumbnail_url || item.cardImg}
      hasMobileImg={item.hasMobileImg}
    >
      <item.Component />
    </MainLayout>
  )
}

export { IndexPage }
