// Module Imports
import React from 'react'

// Application Import
import { MainLayout } from '@layout/index'

// Components Import
import { Introduction, VideoType } from '@components/Steps'

const IndexPage: React.FC = () => {
  return (
    <MainLayout>
      <VideoType />
    </MainLayout>
  )
}

export { IndexPage }
