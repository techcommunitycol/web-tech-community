import type Member from "../../team.types";
import eldevbrayan from "../../../../assets/crew/brayan.jpg";

export const Brayan: Member = {
  name: "Brayan Cardona",
  role: "Organizador - Full stack",
  photo: eldevbrayan,
  linkedin: "https://www.linkedin.com/in/eldevbrayan/",
  instagram: "https://www.instagram.com/eldevbrayan/",
  bio: "Organizador activo desde 2025",
  bioLong:"Frontend con visión full-stack y foco en comunidad. Conocimientos en backend (Node.js, php) y bases de datos relacionales, proponiendo soluciones integrales.",
  skills: ["React", "Angular", "Node.js", "Python", "MySQL", "Comunidades"],
  projects: [
    { 
      title: "Trackenergy", 
      description: "Plataforma de monitoreo energético", 
      link:  "https://trackenergy.co/"

    },
  ],
};
