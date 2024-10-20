import React from "react";
import { FooterProyect } from "./components/footer/Footer";
import CardContainerLeft from "./components/sidebards/CardContainerLeft";
import TabbedSection from "./components/content/TabbedSection";
import CardContainerRight from "./components/sidebards/CardContainerRight";

function App() {
  return (
    <div className="App bg-[#13151a] min-h-screen relative">
      {/* Columnas laterales, visibles solo en pantallas medianas en adelante */}
      <div className="fixed top-0 left-0 h-full hidden md:block">
        <img src="/columnMejoradaIA.png" alt="Columna Izquierda" className="h-full" />
      </div>
      <div className="fixed top-0 right-0 h-full hidden md:block">
        <img src="/columnMejoradaIA.png" alt="Columna Derecha" className="h-full" />
      </div>

      {/* Contenido principal con estructura responsive */}
      <div className="container mx-auto px-4 pt-4 flex flex-col justify-between h-full">
        <div className="flex-1">
          {/* Sección de presentación */}

          {/* Sección central responsive */}
          <div className="flex flex-col md:flex-row mt-6">
            {/* Habilidades */}
            <div className="w-full md:w-1/3 bg-yellow-400 p-4">
              <CardContainerLeft />
            </div>

            {/* Proyectos */}
            <div className="w-full md:w-1/3 bg-blue-500 p-4 mx-0 md:mx-4 mt-4 md:mt-0">
              <TabbedSection />
              {/* <TabbedSection /> */}
            </div>

            {/* Certificados */}
            <div className="w-full md:w-1/3 bg-yellow-300 p-4 mt-4 md:mt-0">
              <CardContainerRight />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-pink-500 w-full p-4">
          <FooterProyect />
        </div>
      </div>
    </div>
  );
}

export default App;
