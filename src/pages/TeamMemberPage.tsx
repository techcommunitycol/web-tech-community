import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Page from "../app/layout/Page";
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
      <Page>
        <div className="mx-auto flex min-h-[70vh] max-w-5xl items-center justify-center px-4 py-20">
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.82),rgba(17,17,17,0.92))] p-8 text-center shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
            <h1 className="text-2xl font-semibold text-white">Miembro no encontrado</h1>
            <Link
              to="/"
              className="mt-6 inline-flex rounded-xl border border-primary/25 bg-primary/10 px-4 py-2 font-semibold text-white hover:bg-primary/20"
            >
              Volver
            </Link>
          </div>
        </div>
      </Page>
    );
  }

  return (
    <Page>
      <div className="relative overflow-x-hidden text-white">
        <div className="pointer-events-none absolute -z-10 h-52 w-52 -top-12 -left-12 rounded-full blur-3xl bg-[#36979c]/25" />
        <div className="pointer-events-none absolute -z-10 h-64 w-64 top-40 -right-16 rounded-full blur-3xl bg-[#0A49A5]/18" />
        <div className="pointer-events-none absolute -z-10 h-40 w-40 bottom-20 left-1/3 rounded-full blur-3xl bg-white/5" />

        <section className="relative mx-auto max-w-6xl px-4 pb-24 pt-24 md:px-6 md:pt-16">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 hover:text-white"
          >
            <span>←</span> Volver al equipo
          </Link>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.84),rgba(17,17,17,0.92))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.3)] md:p-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

            <div className="grid items-start gap-8 md:grid-cols-[240px_minmax(0,1fr)]">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-3 shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                <div className="overflow-hidden rounded-2xl bg-black/20">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="block aspect-[4/5] w-full object-cover"
                  />
                </div>
              </div>

              <header className="min-w-0">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Perfil del equipo
                </div>

                <h1 className="mt-4 text-3xl font-bold leading-tight break-words md:text-4xl">
                  {member.name}
                </h1>

                <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#36979c]/15 px-3 py-1 text-sm ring-1 ring-[#36979c]/25">
                  {member.role}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {member.linkedin && (
                    <a
                      className="inline-flex items-center rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-gray-200 hover:border-primary/30 hover:bg-white/[0.05]"
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  )}

                  {member.instagram && (
                    <a
                      className="inline-flex items-center rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-gray-200 hover:border-primary/30 hover:bg-white/[0.05]"
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

            <article className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="min-w-0 space-y-6 md:col-span-2">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_14px_40px_rgba(0,0,0,0.16)]">
                  <h2 className="text-lg font-semibold text-white/90">Biografía</h2>

                  <p className="mt-4 leading-relaxed text-white/80">
                    {member.bio ??
                      `${member.name} es ${member.role.toLowerCase()} en nuestro equipo.`}
                  </p>

                  {member.bioLong && (
                    <p className="mt-4 leading-relaxed text-white/80">{member.bioLong}</p>
                  )}
                </div>

                {!!member.projects?.length && (
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_14px_40px_rgba(0,0,0,0.16)]">
                    <h3 className="text-lg font-semibold text-white/90">
                      Proyectos Personales & Emprendimientos
                    </h3>

                    <div className="mt-5 space-y-4">
                      {member.projects.map((p, i) => (
                        <div
                          key={i}
                          className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 sm:flex-row sm:items-center"
                        >
                          <div className="min-w-0">
                            <h4 className="truncate text-base font-semibold text-white/90">
                              {p.title}
                            </h4>
                            <p className="mt-1 text-sm leading-relaxed text-white/70">
                              {p.description}
                            </p>
                          </div>

                          {p.link && (
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex flex-shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-white hover:bg-primary/20"
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

              <aside className="min-w-0 space-y-4">
                {member.skills?.length ? (
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.16)]">
                    <h3 className="mb-3 font-semibold text-white/90">
                      Stack / Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-[#36979c]/12 px-3 py-1 text-xs text-white/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </aside>
            </article>
          </div>
        </section>
      </div>
    </Page>
  );
}
