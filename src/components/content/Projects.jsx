import React from "react";
import { Carousel } from "flowbite-react";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      image: "/projects/project1.png",
      titleKey: "content.project1.title",
      descriptionKey: "content.project1.description",
      githubLink: "https://github.com/gengisKhanDev/laberinto-IA",
      techStack: ["/projects/icons/python.svg"],
    },
    {
      image: "/projects/project2.png",
      titleKey: "content.project2.title",
      descriptionKey: "content.project2.description",
      githubLink: "https://github.com/gengisKhanDev/ejercicios-metodos-num",
      techStack: [
        "/projects/icons/html5.svg",
        "/projects/icons/css3.svg",
        "/projects/icons/javascript.svg",
      ],
    },
    {
      image: "/projects/project3.png",
      titleKey: "content.project3.title",
      descriptionKey: "content.project3.description",
      githubLink: "https://github.com/gengisKhanDev/beer-coffee-company",
      techStack: [
        "/projects/icons/html5.svg",
        "/projects/icons/css3.svg",
        "/projects/icons/javascript.svg",
      ],
    },
  ];

  return (
    <div className="w-full h-80 sm:h-96 md:h-[25rem] lg:h-[25rem] xl:h-[25rem] 2xl:h-[32rem]">
      <Carousel
        leftControl="."
        rightControl="."
        className="w-full md:w-[90%] lg:w-[80%] mx-auto"
      >
        {projects.map((project, index) => (
          <div className="relative w-full h-full" key={index}>
            <img
              src={project.image}
              alt={`Project ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 white-custom bg-gradient-to-t from-black/70 via-black/50 to-transparent">
              <h2 className="text-2xl font-bold">{t(project.titleKey)}</h2>

              <p className="text-sm text-center">{t(project.descriptionKey)}</p>

              <div className="flex space-x-4">
                {project.techStack.map((tech, i) => (
                  <img
                    key={i}
                    src={tech}
                    alt="Tech Stack Icon"
                    className="h-8 w-8"
                  />
                ))}
              </div>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
              >
                <FaGithub className="mr-2" />
                {t("content.viewCode")}
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
