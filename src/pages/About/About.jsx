import academicIcon from "../../assets/icons/Acadêmico.svg";
import languagesIcon from "../../assets/icons/Idiomas.svg";
import bookIcon from "../../assets/icons/Livro.svg";
import "./About.css";

function About() {
  return (
    <main className="page about-page">
      <section className="about-grid">
        <div className="about-copy">
          <p className="eyebrow">Sobre mim</p>
          <h1 className="display-title">Mais sobre minha <span className="accent">jornada</span>.</h1>
          <p>Sou graduada em Análise e Desenvolvimento de Sistemas e continuo aprofundando minha formação em tecnologia por meio do Programa Transforme-se, com foco em Desenvolvimento Front-End, e da Formação Acelerada em Programação em Teste de Software pela APONTI. Tenho interesse em desenvolvimento Full-Stack, automação, qualidade de software e construção de soluções digitais eficientes.</p>
          <p>Minha trajetória é guiada pela vontade de transformar problemas reais em soluções simples, funcionais e bem estruturadas. Gosto de aprender constantemente e me manter atualizada com novas tecnologias e boas práticas.</p>
          <p>Ao longo dos meus projetos, desenvolvi não apenas habilidades técnicas, mas também competências como comunicação, organização, resolução de problemas e trabalho em equipe, características que considero essenciais para gerar impacto.</p>
        </div>

        <div className="about-middle">
          <article className="panel about-card">
            <p className="eyebrow">Competências</p>
            <h2>Além do código</h2>
            <ul className="dot-list">
              <li>Comunicação clara e empática</li><li>Organização e responsabilidade</li><li>Resolução de problemas</li><li>Trabalho em equipe</li><li>Aprendizado contínuo</li>
            </ul>
          </article>
          <article className="panel about-card language-card">
            <p className="eyebrow">Idiomas</p>
            <h2>Inglês</h2><p>Nível intermediário</p>
            <img className="about-asset-icon" src={languagesIcon} alt="" aria-hidden="true" />
          </article>
        </div>

        <article className="panel education-card">
          <p className="eyebrow">Formação & desenvolvimento</p>
          <div><img className="about-asset-icon" src={academicIcon} alt="" aria-hidden="true" /><section><small>Formação acadêmica</small><h2>Análise e Desenvolvimento de Sistemas</h2><p>UNOPAR · 2023–2025</p></section></div>
          <div><img className="about-asset-icon" src={bookIcon} alt="" aria-hidden="true" /><section><small>Em formação</small><h2>FAP: Teste de Software</h2><p>APONTI · Em andamento</p></section></div>
          <div><img className="about-asset-icon" src={bookIcon} alt="" aria-hidden="true" /><section><small>Em formação</small><h2>Programa Transforme-se: Desenvolvimento Front-End</h2><p>SENAC Pernambuco + Serasa Experian · Em andamento</p></section></div>
        </article>
      </section>

      <section className="about-bottom">
        <div><p className="eyebrow">Como eu trabalho</p><h2>Foco em pessoas e soluções.</h2><p>Gosto de entender o problema antes de pensar na solução. Busco organizar ideias, identificar necessidades e construir de forma colaborativa.</p></div>
        <div><p className="eyebrow">Interesses atuais</p><h2>Estou sempre explorando.</h2><ul><li>Desenvolvimento Full-Stack</li><li>Automação de Processos</li><li>QA & Testes de Software</li><li>Inteligência Artificial</li><li>Acessibilidade & UI/UX</li><li>Front-End & Back-End</li></ul></div>
      </section>
    </main>
  );
}

export default About;
