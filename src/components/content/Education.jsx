import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col space-y-8 p-4">
      {/* Primer Bloque de Educación */}
      <div className="flex items-start space-x-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/education/Univalle.png"
            alt="Logo"
            className="w-16 h-16 md:w-28 md:h-28 rounded-full"
          />
        </div>

        {/* Textos */}
        <div className="flex flex-col">
          {/* Título */}
          <h2 className="text-xl md:text-2xl font-bold text-[#d4af37]">
            Universidad del Valle
          </h2>
          {/* Subtítulo */}
          <h3 className="text-md md:text-lg font-bold white-custom">
            Ingenieria en Sistemas
          </h3>
          {/* Descripción */}
          <p className="text-sm md:text-base white-custom">
            Soy Ingeniero en Sistemas graduado de la Universidad del Valle, una
            de las instituciones más prestigiosas del país. Durante mi
            formación, adquirí sólidos conocimientos en desarrollo de software,
            arquitecturas de sistemas y análisis de datos. A lo largo de mi
            carrera, aprendí a aplicar metodologías ágiles, así como a trabajar
            con tecnologías avanzadas, lo que me permitió desarrollar
            habilidades técnicas y de resolución de problemas que me preparan
            para enfrentar los retos del mundo profesional.
          </p>
        </div>
      </div>

      {/* Barra separadora vertical */}
      <div className="w-full border-l-2 border-[#d4af37] my-4 mx-auto"></div>

      {/* Segundo Bloque de Educación */}
      <div className="flex items-start space-x-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/education/aws-certified-cloud-practitioner.png"
            alt="Logo"
            className="w-16 h-16 md:w-28 md:h-28 rounded-full"
          />
        </div>

        {/* Textos */}
        <div className="flex flex-col">
          {/* Título */}
          <h2 className="text-xl md:text-2xl font-bold text-[#d4af37]">
            AWS Certified Cloud Practitioner
          </h2>
          {/* Subtítulo */}
          <h3 className="text-md md:text-lg font-bold white-custom">
            <a target="blank" className="hover:border-b-2 hover:border-b-[#d4af37]" href="https://www.credly.com/badges/ca4ed375-8443-4498-86ac-0d0d9d333957/public_url">Issued by Amazon Web Services Training and Certification</a>
          </h3>
          {/* Descripción */}
          <p className="text-sm md:text-base white-custom">
            Earners of this certification have a fundamental understanding of IT
            services and their uses in the AWS Cloud. They demonstrated cloud
            fluency and foundational AWS knowledge. Badge owners are able to
            identify essential AWS services necessary to set up AWS-focused
            projects.
          </p>
        </div>
      </div>

      {/* Barra separadora vertical */}
      <div className="w-full border-l-2 border-[#d4af37] my-4 mx-auto"></div>

      {/* Segundo Bloque de Educación */}
      <div className="flex items-start space-x-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/education/devops-aws-coursera.png"
            alt="Logo"
            className="w-16 h-16 md:w-28 md:h-28 rounded-full"
          />
        </div>

        {/* Textos */}
        <div className="flex flex-col">
          {/* Título */}
          <h2 className="text-xl md:text-2xl font-bold text-[#d4af37]">
            DevOps in AWS and project management
          </h2>
          {/* Subtítulo */}
          <h3 className="text-md md:text-lg font-bold white-custom">
            <a target="blank" className="hover:border-b-2 hover:border-b-[#d4af37]" href="https://www.credly.com/badges/c41fc5aa-b1e3-4c00-a129-576f87ef920d/public_url">Issued byCoursera</a>
          </h3>
          {/* Descripción */}
          <p className="text-sm md:text-base white-custom">
            These courses cover software development, DevOps project management,
            cloud automation, and AWS. Management practices, project frameworks,
            implementation of continuous integration / development pipelines and
            automation with AWS are highlighted. Both emphasize critical
            thinking through case studies and student experiences to explore
            applicable successful models in work settings.
          </p>
        </div>
      </div>

      {/* Añade más bloques de educación si es necesario */}
    </div>
  );
};

export default Education;
