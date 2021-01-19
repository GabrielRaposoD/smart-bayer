// Module Imports
import React, { useState } from "react";
import { companies } from "@mocks/companies";

// Components Import
import { Logo, Stepper } from "@components/index";
import { SelectInput } from "@components/SelectInput";
import { Option } from "@typings/index";

const InfoCompany: React.FC = () => {
  const mappedCompanies: Option[] = companies.map((company) => {
    return { value: company.id, label: company.name };
  });
  const [selectedCompanies, setSelectedCompanies] = useState<Option>(null);

  return (
    <div className="flex flex-col items-start justify-between h-full">
      <div className="flex flex-col">
        <Logo />
        <div className="mt-16">
          <h1 className="text-4xl font-bold leading-snug text-gray-800">
            Quais são as informações do seu video?
          </h1>
          <h3 className="mt-3 text-base font-medium text-gray-600">
            Insira as informações abaixo para criarmos seu anúncio, ele
            aparecerá no material que você pode visualizar ao lado.
          </h3>
          <div className="mt-10 text-base font-medium text-gray-600">
            <label> Qual a marca do milho?</label>
            <SelectInput
              options={mappedCompanies}
              value={selectedCompanies}
              onChange={(value) => setSelectedCompanies(value)}
            />
            <div className="mt-6 text-base font-medium text-gray-600">
              <label> Qual o Híbrido do milho?</label>
              <SelectInput
                options={mappedCompanies}
                value={selectedCompanies}
                onChange={(value) => setSelectedCompanies(value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-6">
        <Stepper step={1} />
      </div>
    </div>
  );
};

export { InfoCompany };
