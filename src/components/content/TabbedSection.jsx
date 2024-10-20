import React from "react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Projects } from "./Projects";
import Experience from "./Experience";
import Certificates from "./Certificates";

const TabbedSection = () => {
  return (
    <div className="overflow-x-auto">
      <Tabs aria-label="Full width tabs" variant="fullWidth">
        <Tabs.Item active title="Projects" icon={HiUserCircle}>
          <Projects />
        </Tabs.Item>
        <Tabs.Item title="Experiences" icon={MdDashboard}>
          <Experience />
        </Tabs.Item>
        <Tabs.Item title="Certificates" icon={HiAdjustments}>
          <Certificates />
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default TabbedSection;
