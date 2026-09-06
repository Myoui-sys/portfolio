import "./ProjectCard.css";
import arrowIcon from "../../assets/icons/Seta-Direita.svg";
import githubIcon from "../../assets/icons/GitHub.svg";
import linkedinIcon from "../../assets/icons/LinkedIn.svg";

function ProjectCard({ project, variant = "compact" }) {
  const imageStyle = {
    objectFit: project.imageFit || "cover",
    objectPosition: project.imagePosition || "center",
  };

  return (
    <article className={`project-card project-card-${variant}`}>
      <div className="project-preview">
        <img
          src={project.image}
          alt={`Prévia do projeto ${project.title}`}
          width="16"
          height="9"
          loading={variant === "featured" ? "eager" : "lazy"}
          decoding="async"
          style={imageStyle}
        />
        {project.badges?.length > 0 && (
          <ul
            className="project-badges"
            aria-label="Reconhecimentos do projeto"
          >
            {project.badges.map((badge) => (
              <li
                className={badge.tone === "gold" ? "project-badge-gold" : ""}
                key={badge.label}
              >
                <img src={badge.icon} alt="" width="16" height="16" aria-hidden="true" />
                <span>{badge.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="project-content">
        <div className="project-heading">
          <h3>{project.title}</h3>
          <div className="project-actions">
            {project.postUrl && (
              <a
                className="project-action project-action-post"
                href={project.postUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver a publicação sobre ${project.title} no LinkedIn`}
              >
                <span>Ver post</span>
                <img className="project-linkedin" src={linkedinIcon} alt="" width="13" height="13" aria-hidden="true" />
              </a>
            )}
            {project.deployUrl && (
              <a
                className="project-action project-action-deploy"
                href={project.deployUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir o site do projeto ${project.title}`}
              >
                <span>Abrir site</span>
                <img className="project-arrow" src={arrowIcon} alt="" width="11" height="11" aria-hidden="true" />
              </a>
            )}
            {project.repoUrl && (
              <a
                className="project-action project-action-code"
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver o código de ${project.title} no GitHub`}
              >
                <span>Código</span>
                <img className="project-github" src={githubIcon} alt="" width="12" height="12" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <p>{project.description}</p>

        <ul className="project-tags" aria-label="Tecnologias do projeto">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
