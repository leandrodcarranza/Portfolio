import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import ProjectRecord from "../components/ProjectRecord";
import DashboardTile from "../components/DashboardTile";
import Contact from "../components/Contact";
import { projects } from "../data/projects";
import { dashboards } from "../data/dashboards";

export default function Home() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <Hero />

        <section id="proyectos">
          <p className="section-eyebrow">public.proyectos</p>
          <h2 className="section-title">Proyectos</h2>
          {projects.map((project) => (
            <ProjectRecord project={project} key={project.id} />
          ))}
        </section>

        <section id="dashboards">
          <p className="section-eyebrow">public.dashboards</p>
          <h2 className="section-title">Dashboards de Power BI</h2>
          {dashboards.map((dashboard) => (
            <DashboardTile dashboard={dashboard} key={dashboard.id} />
          ))}
        </section>

        <Contact />
      </main>
    </div>
  );
}
