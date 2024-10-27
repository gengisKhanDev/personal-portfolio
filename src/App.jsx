import React from "react";
import { FooterProyect } from "./components/footer/Footer";
import CardContainerLeft from "./components/sidebards/CardContainerLeft";
import TabbedSection from "./components/content/TabbedSection";
import CardContainerRight from "./components/sidebards/CardContainerRight";
import CardMobile from "./components/sidebards/CardMobile";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div
      className="App bg-[#13151a] bg-cover bg-center min-h-screen flex flex-col"
      style={{ backgroundImage: `url(/fondo20.png)` }}
    >
      <div className="fixed top-4 left-4 h-full hidden md:block">
        <img
          src="/columna.png"
          alt="Columna Izquierda"
          className="h-full"
        />
      </div>
      <div className="fixed top-4 right-4 h-full hidden md:block">
        <img
          src="/columna.png"
          alt="Columna Derecha"
          className="h-full"
        />
      </div>

      <div className="container mx-auto px-4 pt-4 flex-1 flex flex-col justify-between h-full">
        <div className="flex-1 flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 p-0 order-2 md:order-1 hidden md:flex items-center justify-center">
            <CardContainerLeft />
          </div>

          <div className="w-full md:w-2/3 p-0 order-1 md:order-2 flex items-center justify-center flex-col">
            <div className="w-full text-center">
              <h1
                className="text-3xl md:text-4xl font-bold text-[#d4af37]"
                style={{ fontFamily: "monkton-incised-regular" }}
              >
                {t("content.title")}
              </h1>
              <h5 className="font-bold text-[#d4af37]" style={{ fontFamily: "monkton-incised-regular" }}>{t("content.subtitle")}</h5>
            </div>
            <div className="w-full mt-2">
              <img
                src="/separador.png"
                alt="Separador Elegante"
                className="w-full h-auto"
              />
            </div>
            <TabbedSection />
          </div>

          <div className="w-full md:w-1/3 p-0 order-3 hidden md:flex items-center justify-center">
            <CardContainerRight />
          </div>
        </div>

        <div className="w-full md:hidden flex justify-center order-2">
          <CardMobile />
        </div>

        <div className="w-full order-3">
          <FooterProyect />
        </div>
      </div>
    </div>
  );
}

export default App;
