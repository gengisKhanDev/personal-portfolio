import React from "react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Projects } from "./Projects";
import Experience from "./Experience";
import Certificates from "./Certificates";

const TabbedSection = () => {
  return (
    <div className="overflow-hidden w-full">
      <Tabs aria-label="Full width tabs" variant="fullWidth">
        <Tabs.Item active title="Projects">
          {/* Sección de Projects con scroll vertical */}
          <div className="h-[400px] md:h-[500px] overflow-y-auto overflow-x-hidden">
            <Projects />
          </div>
        </Tabs.Item>
        <Tabs.Item title="Experiences">
          {/* Sección de Experience con scroll vertical */}
          <div className="h-[400px] md:h-[500px] overflow-y-auto overflow-x-hidden">
            <Experience />
          </div>
        </Tabs.Item>
        <Tabs.Item title="Education">
          {/* Sección de Certificates con scroll vertical */}
          <div className="h-[400px] md:h-[500px] overflow-y-auto overflow-x-hidden">
            <Certificates />
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default TabbedSection;
