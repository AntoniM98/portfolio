import './ProjectContext.css';

export default function ProjectContext({ currentProject }) {
  return (
    <section className="context-section">
      <h2>Context</h2>
      {currentProject.context.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </section>
  );
}