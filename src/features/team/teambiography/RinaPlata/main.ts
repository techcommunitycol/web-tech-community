import type Member from "../../team.types";
import rina from "../../../../assets/crew/Rina Plata.png";

export const Rina: Member = {
  name: "Rina Plata",
  role: "Organizadora - Desarrolladora Frontend",
  photo: rina,
  linkedin: "https://www.linkedin.com/in/rina-plata/",
  instagram: "https://www.instagram.com/rina_plata/?hl=es",
  bio: "Organizadora activa desde 2024.",
  bioLong:
    "Desarrolladora Frontend especializada en Angular, con experiencia en accesibilidad digital (WCAG 2.1) y creación de interfaces inclusivas. Activa en comunidades como Women Techmakers, Pioneras Dev y Tech Community, además de fundadora de Guardianes Ancestrales.",
  skills: ["Angular", "Accesibilidad", "Inclusión", "Comunidades"],
  projects: [
    { 
      title: "Api Colombia", 
      description: "Un proyecto Open-source que ofrece acceso a datos sobre su diversidad, todo a tu alcance.",
      link: "https://api-colombia.com/" 
    },
    { 
      title: "Guardianes Ancestrales", 
      description: "Fortaleciendo la educación indígena en tech",
      link: "https://www.instagram.com/guardianes_ancestralesdev/" 
    },
  ],
};
