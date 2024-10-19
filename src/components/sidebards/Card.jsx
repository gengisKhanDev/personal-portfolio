import React from "react";
//  <div className="relative bg-[#f8f4e3] p-8 rounded-lg shadow-lg text-white overflow-hidden">

const Card = ({ title, icons }) => {
  return (
    <div 
      className="block bg-[#13151a] rounded-lg bg-cover shadow-lg"
      style={{
        backgroundImage: "url('/marcos-delgados.png')",
        backgroundSize: 'cover',  // Asegúrate de que la imagen cubra todo el fondo
        backgroundPosition: 'center',  // Centra la imagen en el contenedor
        height: '400px',  // Ajusta el tamaño de la tarjeta a lo que prefieras
        width: '192px',  // Ajusta el tamaño de la tarjeta a lo que prefieras
      }}
    >
      <h5 className="mt-20 text-center text-xl font-medium leading-tight text-black">
        {title}
      </h5>
      <div className="px-11 pt-2 grid grid-cols-3 gap-2">
        {icons.map((icon, index) => (
          <img
            src={icon.src}
            alt={icon.alt}
            className="h-8 filter hover:invert-[38%] hover:sepia-[95%] hover:saturate-[329%] hover:hue-rotate-[14deg] hover:brightness-[99%] hover:contrast-[108%]"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
