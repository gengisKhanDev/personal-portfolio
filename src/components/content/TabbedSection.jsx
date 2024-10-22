import React from "react";
import { Tabs } from "flowbite-react";
import { Projects } from "./Projects";
import Experience from "./Experience";
import Education from "./Education";

const TabbedSection = () => {
  return (
    <div className="overflow-hidden w-full">
      <Tabs
        aria-label="Full width tabs"
        variant="fullWidth"
        theme={{
          tablist: {
            variant: {
              fullWidth:
                "grid w-full grid-flow-col divide-x divide-[#d4af37] rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400",
            },
            tabitem: {
              base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-2 focus:ring-[#d4af37] disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
              variant: {
                fullWidth: {
                  active: {
                    on: "active rounded-none bg-[#f8f4e3] p-4 text-gray-900 border-b-2 border-[#d4af37] dark:bg-gray-700 dark:text-white",
                    off: "rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white",
                  },
                },
              },
            },
          },
        }}
      >
        <Tabs.Item active title="Projects">
          {/* Sección de Projects con scroll vertical */}
          <div className="h-[400px] md:h-[400px] overflow-y-auto overflow-x-hidden">
            <Projects />
          </div>
        </Tabs.Item>
        <Tabs.Item title="Experiences">
          {/* Sección de Experience con scroll vertical */}
          <div className="h-[400px] md:h-[400px] overflow-y-auto overflow-x-hidden">
            <Experience />
          </div>
        </Tabs.Item>
        <Tabs.Item title="Education">
          {/* Sección de Certificates con scroll vertical */}
          <div className="h-[400px] md:h-[400px] overflow-y-auto overflow-x-hidden">
            <Education />
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default TabbedSection;
