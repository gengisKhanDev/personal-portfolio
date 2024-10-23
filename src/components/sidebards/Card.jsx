import React from "react";
import { useTranslation } from "react-i18next";
import { Tooltip } from "flowbite-react";

const Card = ({ title, icons }) => {
  const { t } = useTranslation();

  return (
    <div
      className="block rounded-lg bg-cover shadow-lg"
      style={{
        backgroundImage: "url('/marcos-delgados.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        width: "192px",
      }}
    >
      <h5 className="mt-20 text-center text-base font-medium leading-tight text-black">
        {t(title)}
      </h5>
      <div className="px-11 pt-2 grid grid-cols-3 gap-2">
        {icons.map((icon, index) => (
          <Tooltip content={icon.alt} key={index}>
            <img
              src={icon.src}
              alt={icon.alt}
              className="h-8 filter hover:invert-[38%] hover:sepia-[95%] hover:saturate-[329%] hover:hue-rotate-[14deg] hover:brightness-[99%] hover:contrast-[108%]"
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default Card;