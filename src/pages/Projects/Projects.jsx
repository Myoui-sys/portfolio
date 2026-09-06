import "./Projects.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import featuredIcon from "../../assets/icons/Estrela.svg";
import hackathonIcon from "../../assets/icons/Raio.svg";
import developmentIcon from "../../assets/icons/PC.svg";
import {
  developmentProjects,
  featuredProjects,
  hackathonProjects,
} from "../../data/projects.js";

function ProjectSectionHeading({ icon, children }) {
  return (
    <div className="project-section-heading">
      <img src={icon} alt="" aria-hidden="true" />
      <h2>{children}</h2>
      <span aria-hidden="true" />
    </div>
  );
}

function Projects() {
  return (
    <main className="page projects-page">
      <div className="projects-top">
        <div className="projects-intro">
          <SectionTitle
            eyebrow="Projetos"
            description="Seleção dos trabalhos mais relevantes, organizados por impacto, experiência e área de atuação."
          >
            Projetos que mostram minha <span className="accent">evolução</span>.
          </SectionTitle>
        </div>

        <section className="featured-projects" aria-labelledby="featured-title">
          <div id="featured-title">
            <ProjectSectionHeading icon={featuredIcon}>Projetos em Destaque</ProjectSectionHeading>
          </div>
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} variant="featured" />
            ))}
          </div>
        </section>
      </div>

      <section className="project-category" aria-labelledby="hackathons-title">
        <div id="hackathons-title">
          <ProjectSectionHeading icon={hackathonIcon}>Hackathons &amp; Ideathons</ProjectSectionHeading>
        </div>
        <div className="project-grid">
          {hackathonProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>

      <section className="project-category" aria-labelledby="development-title">
        <div id="development-title">
          <ProjectSectionHeading icon={developmentIcon}>Desenvolvimento</ProjectSectionHeading>
        </div>
        <div className="project-grid">
          {developmentProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>
    </main>
  );
}

export default Projects;
