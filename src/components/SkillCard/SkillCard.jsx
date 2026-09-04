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
        {items.map(({ name, icon }) => (
          <li key={name}>
            <img src={icon} alt="" aria-hidden="true" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default SkillCard;
