import type Member from "../../team.types";
import rina from "../../../../assets/crew/RinaPlata.png";

export const Rina: Member = {
  name: "Rina Plata",
  role: "Integrante activa",
  photo: rina,
  linkedin: "https://www.linkedin.com/in/rina-plata/",
  instagram: "https://www.instagram.com/rina_plata/?hl=es",
  bio: "Frontend developer experta en accesibilidad digital.",
  bioLong:
    "Desarrolladora Frontend especializada en Angular, con experiencia en accesibilidad digital (WCAG 2.1) y creación de interfaces inclusivas. Activa en comunidades como Women Techmakers, Pioneras Dev y Tech Community, además de fundadora de Guardianes Ancestrales.",
  skills: ["Angular", "Accesibilidad", "Inclusión", "Comunidades"],
  projects: [
    { title: "Guardianes Ancestrales", description: "Comunidad enfocada en inclusión digital" },
  ],
};
