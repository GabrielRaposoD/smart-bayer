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
import { useInfo } from '@store/useInfo';
import { LoadingVideo } from '@components/Steps/LoadingVideo';

const IndexPage: React.FC = () => {
  const { steps, currentStep } = useInfo();
  return (
    <>
      {steps[currentStep] === 1 ? (
        <MainLayout>
          <Introduction />
        </MainLayout>
      ) : steps[currentStep] === 2 ? (
        <MainLayout>
          <VideoType />
        </MainLayout>
      ) : steps[currentStep] === 3 ? (
        <MainLayout>
          <FarmerName />
        </MainLayout>
      ) : steps[currentStep] === 4 ? (
        <MainLayout>
          <InfoCompany />
        </MainLayout>
      ) : steps[currentStep] === 5 ? (
        <MainLayout>
          <InfoService />
        </MainLayout>
      ) : steps[currentStep] === 6 ? (
        <MainLayout>
          <InfoExperience />
        </MainLayout>
      ) : steps[currentStep] === 7 ? (
        <MainLayout>
          <InfoPersonal />
        </MainLayout>
      ) : steps[currentStep] === 8 ? (
        <MainLayout>
          <LoadingVideo />
        </MainLayout>
      ) : steps[currentStep] === 9 ? (
        <MainLayout>
          <VideoDone />
        </MainLayout>
      ) : null}
    </>
  );
};

export { IndexPage };
