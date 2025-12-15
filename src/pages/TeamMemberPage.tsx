import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { TEAM, type Member } from "../features/team/team.data";
import { slugify } from "../utils/slugify";

function getMemberBySlug(slug?: string): Member | undefined {
  if (!slug) return undefined;
  return TEAM.find(m => slugify(m.name) === slug);
}

export default function TeamMemberPage() {
  const { slug } = useParams();
  const member = useMemo(() => getMemberBySlug(slug), [slug]);

  if (!member) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16 text-center bg-[#111111] min-h-screen text-white">
        <h1 className="text-2xl font-semibold">Miembro no encontrado</h1>
        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-[#36979c]/30 px-4 py-2 text-white hover:bg-[#36979c]/40"
        >
          Volver
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#111111] text-white overflow-x-hidden">
      {/* BLOBS adaptados a la marca */}
      <div className="pointer-events-none absolute -z-10 h-52 w-52 -top-12 -left-12 rounded-full blur-3xl bg-[#36979c]/30" />
      <div className="pointer-events-none absolute -z-10 h-64 w-64 top-32 -right-16 rounded-full blur-3xl bg-[#36979c]/20" />
      <div className="pointer-events-none absolute -z-10 h-40 w-40 bottom-14 left-1/3 rounded-full blur-3xl bg-[#36979c]/25" />

      <section className="relative mx-auto max-w-5xl px-4 pb-24 pt-12 overflow-hidden">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
        >
          <span>←</span> Volver al equipo
        </Link>

        <div className="grid items-start gap-8 md:[grid-template-columns:minmax(200px,230px)_1fr]">
          {/* FOTO */}
          <div className="p-[2px] rounded-2xl overflow-hidden bg-[#36979c]/20">
            <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
              <img
                src={member.photo}
                alt={member.name}
                className="block h-[210px] w-[210px] max-w-full rounded-xl object-cover"
              />
            </div>
          </div>

          {/* INFO PRINCIPAL */}
          <header className="space-y-3 min-w-0">
            <h1 className="text-3xl font-bold leading-tight break-words">
              {member.name}
            </h1>

            <p className="inline-flex items-center gap-2 rounded-full bg-[#36979c]/20 px-3 py-1 text-sm ring-1 ring-[#36979c]/25">
              {member.role}
            </p>  
          <div className="flex flex-wrap gap-3 pt-2">
          {member.linkedin && (
            <a
              className="inline-flex items-center rounded-xl border border-gray-600 hover:border-primary/30 px-5 py-3 text-sm font-semibold text-gray-200"
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          )}

          {member.instagram && (
            <a
              className="inline-flex items-center rounded-xl border border-gray-600 hover:border-primary/30 px-5 py-3 text-sm font-semibold text-gray-200"
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          )}
        </div>

          </header>
        </div>

        {/* CONTENIDO */}
        <article className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-5 min-w-0">
            <h2 className="text-lg font-semibold text-white/90">Biografía</h2>

            <p className="leading-relaxed text-white/80">
              {member.bio ??
                `${member.name} es ${member.role.toLowerCase()} en nuestro equipo.`}
            </p>

            {member.bioLong && (
              <p className="leading-relaxed text-white/80">{member.bioLong}</p>
            )}

            {!!member.projects?.length && (
              <div className="space-y-4 pt-3"> {/* Agregamos un poco de espacio */}
                <h3 className="text-lg font-semibold text-white/90">Proyectos Personales & Emprendimientos</h3>
                
                <div className="space-y-4"> {/* Contenedor para la lista de proyectos */}
                  {member.projects.map((p, i) => (
                    <div 
                      key={i} 
                      className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      {/* Título y Descripción */}
                      <div className="min-w-0">
                        <h4 className="text-base font-semibold text-white/90 truncate">
                          {p.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-white/70 mt-1">
                          {p.description}
                        </p>
                      </div>

                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 inline-flex items-center justify-center rounded-lg bg-[#36979c]/30 px-4 py-2 text-sm font-medium text-white hover:bg-[#36979c]/40 transition duration-150"
                        >
                          Ver Proyecto
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-4 min-w-0">
            {member.skills?.length ? (
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <h3 className="mb-2 font-semibold text-white/90">
                  Stack / Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#36979c]/20 px-3 py-1 text-xs text-white/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </article>
      </section>
    </div>
  );
}
