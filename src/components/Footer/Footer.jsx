import "./Footer.css";
import emailIcon from "../../assets/icons/E-mail.svg";
import githubIcon from "../../assets/icons/GitHub.svg";
import linkedinIcon from "../../assets/icons/LinkedIn.svg";
import Icon from "../../components/Icon/Icon.jsx";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Dacyrrôse Melo. Todos os direitos reservados.</p>
      <div className="footer-links" aria-label="Redes sociais">
        <a href="mailto:dacypsm09@gmail.com" aria-label="E-mail"><Icon src={emailIcon} /></a>
        <a href="https://linkedin.com/in/dacyrrose-melo" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon src={linkedinIcon} /></a>
        <a href="https://github.com/Myoui-sys" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon src={githubIcon} /></a>
      </div>
    </footer>
  );
}

export default Footer;
