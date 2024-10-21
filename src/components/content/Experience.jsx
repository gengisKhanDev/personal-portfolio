import React from "react";
import "./Experience.css"; // Mantén el CSS personalizado donde sea necesario

const Experience = () => {
  return (
    <div className="CV-page max-w-3xl mx-auto p-6 text-[#f8f4e3] text-base font-sans">
      <div className="CV-grid flex">
        <div className="CV-grid-column flex-1">
          <div className="CV-jobs">
            <section className="CV-timeline CV-job relative pl-6 border-l border-[#d4af37]">
              <h3 className="CV-timeline-heading mb-4">
                <span className="CV-timeline-heading-title text-[#d4af37] italic uppercase">
                  Lifestar Vital Care
                </span>
                &#8211;
                <span className="CV-timeline-heading-location text-sm">
                  Edinburg, Texas, U.S. · Remote
                </span>
                <small className="CV-timeline-heading-duration text-xs text-[#f8f4e3] block">
                  Jan 2022 - Sep 2024
                </small>
              </h3>
              <ul className="CV-timeline-details list-disc pl-5">
                <li className="CV-job-timeline-item mb-2">
                  Added advanced search filters to enhance the usability of
                  report searches.
                </li>
                <li className="CV-job-timeline-item mb-2">
                  Developed modules, such as "protocols," which convert PDF
                  files to HTML with the help of a microservice built in Java.
                </li>
                <li className="CV-job-timeline-item mb-2">
                  Built functionality to allow users to view up to four reports
                  simultaneously.
                </li>
                <li className="CV-job-timeline-item mb-2">
                  Implemented functionality for generating PDF reports using
                  PDF.js to improve report readability.
                </li>
                <li className="CV-job-timeline-item mb-2">
                  Production Deployment: Deployed the system to production
                  environments using AWS.
                </li>
                <li className="CV-job-timeline-item mb-2">
                  Designed and implemented custom email templates for automated
                  communications.
                </li>
                <li className="CV-job-timeline-item mb-2">
                  Optimized database tables to improve report loading times and
                  system performance.
                </li>
                <li className="CV-job-timeline-item mb-2">
                  Updated code dependencies to ensure security and system
                  efficiency.
                </li>
                <li className="CV-job-timeline-item mb-2">
                  Managed and maintained server infrastructure to guarantee
                  operational continuity.
                </li>
                <li className="CV-job-timeline-item mb-2">
                  Contributed to the development of a web app in Kotlin,
                  tailored for mobile devices.
                </li>
              </ul>
            </section>
            <section className="CV-timeline CV-job relative pl-6 border-l border-[#d4af37] mt-4">
              <h3 className="CV-timeline-heading mb-4">
                <span className="CV-timeline-heading-title text-[#d4af37] italic uppercase">
                  Galaxy VR Cafe
                </span>
                &#8211;
                <span className="CV-timeline-heading-location text-sm">
                  Edinburg, Texas, U.S. · Remote
                </span>
                <small className="CV-timeline-heading-duration text-xs text-[#f8f4e3] block">
                  Jul 2022 - Dec 2023
                </small>
              </h3>
              <ul className="CV-timeline-details list-disc pl-5">
                <li className="CV-timeline-details-item mb-2">
                  User Functionality Development: I implemented a system where
                  users can customize their profiles and make reservations for
                  game lounges.
                </li>
                <li className="CV-timeline-details-item mb-2">
                  Administration Roles: I developed administrative tools that
                  allow for management of game listings on the website,
                  including adding game images and setting up tournaments and
                  events.
                </li>
                <li className="CV-timeline-details-item mb-2">
                  Web Design and Implementation: I contributed to the final web
                  design and handled server maintenance and deployment using
                  AWS.
                </li>
                <li className="CV-timeline-details-item mb-2">
                  Backend Maintenance: Managed the backend using MeteorJS and
                  MongoDB, ensuring smooth functionality across all user and
                  admin roles.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
