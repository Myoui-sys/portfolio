import { useState } from "react";
import "./Contact.css";
import Icon from "../../components/Icon/Icon.jsx";
import rightArrowIcon from "../../assets/icons/Seta-Direita.svg";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/dacypsm09@gmail.com";

function Contact() {
  const [submitStatus, setSubmitStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("_honey")) return;

    setSubmitStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          _subject: `Nova mensagem do portfólio — ${data.get("name")}`,
          _template: "table",
        }),
      });

      const result = await response.json();
      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error("Form submission failed");
      }

      form.reset();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  }

  return (
    <main className="page contact-page" id="contato">
      <header>
        <p className="eyebrow">Contato</p>
        <h1 className="display-title">Vamos construir algo juntos?</h1>
        <p className="lead">Estou aberta a oportunidades, projetos, parcerias e conexões na área de tecnologia.</p>
      </header>

      <div className="contact-grid">
        <form className="panel contact-form" onSubmit={handleSubmit} aria-describedby="form-status">
          <h2>Envie uma mensagem</h2>
          <div className="contact-honeypot" aria-hidden="true">
            <label>Não preencha este campo<input name="_honey" tabIndex="-1" autoComplete="off" /></label>
          </div>
          <div className="form-row">
            <label>Nome<input name="name" placeholder="Seu nome" autoComplete="name" required disabled={submitStatus === "sending"} /></label>
            <label>E-mail<input name="email" type="email" placeholder="seuemail@exemplo.com" autoComplete="email" required disabled={submitStatus === "sending"} /></label>
          </div>
          <label>Mensagem<textarea name="message" placeholder="Conte um pouco sobre a oportunidade, projeto ou ideia." required disabled={submitStatus === "sending"} /></label>
          <button className="button button-primary" type="submit" disabled={submitStatus === "sending"}>
            {submitStatus === "sending" ? "Enviando..." : "Enviar mensagem"}
            {submitStatus === "sending" ? <span className="button-spinner" aria-hidden="true" /> : <Icon src={rightArrowIcon} />}
          </button>
          <p
            id="form-status"
            className={`form-status form-status--${submitStatus}`}
            role={submitStatus === "error" ? "alert" : "status"}
            aria-live="polite"
          >
            {submitStatus === "success" && "Mensagem enviada com sucesso! Obrigada pelo contato."}
            {submitStatus === "error" && <>Não foi possível enviar agora. Tente novamente ou escreva para <a href="mailto:dacypsm09@gmail.com">dacypsm09@gmail.com</a>.</>}
          </p>
          <p className="form-privacy">Seus dados serão utilizados somente para responder ao seu contato.</p>
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
