import { Link } from 'react-router';
import './ProjectGridItem.css';

export default function ProjectGridItem( { link, image, name, type, description} ) {
  return (
    <div className="project">
      <Link to={link}>
        <div className="project-image">
          <img src={image} />
        </div>
        <div className="project-info">
          <h2 className="project-name">{name}</h2>
          <p className="project-type">{type}</p>
          <p className="project-description">{description}</p>
        </div>
      </Link>
    </div>
  );
}