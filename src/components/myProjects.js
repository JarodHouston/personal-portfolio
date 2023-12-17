import Project from "./project.js";

export default function MyProjects(props) {
  const projects = props.project.map((item) => {
    return <Project key={item.id} item={item} />;
  });

  return (
    <div>
      <h2 id="project-header">Projects</h2>
      <div className="project-container">{projects}</div>
    </div>
  );
}
