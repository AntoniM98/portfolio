import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import './ProjectIntro.css';

export default function ProjectIntro({ currentProject }) {
  return (
    <section className="intro-section">
      <iframe className="video" src={currentProject.video} allowFullScreen></iframe>

      <span className="divider"></span>
      
      <div className="project-data">
        <h1 className="project-title">{currentProject.data.name}</h1>
        <div>
          <FontAwesomeIcon icon={faCaretRight} className="caret-icon" />
          <strong>Cliënt</strong>
          <p>{currentProject.data.client}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCaretRight} className="caret-icon" />
          <strong>Type</strong>
          <p>{currentProject.data.type}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCaretRight} className="caret-icon" />
          <strong>Jaar</strong>
          <p>{currentProject.data.year}</p>
        </div>
      </div>
    </section>
  );
}