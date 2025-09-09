import { Routes, Route } from 'react-router';
import HomePage from './pages/home-page/HomePage';
import ProjectPage from './pages/project-pages/ProjectPage';
import projectData from './data/projects.json';

function App() {
  const routes = projectData.map(project => project.link.slice(1));

  return (
    <Routes>
      <Route index element={<HomePage />} />
      {routes.map((path, index) => {
        return (
          <Route key={path} path={path} element={<ProjectPage id={index} />} />
        );
      })}
    </Routes>
  );
}

export default App;