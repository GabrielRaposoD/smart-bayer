// Module Imports
import React from "react";

// Components Import
import { Logo, Stepper } from "@components/index";

const VideoType: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-between h-full">
      <div className="flex flex-col">
        <Logo />
        <div className="mt-10">
          <h1 className="text-4xl font-bold leading-snug text-gray-800">
            Que tipo de vídeo você gostaria de criar?
          </h1>
          <h3 className="mt-6 text-xl font-medium text-gray-600">
            Escolha nas opções abaixo o que melhor te atende
          </h3>
          <h3 className="text-2xl font-medium text-gray-600">--input--</h3>
        </div>
      </div>
      <div className="w-full mt-6">
        <Stepper step={1} />
      </div>
    </div>
  );
};

export { VideoType };
