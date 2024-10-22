import React from "react";
import "./Experience.css"; // Mantén el CSS personalizado donde sea necesario
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
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
                  {t("content.experience1.text1")}
                </li>
                <li className="CV-job-timeline-item mb-2">
                  {t("content.experience1.text2")}
                </li>
                <li className="CV-job-timeline-item mb-2">
                  {t("content.experience1.text3")}
                </li>
                <li className="CV-job-timeline-item mb-2">
                  {t("content.experience1.text4")}
                </li>
                <li className="CV-job-timeline-item mb-2">
                  {t("content.experience1.text5")}
                </li>
                <li className="CV-job-timeline-item mb-2">
                  {t("content.experience1.text6")}
                </li>
                <li className="CV-job-timeline-item mb-2">
                  {t("content.experience1.text7")}
                </li>
                <li className="CV-job-timeline-item mb-2">
                  {t("content.experience1.text8")}
                </li>
                <li className="CV-job-timeline-item mb-2">
                  {t("content.experience1.text9")}
                </li>
                <li className="CV-job-timeline-item mb-2">
                  {t("content.experience1.text10")}
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
                  {t("content.experience2.text1")}
                </li>
                <li className="CV-timeline-details-item mb-2">
                  {t("content.experience2.text2")}
                </li>
                <li className="CV-timeline-details-item mb-2">
                  {t("content.experience2.text3")}
                </li>
                <li className="CV-timeline-details-item mb-2">
                  {t("content.experience2.text4")}
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
