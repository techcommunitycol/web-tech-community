import Section from "../../shared/components/Section";
import instagramIcon from "../../assets/icons/instagram.png";
import linkedinIcon from "../../assets/icons/linkedin.png";

const CONTACT = {
  email: "administracion@techcommunitycol.com",
  instagram: "https://www.instagram.com/techcommunity.col/",
  linkedin: "https://www.linkedin.com/company/techcommunitycol/",
  whatsappGroup:
    "https://docs.google.com/forms/d/e/1FAIpQLSej9YnbVigK3eZzdj3qGjNKyhwkzFEpjWOchne6q4ygZ4hlkg/viewform",
};

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
  }
}

export default function Connect() {
  return (
    <Section
      id="connect"
      title="Conecta con nosotros"
      subtitle="Escríbenos, síguenos y sé parte de nuestra comunidad."
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.82),rgba(17,17,17,0.92))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.26)] md:p-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-10 [mask-image:radial-gradient(circle_at_top,black,transparent_72%)]" />
        <div className="pointer-events-none absolute -top-10 right-0 h-40 w-40 rounded-full bg-[rgba(54,151,156,0.14)] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-36 w-36 rounded-full bg-[rgba(10,73,165,0.12)] blur-3xl" />

        <div className="relative z-10 mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Comunidad activa
        </div>

        <div className="relative z-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_14px_40px_rgba(0,0,0,0.14)] backdrop-blur-sm">
          <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Contacto directo
          </div>
          <h3 className="text-lg font-semibold text-gray-200">Escríbenos</h3>

          <p className="mt-1 text-sm text-gray-300">
            Escríbenos por correo y te respondemos lo antes posible para
            orientarte, resolver dudas o ayudarte a conectar con la comunidad.
          </p>

          <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Correo</p>
            <p className="mt-2 text-sm text-gray-200 break-all">{CONTACT.email}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center rounded-xl border border-primary/30 bg-primary px-3 py-2 text-xs font-semibold text-gray-200 shadow-[0_12px_28px_rgba(54,151,156,0.14)] hover:opacity-95"
            >
              Enviar correo
            </a>

            <button
              type="button"
              onClick={() => copyToClipboard(CONTACT.email)}
              className="inline-flex items-center rounded-xl border border-white/10 px-3 py-2 text-xs font-semibold text-gray-200 hover:bg-[rgba(255,255,255,0.06)]"
            >
              Copiar Email
            </button>
          </div>

        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_14px_40px_rgba(0,0,0,0.14)] backdrop-blur-sm">
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300">
            Canales
          </div>
          <h3 className="text-lg font-semibold text-gray-200">
            Únete a nuestros canales de comunicación
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-gray-300">
            En nuestro grupo de Whatsapp podrás recibir novedades, eventos y
            convocatorias más rápido y de forma VIP. Cero spam, solo comunidad.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={CONTACT.whatsappGroup}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-xl border border-primary/30 bg-primary px-3 py-2 text-xs font-semibold text-gray-200 shadow-[0_12px_28px_rgba(54,151,156,0.14)] hover:opacity-95"
            >
              Unirme al grupo de WP
            </a>

            <button
              type="button"
              onClick={() => copyToClipboard(CONTACT.whatsappGroup)}
              className="inline-flex items-center rounded-xl border border-white/10 px-3 py-2 text-xs font-semibold text-gray-200 hover:bg-[rgba(255,255,255,0.06)]"
            >
              Copiar link formulario
            </button>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3 text-xs font-semibold text-gray-200 hover:bg-[rgba(255,255,255,0.04)]"
            >
              <img src={instagramIcon} alt="Instagram" className="h-4 w-4" />
              Instagram
            </a>

            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-3 text-xs font-semibold text-gray-200 hover:bg-[rgba(255,255,255,0.04)]"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center text-sm text-gray-300 shadow-[0_14px_40px_rgba(0,0,0,0.14)]">
        ¿Tienes una idea, propuesta o quieres hacer un evento con nosotros?
        <span className="font-semibold text-gray-200"> Escríbenos</span> y lo
        hacemos realidad.
      </div>
      </div>
    </Section>
  );
}
