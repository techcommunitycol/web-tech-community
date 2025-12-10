import type Member from "../../team.types";
import eldevbrayan from "../../../../assets/crew/brayan.jpg";

export const Brayan: Member = {
  name: "Ali",
  role: "Diseñadora",
  photo: eldevbrayan,
  linkedin: "https://www.linkedin.com/in/eldevbrayan/",
  instagram: "https://www.instagram.com/eldevbrayan/",
  bio: "Frontend con visión full-stack y foco en comunidad.",
  bioLong:
    "Además del enfoque en front-end, tiene conocimientos en backend (Node.js, php) y bases de datos relacionales, proponiendo soluciones integrales.",
  skills: ["React", "Angular", "Node.js", "Python", "MySQL", "Comunidades"],
  projects: [
    { title: "Tech Community", description: "Plataforma de comunidad tech en Medellín" },
    { title: "Trackenergy", description: "Plataforma de monitoreo energético" },
  ],
};
