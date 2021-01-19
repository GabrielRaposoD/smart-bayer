// Module Imports
import React from 'react';

// Application Import
import { MainLayout } from '@layout/index';

// Components Import
import {
  Introduction,
  VideoType,
  FarmerName,
  InfoCompany,
  InfoService,
  InfoPersonal,
  VideoDone,
  InfoExperience,
} from '@components/Steps';

const IndexPage: React.FC = () => {
  return (
    <MainLayout>
      <InfoCompany />
    </MainLayout>
  );
};

export { IndexPage };
