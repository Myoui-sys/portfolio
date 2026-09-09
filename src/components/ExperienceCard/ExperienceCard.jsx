import "./ExperienceCard.css";
import Icon from "../Icon/Icon.jsx";
import peopleIcon from "../../assets/icons/Experience-People.svg";
import codeIcon from "../../assets/icons/Code.svg";
import briefcaseIcon from "../../assets/icons/Experience-Briefcase.svg";

const icons = {
  people: peopleIcon,
  code: codeIcon,
  briefcase: briefcaseIcon,
};

function ExperienceCard({ experience }) {
  return (
    <article className="experience-card">
      <span className="experience-dot" aria-hidden="true" />
      <div className="experience-main">
        <span className="experience-icon experience-icon--main">
          <Icon src={icons[experience.icon]} />
        </span>
        <div className="experience-copy">
          <h2>{experience.role}{!experience.companyInPeriod && <small> — {experience.company}</small>}</h2>
          <p className="experience-period">
            {experience.period}{experience.companyInPeriod && <> · {experience.company}</>}
          </p>
          <p>{experience.description}</p>
        </div>
      </div>

      {experience.children && (
        <div className="experience-children">
          {experience.children.map((child) => (
            <section className="experience-child" key={child.role}>
              <span className="experience-child-dot" aria-hidden="true" />
              <span className="experience-icon experience-icon--child">
                <Icon src={icons[child.icon]} />
              </span>
              <div>
                <h3>{child.role}</h3>
                <p>{child.description}</p>
              </div>
            </section>
          ))}
        </div>
      )}
    </article>
  );
}

export default ExperienceCard;
