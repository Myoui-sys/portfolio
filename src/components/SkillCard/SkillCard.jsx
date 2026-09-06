import "./SkillCard.css";
import Icon from "../Icon/Icon.jsx";

function SkillCard({ categoryIcon, title, items }) {
  return (
    <article className="skill-card">
      <header className="skill-card-heading">
        <Icon src={categoryIcon} className="skill-category-icon" />
        <h2>{title}</h2>
      </header>

      <ul className="skill-technologies">
        {items.map(({ name, icon, url }) => (
          <li key={name}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Acessar site do ${name}`}
              title={`Acessar ${name}`}
              className="skill-link"
            >
              <img
                src={icon}
                alt=""
                aria-hidden="true"
              />
            </a>

            <span>{name}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default SkillCard;