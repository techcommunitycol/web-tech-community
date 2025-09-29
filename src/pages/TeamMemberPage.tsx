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
      <div className="mx-auto max-w-5xl px-4 py-16 text-center">
        <h1 className="text-2xl font-semibold text-white">Miembro no encontrado</h1>
        <Link to="/" className="mt-6 inline-block rounded-lg bg-white/10 px-4 py-2 text-white hover:bg-white/20">
          Volver
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0b1020] text-white">
      {/* blobs */}
      <div className="blob -top-10 -left-10 h-40 w-40 bg-[#00C853]/50" />
      <div className="blob top-32 -right-10 h-52 w-52 bg-[#182B49]/60" />
      <div className="blob bottom-10 left-1/3 h-36 w-36 bg-[#00C853]/40" />

      <section className="relative mx-auto max-w-5xl px-4 pb-24 pt-12">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
          <span>←</span> Volver al equipo
        </Link>

        <div className="grid items-start gap-8 md:grid-cols-[230px,1fr]">
          <div className="card-animated-border p-[2px]">
            <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
              <img
                src={member.photo}
                alt={member.name}
                className="h-[210px] w-[210px] rounded-xl object-cover"
              />
            </div>
          </div>

          <header className="space-y-3">
            <h1 className="text-3xl font-bold leading-tight">{member.name}</h1>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm ring-1 ring-white/15">
              {member.role}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {member.linkedin && (
                <a className="rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20"
                   href={member.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              )}
              {member.instagram && (
                <a className="rounded-lg bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20"
                   href={member.instagram} target="_blank" rel="noreferrer">Instagram</a>
              )}
            </div>
          </header>
        </div>

        <article className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-5">
            <h2 className="text-lg font-semibold text-white/90">Biografía</h2>
            <p className="leading-relaxed text-white/80">
              {member.bio ?? `${member.name} es ${member.role.toLowerCase()} en nuestro equipo.`}
            </p>

       {member.projects?.length && (
  <ul className="list-disc pl-5 text-white/80 space-y-2">
    {member.projects.map((p, i) => (
      <li key={i}>
        <span className="font-medium">{p.title}</span> — {p.description}
      </li>
    ))}
  </ul>
)}

          </div>

          <aside className="space-y-4">
            {member.skills?.length ? (
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <h3 className="mb-2 font-semibold text-white/90">Stack / Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <h3 className="mb-2 font-semibold text-white/90">Contacto</h3>
              <p className="text-sm text-white/80">¿Deseas colaborar? Escríbenos y coordinamos una reunión.</p>
            </div>
          </aside>
        </article>
      </section>
    </div>
  );
}
