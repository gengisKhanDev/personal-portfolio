import React from "react";
import { FooterProyect } from "./components/footer/Footer";
import CardContainerLeft from "./components/sidebards/CardContainerLeft";
import TabbedSection from "./components/content/TabbedSection";
import CardContainerRight from "./components/sidebards/CardContainerRight";

function App() {
  return (
    <div className="App bg-[#13151a] min-h-screen flex flex-col">
      {/* Columnas laterales, visibles solo en pantallas medianas en adelante */}
      <div className="fixed top-4 left-4 h-full hidden md:block">
        <img
          src="/columnMejoradaIA.png"
          alt="Columna Izquierda"
          className="h-full"
        />
      </div>
      <div className="fixed top-4 right-4 h-full hidden md:block">
        <img
          src="/columnMejoradaIA.png"
          alt="Columna Derecha"
          className="h-full"
        />
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 pt-4 flex-1 flex flex-col justify-between h-full">
        <div className="flex-1 flex flex-col md:flex-row">
          {/* Habilidades */}
          <div className="w-full md:w-1/3 p-0 flex items-center justify-center bg-[#13151a]">
            <CardContainerLeft />
          </div>

          {/* Contenedor del TabbedSection con el nuevo título */}
          <div className="w-full md:w-2/3 p-0 mx-0 md:mx-4 mt-4 md:mt-0 flex items-center justify-center flex-col bg-[#13151a]">
            {/* Título "Bienvenidos a mi portafolio" */}
            <div className="w-full text-center mb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-[#d4af37]">
                Bienvenidos a mi Portafolio
              </h1>
            </div>

            {/* TabbedSection */}
            <TabbedSection />
          </div>

          {/* Certificados */}
          <div className="w-full md:w-1/3 p-0 flex items-center justify-center bg-[#13151a]">
            <CardContainerRight />
          </div>
        </div>

        {/* Footer siempre visible sin scroll */}
        <div className="w-full">
          <FooterProyect />
        </div>
      </div>
    </div>
  );
}

export default App;
