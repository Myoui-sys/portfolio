import "./Experience.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard.jsx";
import { experiences } from "../../data/experiences.js";
import starIcon from "../../assets/icons/Estrela.svg";
import goldAwardIcon from "../../assets/icons/PrêmioDourado.svg";
import silverAwardIcon from "../../assets/icons/PrêmioCinza.svg";

const professionalSkills = [
  "Gestão de Projetos",
  "Desenvolvimento Full-Stack",
  "Quality Assurance",
  "Liderança de equipes",
  "Análise e resolução de problemas",
];

const awards = [
  {
    title: "2º Lugar — Ideathon RFEC 2026",
    description: "Projeto NAMI · Acessibilidade Cognitiva com IA",
    icon: goldAwardIcon,
  },
  {
    title: "Aluna Destaque — Programa Transforme-se",
    description: "Reconhecimento pelo desempenho, comprometimento e dedicação durante a formação.",
    icon: silverAwardIcon,
  },
];

function Experience() {
  return (
    <main className="page experience-page">
      <SectionTitle eyebrow="Experiência" description="Vivências profissionais, liderança e atuação em tecnologia que contribuíram para minha evolução.">
        Minha trajetória,<br />meu <span className="accent">propósito</span>.
      </SectionTitle>

      <div className="experience-layout">
        <section className="panel timeline" aria-label="Linha do tempo profissional">
          {experiences.map((experience) => <ExperienceCard key={experience.role} experience={experience} />)}
        </section>

        <aside className="experience-aside">
          <section className="panel professional-skills" aria-labelledby="professional-skills-title">
            <header className="aside-heading">
              <p className="eyebrow" id="professional-skills-title">Competências profissionais</p>
              <span className="aside-icon" aria-hidden="true"><img src={starIcon} alt="" /></span>
            </header>
            <ul>
              {professionalSkills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </section>
          <section className="panel awards" aria-labelledby="awards-title">
            <p className="eyebrow" id="awards-title">Reconhecimento e prêmios</p>
            <div className="award-list">
              {awards.map((award) => (
                <article className="award-item" key={award.title}>
                  <span className="award-icon" aria-hidden="true"><img src={award.icon} alt="" /></span>
                  <div>
                    <h2>{award.title}</h2>
                    <p>{award.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}

export default Experience;
