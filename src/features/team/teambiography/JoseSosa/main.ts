import type Member from "../../team.types";
import jose from "../../../../assets/crew/Jose.jpg";

export const JoseSosa: Member = {
  name: "Jose Sosa",
  role: "Manager de canales de difusión",
  photo: jose,
  linkedin: "https://www.linkedin.com/in/joseasosa24/",
  instagram: "https://www.instagram.com/joseasosa24",
  bio: "Desarrollador front-end apasionado por el networking.",
  bioLong:
    "Soy José Sosa, Desarrollador de software con enfoque en front-end. Para mí, la tecnología es más que código: es la posibilidad de unir personas, impulsar ideas y transformar realidades. Disfruto generar conexiones y hacer networking en comunidades tech.",
  skills: ["Frontend", "Networking", "Comunicación"],
  projects: [
    { title: "Canales de difusión", description: "Gestión de comunicación digital" },
  ],
};
