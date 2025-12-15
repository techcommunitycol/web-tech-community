import type Member from "../../team.types";
import jose from "../../../../assets/crew/Jose.jpg";

export const JoseSosa: Member = {
  name: "Jose Sosa",
  role: "Organizador - Desarrollador Frontend",
  photo: jose,
  linkedin: "https://www.linkedin.com/in/joseasosa24/",
  instagram: "https://www.instagram.com/joseasosa24",
  bio: "Organizador activo desde 2025",
  bioLong:
    "Desarrollador front-end apasionado por el networking. la tecnología es más que código: es la posibilidad de unir personas, impulsar ideas y transformar realidades. Disfruto generar conexiones y hacer networking en comunidades tech.",
  skills: ["Frontend", "Networking", "Comunicación"],
  projects: [
    { 
      title: "Devs Eternal", 
      description: "Comunidad de tecnología" ,
      link: "https://www.instagram.com/devstoeternal/"
    },
  ],
};
