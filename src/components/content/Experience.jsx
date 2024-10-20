import React from "react";
import './Experience.css'; // Tailwind & Flowbite CSS

const Experience = () => {
  return (
    <div class="CV-page">
      <div class="CV-grid">
        <div class="CV-grid-column">
          <div class="CV-jobs">
            <h2 class="CV-secondaryHeading CV-jobs-heading">
              Relevant Experience
            </h2>
            <section class="CV-timeline CV-job">
              <h3 class="CV-timeline-heading">
                <span class="CV-timeline-heading-title">
                  Creative Technologist Co-op{" "}
                </span>
                &#8211;{" "}
                <span class="CV-timeline-heading-location">
                  Mullen Lowe U.S.{" "}
                </span>
                <small class="CV-timeline-heading-duration">
                  July 2015 - Present
                </small>
              </h3>
              <ul class="CV-timeline-details">
                <li class="CV-job-timeline-item">
                  Developed and maintained code for in-house and client websites
                  utilizing HTML5, CSS3, Javascript, jQuery, PHP, and Wordpress.
                </li>
                <li class="CV-job-timeline-item">
                  Tested front-end code in multiple browsers to ensure
                  cross-browser compatability.
                </li>
                <li class="CV-job-timeline-item">
                  Coordinated closely with other developers and digital
                  producers to expedite projects.
                </li>
                <li class="CV-job-timeline-item">
                  Clients included Lovesac, U.S. Cellular, JetBlue, and more.
                </li>
              </ul>
            </section>
            <section class="CV-timeline CV-job">
              <h3 class="CV-timeline-heading">
                <span class="CV-timeline-heading-title">
                  Research Assistant{" "}
                </span>
                &#8211;{" "}
                <span class="CV-timeline-heading-location">
                  NU College of Computer and Information Science
                </span>
                <small class="CV-timeline-heading-duration">
                  March 2015 - April 2015
                </small>
              </h3>
              <ul class="CV-timeline-details">
                <li class="CV-timeline-details-item">
                  Assisted a PhD student in the dept. of Human Computer
                  Interaction with the development of a software prototype using
                  front-end technologies to facilitate better understanding of
                  parent-child communication preferences and needs in low
                  socio-economic status families.{" "}
                </li>
                <li class="CV-timeline-details-item">
                  Worked remotely to meet weekly deadlines and project
                  checkpoints.
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
