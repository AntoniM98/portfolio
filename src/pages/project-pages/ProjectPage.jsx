import Header from '../../components/Header';
import BackButton from './BackButton';
import ProjectIntro from './ProjectIntro';
import ProjectContext from './ProjectContext';
import ProjectResult from './ProjectResult';
import Footer from '../../components/Footer';
import projectPageData from '../../data/project-pages.json';

export default function ProjectPage({ id }) {
  const currentProject = projectPageData.find(project => project.id === id);

  return (
    <>
      <title>{`${currentProject.data.name} | Antoni Magendans`}</title>

      <Header />
      <main>
        <BackButton />
        <ProjectIntro currentProject={currentProject} />
        <ProjectContext currentProject={currentProject} />
        <ProjectResult currentProject={currentProject} />
      </main>
      <Footer />
    </>
  );
}