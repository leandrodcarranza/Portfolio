export default function Hero() {
  return (
    <section id="perfil" className="hero">
      <div className="terminal">
        <div className="terminal-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="terminal-body">
          <div>
            <span className="terminal-prompt">leandro@portfolio:~$ </span>
            <span className="terminal-query">
              <span className="kw">SELECT</span> nombre, rol, stack <span className="kw">FROM</span> perfil;
            </span>
          </div>
          <table className="result-table">
            <thead>
              <tr>
                <th>nombre</th>
                <th>rol</th>
                <th>stack</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Leandro Carranza</td>
                <td>Estudiante de Analista Universitario en Sistemas Informáticos (AUSI)</td>
                <td>C#/.NET · PostgreSQL · Next.js · Power BI</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h1 className="hero-title">
        Desarrollo sistemas de punta a punta: del modelo de datos a la interfaz.
      </h1>
      <p className="hero-lede">
        Estudiante de sistemas enfocado en desarrollo full-stack, diseño de bases de datos y
        análisis de información. Acá reuní los proyectos que fui construyendo y los dashboards
        que armé para transformar datos en decisiones.
      </p>
    </section>
  );
}
