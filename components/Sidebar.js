const nav = [
  { href: "#perfil", label: "public.perfil" },
  { href: "#proyectos", label: "public.proyectos" },
  { href: "#dashboards", label: "public.dashboards" },
  { href: "#contacto", label: "public.contacto" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <strong>leandro</strong>@portfolio
      </div>

      <p className="sidebar-label">Esquema</p>
      <ul className="schema-tree">
        {nav.map((item) => (
          <li key={item.href}>
            <a href={item.href}>
              <span className="dot" />
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="sidebar-links">
        <a href="https://github.com/leandrodcarranza" target="_blank" rel="noreferrer">
          github.com/leandrodcarranza
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          linkedin.com/in/tu-usuario
        </a>
      </div>
    </aside>
  );
}
