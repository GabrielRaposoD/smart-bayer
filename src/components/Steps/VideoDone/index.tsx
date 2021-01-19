// Module Imports
import React, { useState } from "react";
import { templates } from "@mocks/templates";

// Components Import
import { Logo, Stepper } from "@components/index";
import { SelectInput } from "@components/SelectInput";
import { Option } from "@typings/index";

const VideoDone: React.FC = () => {
  

    return (
        <div className="flex flex-col items-start justify-between h-full">
          <Logo />
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Seu vídeo está pronto!
            </h1>
            <h3 className="mt-3 text-base font-medium text-gray-600">
            Parabéns! Você criou um vídeo e poderá compartilhar com seus clientes.
            </h3>
          <div className="w-full">

            <div className="mt-6">
              <button className="w-2/3 py-2 text-xl font-medium text-white border border-solid rounded-full border-primary bg-primary">
            Baixar vídeo
              </button>
            </div>

          </div>
          </div>
            <h3 className="mt-3 text-base font-medium underline text-darkgreen">
            Criar um novo vídeo
            </h3>
        </div>
      );
    };

export { VideoDone };
