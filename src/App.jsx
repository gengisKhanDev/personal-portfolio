import React from "react";
import { FooterProyect } from "./components/footer/Footer";
import CardContainerLeft from "./components/sidebards/CardContainerLeft";
import TabbedSection from "./components/content/TabbedSection";
import CardContainerRight from "./components/sidebards/CardContainerRight";

function App() {
  return (
    <div className="App bg-[#13151a] min-h-screen flex flex-col justify-between">
      {/* Contenedor principal */}
      <div className="flex flex-1">
        {/* Cards laterales */}
        <div className="w-1/5">
          <CardContainerLeft />
        </div>

        {/* Contenido principal (TabbedSection) */}
        <div className="w-3/5">
          <TabbedSection />
        </div>

        {/* Card lateral derecho */}
        <div className="w-1/5">
          <CardContainerRight />
        </div>
      </div>

      {/* Footer */}
      <FooterProyect />
    </div>
  );
}

export default App;
