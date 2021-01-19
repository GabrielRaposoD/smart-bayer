// Module Imports
import React, { useState } from "react";
import { services } from "@mocks/services";

// Components Import
import { Logo, Stepper } from "@components/index";
import { SelectInput } from "@components/SelectInput";
import { Option, Service } from "@typings/index";

const InfoService: React.FC = () => {
  const mappedServices: Option[] = services.map((service) => {
    return { value: service.name, label: service.description };
  });
  const [selectedService, setSelectedService] = useState<Option>(null);

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
            <label>Qual o serviço oferecido </label>
            <SelectInput
              options={mappedServices}
              value={selectedService}
              onChange={(value) => setSelectedService(value)}
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

export { InfoService };
