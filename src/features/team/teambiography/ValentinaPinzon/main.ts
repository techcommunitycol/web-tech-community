import type Member from "../../team.types";
import valentina from "../../../../assets/crew/Valen.png";

export const Valentina: Member = {
  name: "Valentina Pinzón",
  role: "Lider Organizadora",
  photo: valentina,
  linkedin: "https://www.linkedin.com/in/valentina-p-86b3b913a/",
  instagram: "https://www.instagram.com/v.dev.valen/?hl=es",

  bio: "Desarrolladora de software, creadora de contenido y líder activa en comunidades como GDG Medellín, Pioneras Dev y TechCommunity.",

  bioLong:
    "Soy Valentina Pinzón, desarrolladora de software y líder apasionada por las comunidades tecnológicas, la educación y la creación de contenido. Disfruto construir experiencias digitales y compartir conocimiento para impulsar a más personas a entrar al mundo de la tecnología. " +
    "Actualmente hago parte del equipo organizador de TechCommunity, GDG Medellín y Pioneras Dev, donde he liderado iniciativas, eventos, talleres y estrategias digitales que conectan a miles de personas con oportunidades de aprendizaje, crecimiento y empleo en el ecosistema tech. " +
    "Combino mi experiencia en desarrollo fullstack, diseño de interfaces y creación de contenido con mi vocación por enseñar, comunicar y generar impacto en la comunidad. " +
    "Creo profundamente en el poder de la tecnología para transformar vidas y en la importancia de espacios accesibles, diversos e inclusivos. Mi misión es seguir construyendo comunidades fuertes, acompañar a nuevas generaciones de talento y aportar al crecimiento tecnológico de la región.",

  skills: [
    "Desarrollo web",
    "React & TypeScript",
    "Node.js",
    "Python",
    "JavaScript",
    "Git & GitHub",
    "C#",
    "Cloud",
    "Google Cloud",
    "Diseño y UX",
    "Gestión de comunidades",
    "Liderazgo",
    "Creación de contenido",
    "Mentorías"
    
  ],

  projects: [
    { 
      title: "Tech Community",
      description: "Gestión de redes sociales, estrategia digital y desarrollo de la página web oficial."
    },
    {
      title: "GDG Medellín",
      description: "Organización de eventos, conferencias, workshops y actividades formativas."
    },
    {
      title: "Pioneras Dev",
      description: "Acompañamiento y mentoría para mujeres en tecnología"
    }
  ],
};
