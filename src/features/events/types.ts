export type MediaItem =
  | { kind: "image"; src: string; alt?: string; thumb?: string }
  | { kind: "video"; provider: "youtube" | "vimeo" | "url"; id?: string; src?: string; title?: string };

export type EventMeta = {
  id: string;
  title: string;
  dateISO: string;            // "2025-09-12"
  venue?: string;
  city?: string;
  tags?: string[];
  descShort: string;
  descLong?: string;
  media: MediaItem[];
  speakers?: { name: string; role?: string; avatar?: string; link?: string }[];
  resources?: { slides?: string; repo?: string; recap?: string };
  stats?: { attendees?: number; satisfaction?: number }; // opcional
};
