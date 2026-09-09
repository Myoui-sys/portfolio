import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <nav
        className="navbar"
        aria-label="Navegação principal"
        onKeyDown={(event) => event.key === "Escape" && closeMenu()}
      >

        <NavLink to="/" className="logo" onClick={closeMenu}>
          Dacy<span>.</span>
        </NavLink>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="main-menu" className={`nav-list${isOpen ? " nav-list--open" : ""}`}>

          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Início
            </NavLink>
          </li>

          <li>
            <NavLink to="/sobre" onClick={closeMenu}>
              Sobre
            </NavLink>
          </li>

          <li>
            <NavLink to="/habilidades" onClick={closeMenu}>
              Habilidades
            </NavLink>
          </li>

          <li>
            <NavLink to="/projetos" onClick={closeMenu}>
              Projetos
            </NavLink>
          </li>

          <li>
            <NavLink to="/experiencia" onClick={closeMenu}>
              Experiência
            </NavLink>
          </li>

          <li>
            <NavLink to="/contato" onClick={closeMenu}>
              Contato
            </NavLink>
          </li>

        </ul>

      </nav>
    </header>
  );
}

export default Navbar;
