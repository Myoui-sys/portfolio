import "./Projects.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import { projects } from "../../data/projects.js";

function Projects() {
  return (
    <main className="page projects-page">
      <div className="projects-intro">
        <SectionTitle eyebrow="Projetos" description="Seleção dos trabalhos mais relevantes, organizados por impacto, experiência e área de atuação.">
          Projetos que mostram minha <span className="accent">evolução</span>.
        </SectionTitle>
      </div>

      <section className="featured-projects">
        <h2 className="project-section-title"><span>☆</span> Projetos em Destaque</h2>
        <div className="featured-grid">
          {projects.slice(0, 2).map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>

      <section className="project-category">
        <h2 className="project-section-title"><span>ϟ</span> Hackathons & Ideathons</h2>
        <div className="project-grid">
          {[projects[0], projects[2], projects[3]].map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>

      <section className="project-category">
        <h2 className="project-section-title"><span>▱</span> Desenvolvimento</h2>
        <div className="project-grid">
          {[projects[1], projects[4], projects[5]].map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>
    </main>
  );
}

export default Projects;
