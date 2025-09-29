import brayan from "../../assets/brayan.jpg";
import caro from "../../assets/Carolina.jpg";
import david from "../../assets/david.jpg";
import mariana from "../../assets/mariana.jpg";
import jose from "../../assets/jose.jpg";
import rina from "../../assets/RinaPlata.png";
import shirley from "../../assets/shirley.jpg";
import valen from "../../assets/Valen.png";
import mauro from "../../assets/mauro.jpg";

export type Member = {
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
  instagram?: string;
  bio?: string;
  bioLong?: string;
  skills?: string[];
  projects?: { title: string; description: string; link?: string }[];
};


export const TEAM: Member[] = [
 {
    name: "Carolina Castañeda",
    role: "Fundadora",
    photo: caro,
    linkedin: "https://www.linkedin.com/in/carocastanedac/",
    instagram: "https://www.instagram.com/caro.data/",
    bio: "Fundadora de Tech Community, embajadora WTM y profesora de datos en Platzi.",
    bioLong:
      "Ingeniera de software con más de 9 años en datos e IA. Fundadora de Tech Community, parte del programa GDG Medellín y embajadora de Google Women Techmakers.",
    skills: ["Python", "BigQuery", "IA", "Docencia"],
    projects: [
      { title: "Tech Community", description: "Plataforma de comunidad tech en Medellín" },
    ],
  },
  {
    name: "Valentina Pinzón",
    role: "Líder",
    photo: valen,
    bio: "Líder de sitio web y redes sociales.",
    bioLong:
      "Desarrolladora entusiasta con enfoque en visibilidad digital y gestión de comunidad. Encargada de mantener el sitio web y coordinar contenido en redes sociales.",
    skills: ["HTML", "CSS", "Gestión de redes"],
  },
  {
    name: "Rina Plata",
    role: "Frontend Engineer",
    photo: rina,
    linkedin: "https://www.linkedin.com/in/rina-plata/",
    instagram: "https://www.instagram.com/rina_plata/",
    bio: "Frontend con foco en accesibilidad e inclusión.",
    bioLong:
      "Especialista en accesibilidad digital (WCAG 2.1) y UX inclusiva. Activa en WTM, Pioneras Dev y fundadora de Guardianes Ancestrales.",
    skills: ["Angular", "Accesibilidad", "UX"],
    projects: [
      { title: "Landing inclusiva", description: "Diseño accesible y optimizado" },
    ],
  },
  {
    name: "José Sosa",
    role: "Mobile Developer",
    photo: jose,
    linkedin: "https://www.linkedin.com/in/joseasosa24/",
    instagram: "https://www.instagram.com/joseasosa24/",
    bio: "Desarrollador front-end apasionado por crear productos con valor.",
    bioLong:
      "Ve la tecnología como un puente para unir personas e impulsar ideas. Le apasiona el networking y crear espacios de colaboración.",
    skills: ["React", "Next.js", "UX"],
  },
  {
    name: "David Orrego",
    role: "DevOps / Cloud",
    photo: david,
    linkedin: "https://www.linkedin.com/in/soydavidorrego/",
    bio: "Docente de marketing y consultor de estrategia tecnológica.",
    skills: ["AWS", "Docker", "CI/CD"],
  },
  {
    name: "Brayan Cardona",
    role: "Backend Engineer",
    photo: brayan,
    linkedin: "https://www.linkedin.com/in/eldevbrayan/",
    bio: "Frontend con visión full-stack y foco en comunidad.",
    bioLong:
      "Además del enfoque en front-end, tiene conocimientos en backend (Node.js, Java) y bases de datos relacionales, proponiendo soluciones integrales.",
    skills: ["React", "Node.js", "MySQL", "Comunidades"],
  },
  {
    name: "Shirley Arango",
    role: "Product Designer",
    photo: shirley,
    linkedin: "https://www.linkedin.com/in/shirley-arango-cardona-51202a375/",
    instagram: "https://www.instagram.com/shirley_dev0",
    bio: "Aprendiz ADSO (SENA) con interés en desarrollo web.",
    bioLong:
      "Apoya el pilar de Comunidad de Comunidades en Tech Community, visibilizando eventos en Medellín y promoviendo el aprendizaje colaborativo.",
    skills: ["Figma", "UI Design", "HTML/CSS"],
  },
  {
    name: "Mariana Castañeda",
    role: "Community Lead",
    photo: mariana,
    bio: "Apoya iniciativas de redes sociales y comunidad.",
  },
];
