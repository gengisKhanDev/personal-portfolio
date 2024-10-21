import React from "react";
import { Carousel } from "flowbite-react";
import { FaGithub } from "react-icons/fa"; // Para usar íconos de GitHub

export function Projects() {
  const projects = [
    {
      image: "/projects/capture.png",
      title: "Project 1",
      description: "Este es un proyecto personal simple para crear una página web estática de un negocio de café-bar llamado BCC: Beer & Coffee Company. Este es mi primer proyecto personal, y en él utilizo el framework Materialize CSS para aprovechar su facilidad de uso en la creación de componentes como el carrusel.",
      githubLink: "https://github.com/your-profile/project-1",
      techStack: ["/icons/languajes/javascript.svg", "/icons/frontend/react.svg"], // Añade tus propios iconos
    },
    {
      image: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      title: "Project 2",
      description: "A brief description of Project 2",
      githubLink: "https://github.com/your-profile/project-2",
      techStack: ["/icons/languajes/pyton.svg", "/icons/languages/django.svg"],
    },
    // Añade más proyectos según sea necesario
  ];

  return (
    <div className="w-full h-80 sm:h-96 md:h-[25rem] lg:h-[25rem] xl:h-[25rem] 2xl:h-[32rem]">
      <Carousel leftControl="." rightControl="." pauseOnHover className="w-full md:w-[90%] lg:w-[80%] mx-auto">
        {projects.map((project, index) => (
          <div className="relative w-full h-full" key={index}>
            {/* Imagen de fondo con opacidad */}
            <img
              src={project.image}
              alt={`Project ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />

            {/* Contenido sobre la imagen de fondo */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 text-white bg-gradient-to-t from-black/70 via-black/50 to-transparent">
              {/* Nombre del proyecto */}
              <h2 className="text-2xl font-bold">{project.title}</h2>

              {/* Descripción del proyecto */}
              <p className="text-sm text-center">{project.description}</p>

              {/* Iconos de tecnologías usadas */}
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

              {/* Botón de GitHub */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
              >
                <FaGithub className="mr-2" />
                View Code
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
