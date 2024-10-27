import React from "react";
import { Tabs } from "flowbite-react";
import { Projects } from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import { useTranslation } from "react-i18next";

const TabbedSection = () => {
  const { t } = useTranslation();
  return (
    <div className="overflow-hidden w-full">
      <Tabs
        aria-label="Full width tabs"
        variant="fullWidth"
        theme={{
          tablist: {
            variant: {
              fullWidth:
                "grid w-full grid-flow-col md:grid-cols-4 divide-x divide-[#d4af37] rounded-none text-xs md:text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400",
            },
            tabitem: {
              base: "flex items-center justify-center p-2 md:p-4 rounded-t-lg text-xs md:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#d4af37] disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
              variant: {
                fullWidth: {
                  active: {
                    on: "active bg-[#f8f4e3] text-gray-900 border-b-2 border-[#d4af37] dark:bg-gray-700 dark:text-white",
                    off: "bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white",
                  },
                },
              },
            },
          },
        }}
      >
        <Tabs.Item active title={t("content.tabProjects")}>
          <div className="h-auto max-h-[400px] md:h-[400px] overflow-y-auto overflow-x-hidden">
            <Projects />
          </div>
        </Tabs.Item>
        <Tabs.Item title={t("content.tabExperience")}>
          <div className="h-auto max-h-[400px] md:h-[400px] overflow-y-auto overflow-x-hidden">
            <Experience />
          </div>
        </Tabs.Item>
        <Tabs.Item title={t("content.tabEducation")}>
          <div className="h-auto max-h-[400px] md:h-[400px] overflow-y-auto overflow-x-hidden">
            <Education />
          </div>
        </Tabs.Item>
        <Tabs.Item title={t("content.tabAbout")}>
          <div className="h-auto max-h-[400px] md:h-[400px] overflow-y-auto overflow-x-hidden">
            <h5 className="white-custom">{t("content.aboutText1")}</h5>
            <br />
            <h5 className="white-custom">{t("content.aboutText2")}</h5>
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default TabbedSection;
