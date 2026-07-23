export default function Hero() {
  return (
    <section id="perfil" className="hero">
      <div className="hero-top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hero-avatar" src="/Foto-perfil.jpg" alt="Foto de Leandro Carranza" />
        <div>
          <p className="hero-eyebrow">
            Estudiante de Analista Universitario en Sistemas Informáticos (UNC)
          </p>
          <h1 className="hero-title">Leandro Carranza</h1>
        </div>
      </div>
<div className="hero-lede">
        <p>
          Soy estudiante avanzado de Analista Universitario en Sistemas Informáticos en la
          Universidad Nacional de Córdoba, con experiencia en análisis de datos, desarrollo de
          software y optimización de procesos.
        </p>
        <p>
          A lo largo de mi formación académica y de distintos proyectos personales y
          universitarios, adquirí experiencia en Power BI, SQL, C# y .NET, participando en el
          desarrollo de aplicaciones backend y frontend, diseño de bases de datos, construcción
          de APIs y creación de dashboards interactivos para el análisis de información.
        </p>
        <p>
          Mi objetivo es desarrollarme profesionalmente en áreas de Data Analytics, Business
          Intelligence o Desarrollo de Software, integrándome a un equipo donde pueda seguir
          aprendiendo, aportar soluciones basadas en datos y continuar creciendo tanto técnica
          como profesionalmente.
        </p>
      </div>

    </section>
  );
}
