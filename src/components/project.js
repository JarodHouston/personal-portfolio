export default function Project(props) {
  props = props.item;
  return (
    <a href={props.link} target="blank">
      <div className="project-card">
        <h3>{props.name}</h3>
        {props.image && (
          <img
            className="project-image"
            src={props.image}
            alt={props.altText}
          />
        )}
        <p className="project-card-desc">{props.description}</p>
      </div>
    </a>
  );
}
