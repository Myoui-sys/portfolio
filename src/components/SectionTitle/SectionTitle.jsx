import "./SectionTitle.css";

function SectionTitle({ eyebrow, children, description }) {
  return (
    <header className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="display-title">{children}</h1>
      {description && <p className="lead">{description}</p>}
    </header>
  );
}

export default SectionTitle;
