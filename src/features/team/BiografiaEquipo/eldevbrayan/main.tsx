import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { TEAM, type Member } from "../../team.data";
import { slugify } from "../../../../utils/slugify";

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
    <div className="relative">
      {/* blobs de fondo */}
      <div className="blob -top-10 -left-10 h-40 w-40 bg-[#00C853]/50" />
      <div className="blob top-32 -right-10 h-52 w-52 bg-[#182B49]/60 animation-delay-2000" />
      <div className="blob bottom-10 left-1/3 h-36 w-36 bg-[#00C853]/40 animation-delay-1000" />

      <section className="mx-auto max-w-5xl px-4 pb-24 pt-12 relative">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-8">
          <span>←</span> Volver al equipo
        </Link>

        <div className="grid items-start gap-8 md:grid-cols-[230px,1fr]">
          {/* Avatar con marco animado */}
          <div className="card-animated-border p-[2px]">
            <div className="rounded-2xl bg-[#0b1020] p-2">
              <img
                src={member.photo}
                alt={member.name}
                className="h-[210px] w-[210px] rounded-xl object-cover"
              />
            </div>
          </div>

          <header className="space-y-3">
            <h1 className="text-3xl font-bold text-white leading-tight">
              {member.name}
            </h1>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm text-white/90 ring-1 ring-white/15">
              {member.role}
            </p>

            {/* Enlaces sociales si los tienes en team.data */}
            <div className="flex flex-wrap gap-3 pt-2">
              {member.linkedin && (
                <a className="rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20"
                   href={member.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              )}
              {member.instagram && (
                <a className="rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20"
                   href={member.instagram} target="_blank" rel="noreferrer">Instagram</a>
              )}
            </div>
          </header>
        </div>

        {/* Bio: si no tienes, generamos una base */}
        <article className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold text-white/90">Biografía</h2>
            <p className="text-white/80 leading-relaxed">
              {member.name} es {member.role.toLowerCase()} en nuestro equipo. 
              Apasionad@ por crear experiencias con impacto, colabora en proyectos 
              que unen tecnología y humanidad. (Puedes añadir aquí una bio real tomada de tu CMS o archivo).
            </p>

            <h3 className="pt-4 text-white/90 font-semibold">Proyectos destacados</h3>
            <ul className="list-disc pl-5 text-white/80 space-y-2">
              <li>Proyecto A — descripción breve.</li>
              <li>Proyecto B — descripción breve.</li>
              <li>Proyecto C — descripción breve.</li>
            </ul>
          </div>

          {/* Tarjeta lateral “stack / skills” */}
          <aside className="space-y-4">
            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <h3 className="mb-2 font-semibold text-white/90">Stack / Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["React","TypeScript","Tailwind","Node","UI/UX"].map(tag => (
                  <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <h3 className="mb-2 font-semibold text-white/90">Contacto</h3>
              <p className="text-white/80 text-sm">¿Deseas colaborar? Escríbenos y coordinamos una reunión.</p>
            </div>
          </aside>
        </article>
      </section>
    </div>
  );
}
