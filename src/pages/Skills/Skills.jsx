import "./Skills.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import SkillCard from "../../components/SkillCard/SkillCard.jsx";
import { skills } from "../../data/skills.js";

function Skills() {
  const topRow = skills.slice(0, 3);
  const bottomRow = skills.slice(3);

  return (
    <main className="page skills-page">
      <SectionTitle
        eyebrow="Habilidades"
        description="Ferramentas e tecnologias que utilizo no desenvolvimento de aplicações, automação de processos e testes de software."
      >
        Tecnologias que fazem<br />parte do meu <span className="accent">trabalho</span>.
      </SectionTitle>

      <div className="skills-divider" aria-hidden="true" />

      <section className="skills-showcase" aria-label="Tecnologias e ferramentas">
        <div className="skills-row skills-row-top">
          {topRow.map((skill) => <SkillCard key={skill.title} {...skill} />)}
        </div>
        <div className="skills-row skills-row-bottom">
          {bottomRow.map((skill) => <SkillCard key={skill.title} {...skill} />)}
        </div>
      </section>
    </main>
  );
}

export default Skills;
