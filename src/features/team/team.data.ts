import brayan from "../../assets/brayan.jpeg";
import caro from "../../assets/caro.jpeg";
import david from "../../assets/david.jpeg";
import mariana from "../../assets/mariana.jpeg";
import jose from "../../assets/jose.jpeg";
import kaky from "../../assets/kaky.jpeg";
import rina from "../../assets/rina.jpeg";
import shirley from "../../assets/shirley.jpeg";
import valen from "../../assets/valen.jpeg";

export type Member = {
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
  instagram?: string;
};

export const TEAM: Member[] = [
  { name: "Brayan",    role: "Backend Engineer",  photo: brayan },
  { name: "Shirley",   role: "Product Designer",  photo: shirley },
  { name: "Rina",      role: "Frontend Engineer", photo: rina },
  { name: "Kaky",      role: "Product Manager",   photo: kaky },
  { name: "David",     role: "DevOps / Cloud",    photo: david },
  { name: "Mariana",   role: "Community Lead",    photo: mariana },
  { name: "José",      role: "Mobile Developer",  photo: jose },
  { name: "Valentina", role: "Software Engineer", photo: valen },
  { name: "Carolina",  role: "Data Engineer",     photo: caro },
];
