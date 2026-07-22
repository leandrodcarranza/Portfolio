export default function ProjectRecord({ project }) {
  return (
    <article className="record" data-estado={project.estado}>
      <div className="record-head">
        <p className="record-nombre">{project.nombre}</p>
        <span className="record-status" data-estado={project.estado}>
          {project.estado}
        </span>
      </div>
      <p className="record-subtitulo">{project.subtitulo}</p>
      <p className="record-descripcion">{project.descripcion}</p>

      <div className="stack-row">
        {project.stack.map((tech) => (
          <span className="stack-tag" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      {(project.repo || project.demo) && (
        <div className="record-footer">
          {project.repo && (
            <a className="record-link" href={project.repo} target="_blank" rel="noreferrer">
              Ver código →
            </a>
          )}
          {project.demo && (
            <a className="record-link" href={project.demo} target="_blank" rel="noreferrer">
              Ver demo →
            </a>
          )}
        </div>
      )}
    </article>
  );
}
