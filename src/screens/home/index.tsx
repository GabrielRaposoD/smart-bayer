// Module Imports
import React from 'react';

// Application Import
import { MainLayout } from '@layout/index';

// Components Import
import {
  Introduction,
  VideoType,
  FarmerName,
  VideoInformation,
} from '@components/Steps';

const IndexPage: React.FC = () => {
  return (
    <MainLayout>
      <VideoInformation />
    </MainLayout>
  );
};

export { IndexPage };
