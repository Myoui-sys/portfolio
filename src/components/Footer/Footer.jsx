import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Dacyrrôse Melo. Todos os direitos reservados.</p>
      <div className="footer-links" aria-label="Redes sociais">
        <a href="mailto:contato@dacy.dev" aria-label="E-mail">✉</a>
        <a href="https://linkedin.com/in/dacyrrose-melo" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
        <a href="https://github.com/Myoui-sys" target="_blank" rel="noreferrer" aria-label="GitHub">◉</a>
      </div>
    </footer>
  );
}

export default Footer;
