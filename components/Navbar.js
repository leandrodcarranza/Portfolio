const nav = [
  { href: "#perfil", label: "Perfil" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#dashboards", label: "Dashboards" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#perfil" className="navbar-brand">
        Leandro Carranza
      </a>
      <nav className="navbar-links">
        {nav.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
