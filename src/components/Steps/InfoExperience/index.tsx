// Module Imports
import React, { useState } from "react";
import { experiences } from "@mocks/experiences";

// Components Import
import { Logo, Stepper } from "@components/index";
import { SelectInput } from "@components/SelectInput";
import { Option, Service } from "@typings/index";

const InfoExperience: React.FC = () => {
  const mappedExperiences: Option[] = experiences.map((experience) => {
    return { value: experience.name, label: experience.description };
  });
  const [selectedExperience, setSelectedExperience] = useState<Option>(null);

  return (
    <div className="flex flex-col items-start justify-between h-full">
      <div className="flex flex-col">
        <Logo />
        <div className="mt-10">
          <h1 className="text-4xl font-bold leading-snug text-gray-800">
            Quais são as informações do seu video?
          </h1>
          <h3 className="mt-3 text-base font-medium text-gray-600">
            Insira as informações abaixo para criarmos seu anúncio, ele
            aparecerá no material que você pode visualizar ao lado.
          </h3>
          <div className="mt-10 text-base font-medium text-gray-600">
            <label>Qual a experiência oferecida </label>
            <SelectInput
              options={mappedExperiences}
              value={selectedExperience}
              onChange={(value) => setSelectedExperience(value)}
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-6">
        <Stepper step={1} />
      </div>
    </div>
  );
};

export { InfoExperience };
