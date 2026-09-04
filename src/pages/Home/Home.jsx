import { Link } from "react-router-dom";
import Icon from "../../components/Icon/Icon.jsx";
import dacyIllustration from "../../assets/images/Icon Dacy.png";
import backIcon from "../../assets/icons/Back.svg";
import codeIcon from "../../assets/icons/Code.svg";
import dataIcon from "../../assets/icons/Dados.svg";
import emailIcon from "../../assets/icons/E-mail.svg";
import toolIcon from "../../assets/icons/Ferramenta.svg";
import githubIcon from "../../assets/icons/GitHub.svg";
import linkedinIcon from "../../assets/icons/LinkedIn.svg";
import rightArrowIcon from "../../assets/icons/Seta-Direita.svg";
import downloadIcon from "../../assets/icons/Download.svg";
import "./Home.css";

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="hero-copy">
          <span className="availability"><i /> Disponível para oportunidades</span>
          <h1>Dacyrrôse <span className="accent">Melo</span></h1>
          <h2>Desenvolvedora Full-Stack</h2>
          <p>Desenvolvo aplicações web e soluções digitais intuitivas, acessíveis e eficientes, unindo Front-End, Back-End e automação para transformar necessidades reais em produtos funcionais.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/projetos">Ver projetos <Icon src={rightArrowIcon} /></Link>
            <a className="button" href="/curriculo.pdf" download>Baixar currículo <Icon src={downloadIcon} /></a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/Myoui-sys" target="_blank" rel="noreferrer">
              <Icon src={githubIcon} /> GitHub
            </a>
            <a href="https://linkedin.com/in/dacyrrose-melo" target="_blank" rel="noreferrer">
              <Icon src={linkedinIcon} /> LinkedIn
            </a>
            <a href="mailto:dacypsm09@gmail.com">
              <Icon src={emailIcon} /> E-mail
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Áreas de atuação">
          <div className="portrait-orbit">
            <img src={dacyIllustration} alt="Ilustração de Dacyrrôse trabalhando em um notebook" />
          </div>
          <div className="floating-skills">
            <div><Icon src={codeIcon} className="skill-visual-icon" /><span><strong>Front-End</strong><small>Interfaces modernas e acessíveis</small></span></div>
            <div><Icon src={backIcon} className="skill-visual-icon" /><span><strong>Back-End</strong><small>APIs, bancos de dados e lógica</small></span></div>
            <div><Icon src={toolIcon} className="skill-visual-icon" /><span><strong>Automação</strong><small>Testes, RPA e otimização</small></span></div>
            <div><Icon src={dataIcon} className="skill-visual-icon" /><span><strong>Banco de Dados</strong><small>SQL, PostgreSQL e persistência</small></span></div>
          </div>
        </div>
      </section>

      <section className="home-about">
        <div>
          <p className="eyebrow">Um pouco sobre mim</p>
          <h2>Tecnologia que resolve problemas reais.</h2>
        </div>
        <div>
          <p>Gosto de transformar problemas reais em soluções digitais simples, funcionais e bem estruturadas. Atuo com desenvolvimento web, automação e qualidade de software, utilizando tecnologias como <strong>JavaScript, TypeScript, React, Node.js, Python, Playwright e PostgreSQL.</strong></p>
          <Link to="/sobre">Saiba mais sobre mim <Icon src={rightArrowIcon} /></Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
