import "./Contact.css";
import Icon from "../../components/Icon/Icon.jsx";
import rightArrowIcon from "../../assets/icons/Seta-Direita.svg";

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Contato de ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\nE-mail: ${data.get("email")}`);
    window.location.href = `mailto:contato@dacy.dev?subject=${subject}&body=${body}`;
  }

  return (
    <main className="page contact-page" id="contato">
      <header>
        <p className="eyebrow">Contato</p>
        <h1 className="display-title">Vamos construir algo juntos?</h1>
        <p className="lead">Estou aberta a oportunidades, projetos, parcerias e conexões na área de tecnologia.</p>
      </header>

      <div className="contact-grid">
        <form className="panel contact-form" onSubmit={handleSubmit}>
          <h2>Envie uma mensagem</h2>
          <div className="form-row">
            <label>Nome<input name="name" placeholder="Seu nome" required /></label>
            <label>E-mail<input name="email" type="email" placeholder="seuemail@exemplo.com" required /></label>
          </div>
          <label>Mensagem<textarea name="message" placeholder="Conte um pouco sobre a oportunidade, projeto ou ideia." required /></label>
          <button className="button button-primary" type="submit">Enviar mensagem <Icon src={rightArrowIcon} /></button>
        </form>

        <aside className="panel contact-info">
          <h2>Vamos nos conectar</h2>
          <dl>
            <div><dt>LinkedIn</dt><dd><a href="https://linkedin.com/in/dacyrrose-melo" target="_blank" rel="noreferrer">linkedin.com/in/dacyrrose-melo</a></dd></div>
            <div><dt>GitHub</dt><dd><a href="https://github.com/Myoui-sys" target="_blank" rel="noreferrer">github.com/Myoui-sys</a></dd></div>
            <div><dt>Localização</dt><dd>Recife, Pernambuco, Brasil</dd></div>
            <div><dt>Áreas de Atuação</dt><dd>Full-Stack · Front-End · Automação · QA · Gestão de Projetos</dd></div>
          </dl>
        </aside>
      </div>
    </main>
  );
}

export default Contact;
