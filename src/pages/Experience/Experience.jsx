import "./Experience.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle.jsx";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard.jsx";
import { experiences } from "../../data/experiences.js";

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
          <section className="panel professional-skills">
            <p className="eyebrow">Competências profissionais</p>
            <ul><li>Gestão de Projetos</li><li>Desenvolvimento Full-Stack</li><li>Quality Assurance</li><li>Liderança de equipes</li><li>Análise e resolução de problemas</li></ul>
          </section>
          <section className="panel awards">
            <p className="eyebrow">Reconhecimento e prêmios</p>
            <div><span>◉</span><section><h2>2º Lugar — Ideathon RFEC 2026</h2><p>Projeto NAMI · Acessibilidade Cognitiva com IA</p></section></div>
            <div><span>☆</span><section><h2>Aluna Destaque — Programa Transforme-se</h2><p>Reconhecimento pelo desempenho, comprometimento e dedicação durante a formação.</p></section></div>
          </section>
        </aside>
      </div>
    </main>
  );
}

export default Experience;
