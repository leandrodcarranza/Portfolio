export default function Contact() {
  return (
    <section id="contacto">
      <p className="section-eyebrow">public.contacto</p>
      <h2 className="section-title">Contacto</h2>
      <div className="contact-grid">
        <div className="contact-field">
          <span className="contact-key">email</span>
          <a className="contact-chip" href="mailto:leandrodcarranza1@gmail.com">
            leandrodcarranza1@gmail.com
          </a>
        </div>

        <div className="contact-field">
          <span className="contact-key">celular</span>
          <div className="contact-row">
            <a
              className="contact-chip contact-chip--whatsapp"
              href="https://wa.me/5493515595513"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp · +54 9 351 559 5513
            </a>
            <a className="contact-chip" href="tel:+5493515595513">
              Llamar
            </a>
          </div>
        </div>

        <div className="contact-field">
          <span className="contact-key">redes</span>
          <div className="contact-row">
            <a
              className="contact-chip"
              href="https://github.com/leandrodcarranza"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className="contact-chip" href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
