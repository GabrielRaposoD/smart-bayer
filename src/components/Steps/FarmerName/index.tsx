// Module Imports
import React from "react";

// Components Import
import { Logo, Stepper } from "@components/index";

const FarmerName: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-between h-full">
      <div className="flex flex-col">
        <Logo />
        <div className="mt-16">
          <h1 className="text-4xl font-bold leading-snug text-gray-800">
            Qual primeiro nome do <br />
            agricultor?
          </h1>
          <h3 className="mt-3 text-base font-medium text-gray-600">
            O nome aparecerá no material que você pode visualizar ao lado.
          </h3>
          <div>
            <h3 className="mt-3 text-2xl font-medium text-gray-600">
              --input--
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full mt-6">
        <Stepper step={1} />
      </div>
    </div>
  );
};

export { FarmerName };
