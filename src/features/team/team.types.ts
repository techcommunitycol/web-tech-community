export default interface Member {
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
  instagram?: string;
  bio?: string;
  bioLong?: string;
  skills?: string[];
  projects?: { title: string; description: string; link?: string }[];
}
