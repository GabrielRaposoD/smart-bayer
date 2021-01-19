// Module Imports
import React from 'react';

// Application Import
import { MainLayout } from '@layout/index';

// Components Import
import { useInfo } from '@store/useInfo';
import { items } from '@mocks/screenComponents';

const IndexPage: React.FC = () => {
  const { steps, currentStep } = useInfo();
  const item = items[steps[currentStep] - 1];

  if (steps[currentStep] === 8) {
    return <item.Component />;
  }

  return (
    <MainLayout
      img={item.img}
      isCover={item.isCover}
      hasCard={item.hasCard}
      cardImg={item.cardImg}
    >
      <item.Component />
    </MainLayout>
  );
};

export { IndexPage };
