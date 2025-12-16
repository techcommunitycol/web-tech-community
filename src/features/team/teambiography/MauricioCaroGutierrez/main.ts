import type Member from "../../team.types";
import mauricio from "../../../../assets/crew/mauro.jpg";

export const Mauricio: Member = {
  name: "Mauricio Caro Gutiérrez",
  role: "Co-Fundador - Desarrollador Mobile",
  photo: mauricio,
  linkedin: "https://www.linkedin.com/in/mauricio-caro-gutierrez/",
  instagram: "https://www.instagram.com/maurodecodificado/",
  bio: "Co-fundador de Tech Community. Activo desde 2025.",
  bioLong: "Desarrollador de software con once años de experiencia en las principales empresas de la industria, con amplios conocimientos en diseño de software para aplicaciones móviles, metodologías ágiles, código limpio y más de 14 años involucrado en la programación. Actualmente, está creando soluciones móviles multiplataformas para Android/iOS.",
  skills: ["Android", "Kotlin", "Kotlin Multiplatform", "IOS","Jetpack Compose", "Java", "Angular", "3D" , "Fusion 360" , "Mobile" ],
  projects: [
    { 
      title: "GrandMaster's Cut", 
      description: "Barbería en Medellín: Cortes, barbas, tintura, coworking & vibra",
      link: "https://www.instagram.com/grandmasters_barberia/" 
    },
  ],
};
