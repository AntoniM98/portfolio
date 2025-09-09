import projectData from '../../data/projects.json';
import ProjectGridItem from './ProjectGridItem';
import './ProjectGrid.css';

export default function ProjectGrid() {
  return (
    <section className="project-grid" id="projects">
      {projectData.map((project, index) => {
        return (
          <ProjectGridItem
            key={index}
            link={project.link}
            image={project.image}
            name={project.name}
            type={project.type}
            description={project.description}
          />  
        );
      })}
    </section>
  );
}