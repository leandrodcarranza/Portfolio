import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stack from "../components/Stack";
import ProjectRecord from "../components/ProjectRecord";
import DashboardTile from "../components/DashboardTile";
import Contact from "../components/Contact";
import { projects } from "../data/projects";
import { dashboards } from "../data/dashboards";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Hero />
        <Stack />

        <section id="proyectos">
          <h2 className="section-title">Proyectos</h2>
          {projects.map((project) => (
            <ProjectRecord project={project} key={project.id} />
          ))}
        </section>

        <section id="dashboards">
          <h2 className="section-title">Dashboards</h2>
          {dashboards.map((dashboard) => (
            <DashboardTile dashboard={dashboard} key={dashboard.id} />
          ))}
        </section>

        <Contact />
      </main>
    </>
  );
}
