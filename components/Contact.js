import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

const contactItems = [
  {
    label: "leandrodcarranza1@gmail.com",
    href: "mailto:leandrodcarranza1@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "+54 9 351 559 5513",
    href: "tel:+5493515595513",
    icon: FaPhone,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tu-usuario",
    icon: FaLinkedin,
  },
];

export default function Contact() {
  return (
    <section id="contacto">
      <h2 className="section-title">Contacto</h2>
      <div className="contact-row">
        {contactItems.map(({ label, href, icon: Icon }) => (
          <a
            className="contact-chip"
            href={href}
            key={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
          >
            <Icon className="contact-chip-icon" />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
