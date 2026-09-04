import "./SkillCard.css";
import Icon from "../Icon/Icon.jsx";

function SkillCard({ categoryIcon, categorySymbol, title, items }) {
  return (
    <article className="skill-card">
      <header className="skill-card-heading">
        {categoryIcon ? (
          <Icon src={categoryIcon} className="skill-category-icon" />
        ) : (
          <span className="skill-category-symbol" aria-hidden="true">{categorySymbol}</span>
        )}
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
