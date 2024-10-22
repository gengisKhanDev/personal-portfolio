import React from "react";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col space-y-8 p-4">
      {/* Primer Bloque de Educación */}
      <div className="flex items-start space-x-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/education/Univalle.png"
            alt="Logo"
            className="w-16 h-16 md:w-28 md:h-28 rounded-full"
          />
        </div>

        {/* Textos */}
        <div className="flex flex-col">
          {/* Título */}
          <h2 className="text-xl md:text-2xl font-bold text-[#d4af37]">
            {t("content.education1.title")}
          </h2>
          {/* Subtítulo */}
          <h3 className="text-md md:text-lg font-bold white-custom">
            {t("content.education1.subtitle")}
          </h3>
          {/* Descripción */}
          <p className="text-sm md:text-base white-custom">
            {t("content.education1.description")}
          </p>
        </div>
      </div>

      {/* Barra separadora vertical */}
      <div className="w-full border-l-2 border-[#d4af37] my-4 mx-auto"></div>

      {/* Segundo Bloque de Educación */}
      <div className="flex items-start space-x-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/education/aws-certified-cloud-practitioner.png"
            alt="Logo"
            className="w-16 h-16 md:w-28 md:h-28 rounded-full"
          />
        </div>

        {/* Textos */}
        <div className="flex flex-col">
          {/* Título */}
          <h2 className="text-xl md:text-2xl font-bold text-[#d4af37]">
            {t("content.education2.title")}
          </h2>
          {/* Subtítulo */}
          <h3 className="text-md md:text-lg font-bold white-custom">
            <a
              target="blank"
              className="hover:border-b-2 hover:border-b-[#d4af37]"
              href="https://www.credly.com/badges/ca4ed375-8443-4498-86ac-0d0d9d333957/public_url"
            >
              {t("content.education2.subtitle")}
            </a>
          </h3>
          {/* Descripción */}
          <p className="text-sm md:text-base white-custom">
            {t("content.education2.description")}
          </p>
        </div>
      </div>

      {/* Barra separadora vertical */}
      <div className="w-full border-l-2 border-[#d4af37] my-4 mx-auto"></div>

      {/* Segundo Bloque de Educación */}
      <div className="flex items-start space-x-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/education/devops-aws-coursera.png"
            alt="Logo"
            className="w-16 h-16 md:w-28 md:h-28 rounded-full"
          />
        </div>

        {/* Textos */}
        <div className="flex flex-col">
          {/* Título */}
          <h2 className="text-xl md:text-2xl font-bold text-[#d4af37]">
            {t("content.education3.title")}
          </h2>
          {/* Subtítulo */}
          <h3 className="text-md md:text-lg font-bold white-custom">
            <a
              target="blank"
              className="hover:border-b-2 hover:border-b-[#d4af37]"
              href="https://www.credly.com/badges/c41fc5aa-b1e3-4c00-a129-576f87ef920d/public_url"
            >
              {t("content.education3.subtitle")}
            </a>
          </h3>
          {/* Descripción */}
          <p className="text-sm md:text-base white-custom">
            {t("content.education3.description")}
          </p>
        </div>
      </div>

      {/* Añade más bloques de educación si es necesario */}
    </div>
  );
};

export default Education;
