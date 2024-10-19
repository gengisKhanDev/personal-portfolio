import React, { useState } from "react";
import { Button } from "flowbite-react";
import { Carousel } from "flowbite-react";

const TabbedSection = () => {
  const [activeTab, setActiveTab] = useState("Proyectos");

  const showTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Contenedor de las pestañas */}
      <div className="flex justify-around bg-gray-800 p-2 rounded-t-lg">
        <button
          onClick={() => showTab("Proyectos")}
          className={`px-4 py-2 ${activeTab === "Proyectos" ? "bg-gray-700" : "bg-gray-600"} text-white rounded`}
        >
          Proyectos
        </button>
        <button
          onClick={() => showTab("Experiencia")}
          className={`px-4 py-2 ${activeTab === "Experiencia" ? "bg-gray-700" : "bg-gray-600"} text-white rounded`}
        >
          Experiencia
        </button>
        <button
          onClick={() => showTab("Educación")}
          className={`px-4 py-2 ${activeTab === "Educación" ? "bg-gray-700" : "bg-gray-600"} text-white rounded`}
        >
          Educación
        </button>
      </div>

      {/* Contenido de las pestañas */}
      <div className="bg-gray-700 p-6 rounded-b-lg">
        {activeTab === "Proyectos" && (
          <div>
            <h2 className="text-white text-xl mb-4">Proyectos</h2>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <Carousel>
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                  alt="..."
                />
                <img
                  src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                  alt="..."
                />
              </Carousel>
            </div>
          </div>
        )}

        {activeTab === "Experiencia" && (
          <div>
            <h2 className="text-white text-xl mb-4">Experiencia</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis.
            </p>
          </div>
        )}

        {activeTab === "Educación" && (
          <div>
            <h2 className="text-white text-xl mb-4">Educación</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedSection;
