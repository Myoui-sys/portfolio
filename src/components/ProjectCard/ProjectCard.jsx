import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <article className="project-card panel">
      <div className={`project-preview project-preview-${project.tone}`}>
        <strong>{project.mark}</strong>
      </div>
      <div className="project-content">
        <div className="project-heading">
          <h2>{project.title}</h2>
          <a href="#contato" aria-label={`Acessar ${project.title}`}>Acessar projeto ↗</a>
        </div>
        <p>{project.description}</p>
        <ul className="project-tags">
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
