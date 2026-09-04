import "./ExperienceCard.css";

function ExperienceCard({ experience }) {
  return (
    <article className="experience-card">
      <span className="experience-dot" aria-hidden="true" />
      <div>
        <h2>{experience.role} <small>— {experience.company}</small></h2>
        <p className="experience-period">{experience.period}</p>
        <p>{experience.description}</p>
        {experience.children?.map((child) => (
          <div className="experience-child" key={child.role}>
            <h3>{child.role}</h3>
            <p>{child.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default ExperienceCard;
