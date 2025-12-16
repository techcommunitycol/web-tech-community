import Section from "../../shared/components/Section";
import whatsappIcon from "../../assets/icons/whatsapp.png";
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
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-700 bg-[rgba(255,255,255,0.02)] p-6">
          <h3 className="text-lg font-semibold text-gray-200">Escríbenos</h3>

          <p className="mt-1 text-sm text-gray-300">
            Escríbenos por correo y te respondemos lo antes posible o si
            prefieres puedes escribir directamente a nuestros fundadores por
            WhatsApp.
          </p>

          <div className="mt-4 rounded-xl border border-gray-700 bg-black/20 px-4 py-3">
            <p className="text-sm text-gray-200 truncate">{CONTACT.email}</p>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-gray-200 hover:opacity-95"
            >
              Enviar correo
            </a>

            <button
              type="button"
              onClick={() => copyToClipboard(CONTACT.email)}
              className="inline-flex items-center rounded-md border border-gray-700 px-3 py-1.5 text-xs font-semibold text-gray-200 hover:bg-[rgba(255,255,255,0.06)]"
            >
              Copiar Email
            </button>

            <a
              href="https://wa.me/573507902319"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-700 px-3 py-2 text-xs font-semibold text-gray-200 hover:bg-[rgba(255,255,255,0.04)]"
              title="WhatsApp Carolina Castañeda"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4" />
              Carolina Castañeda
            </a>

            <a
              href="https://wa.me/573006387238"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-700 px-3 py-2 text-xs font-semibold text-gray-200 hover:bg-[rgba(255,255,255,0.04)]"
              title="WhatsApp Mauricio Caro"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="h-4 w-4" />
              Mauricio Caro
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-700 bg-[rgba(255,255,255,0.02)] p-6">
          <h3 className="text-lg font-semibold text-gray-200">
            Únete a nuestros canales de comunicación
          </h3>

          <p className="mt-3 text-sm text-gray-300 leading-relaxed">
            En nuestro grupo de Whatsapp podrás recibir novedades, eventos y
            convocatorias más rápido y de forma VIP. Cero spam, solo comunidad.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={CONTACT.whatsappGroup}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-gray-200 hover:opacity-95"
            >
              Unirme al grupo de WP
            </a>

            <button
              type="button"
              onClick={() => copyToClipboard(CONTACT.whatsappGroup)}
              className="inline-flex items-center rounded-md border border-gray-700 px-3 py-1.5 text-xs font-semibold text-gray-200 hover:bg-[rgba(255,255,255,0.06)]"
            >
              Copiar link formulario
            </button>

            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-700 px-3 py-2 text-xs font-semibold text-gray-200 hover:bg-[rgba(255,255,255,0.04)]"
            >
              <img src={instagramIcon} alt="Instagram" className="h-4 w-4" />
              Instagram
            </a>

            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-700 px-3 py-2 text-xs font-semibold text-gray-200 hover:bg-[rgba(255,255,255,0.04)]"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-gray-700 bg-[rgba(255,255,255,0.02)] p-4 text-center text-sm text-gray-300">
        ¿Tienes una idea, propuesta o quieres hacer un evento con nosotros?
        <span className="text-gray-200 font-semibold"> Escríbenos</span> y lo
        hacemos realidad.
      </div>
    </Section>
  );
}
