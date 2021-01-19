// Module Imports
import React, { useState } from "react";
import { templates } from "@mocks/templates";

// Components Import
import { Logo, Stepper } from "@components/index";
import { SelectInput } from "@components/SelectInput";
import { Option } from "@typings/index";

const VideoType: React.FC = () => {
  const mappedTemplates: Option[] = templates.map((template) => {
    return { value: template.id, label: template.type };
  });
  const [selectedTemplate, setSelectedTemplate] = useState<Option>(null);

  return (
    <div className="flex flex-col items-start justify-between h-full">
      <div className="flex flex-col">
        <Logo />
        <div className="mt-10">
          <h1 className="text-4xl font-bold leading-snug text-gray-800">
            Que tipo de vídeo você gostaria de criar?
          </h1>
          <h3 className="mt-3 text-2xl font-medium text-gray-600">
            Escolha nas opções abaixo o que melhor te atende
          </h3>
          <div className="mt-3">
            <SelectInput
              options={mappedTemplates}
              value={selectedTemplate}
              onChange={(value) => setSelectedTemplate(value)}
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

export { VideoType };
