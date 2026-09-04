import "./Icon.css";

function Icon({ src, className = "" }) {
  return (
    <span
      className={`icon ${className}`.trim()}
      style={{ "--icon-url": `url("${src}")` }}
      aria-hidden="true"
    />
  );
}

export default Icon;
