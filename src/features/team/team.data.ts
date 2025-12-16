import type Member from "./team.types";
export type { default as Member } from "./team.types";
import { Brayan } from "./teambiography/BrayanCardona/main";
import { Carolina } from "./teambiography/CarolinaCastañeda/main";
import { Mauricio } from "./teambiography/MauricioCaroGutierrez/main";
import { JoseSosa } from "./teambiography/JoseSosa/main";
import { Rina } from "./teambiography/RinaPlata/main";
import { Mariana } from "./teambiography/MarianaCastañeda/main";
import { Valentina } from "./teambiography/ValentinaPinzon/main";
import { Shirley } from "./teambiography/ShirleyArango/main";
import { Ali } from "./teambiography/AlissonPachecho/main";


export const TEAM: Member[] = [
  Carolina,
  Mauricio,
  Valentina,
  Brayan,
  Shirley,
  JoseSosa,
  Rina,
  Mariana,
  Ali
];