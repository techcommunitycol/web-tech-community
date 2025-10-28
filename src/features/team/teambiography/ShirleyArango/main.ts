import type Member from "../../team.types";
import shirley from "../../../../assets/shirley.jpg";

export const Shirley: Member = {
  name: "Shirley Arango",
  role: "Comunidad de comunidades",
  photo: shirley,
  linkedin: "https://www.linkedin.com/in/shirley-arango-cardona-51202a375",
  instagram: "https://www.instagram.com/shirley_dev0?igsh=cXpiczE1ejMwMmV3",
  bio: "Aprendiz de Análisis y Desarrollo de Software en el SENA.",
  bioLong:
    "Soy aprendiz de ADSO en el SENA, con interés en desarrollo web y en proyectos que aporten valor a las personas. Actualmente hago parte de Tech Community en el pilar de Comunidad de Comunidades, donde apoyo la visibilización de eventos tecnológicos en Medellín.",
  skills: ["Desarrollo web", "Comunicación", "Eventos"],
  projects: [
    { title: "Tech Community", description: "Visibilización de eventos tecnológicos" },
  ],
};
