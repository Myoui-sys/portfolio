import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">

        <NavLink to="/" className="logo">
          Dacy<span>.</span>
        </NavLink>

        <ul className="nav-list">

          <li>
            <NavLink to="/">
              Início
            </NavLink>
          </li>

          <li>
            <NavLink to="/sobre">
              Sobre
            </NavLink>
          </li>

          <li>
            <NavLink to="/habilidades">
              Habilidades
            </NavLink>
          </li>

          <li>
            <NavLink to="/projetos">
              Projetos
            </NavLink>
          </li>

          <li>
            <NavLink to="/experiencia">
              Experiência
            </NavLink>
          </li>

          <li>
            <NavLink to="/contato">
              Contato
            </NavLink>
          </li>

        </ul>

      </nav>
    </header>
  );
}

export default Navbar;
