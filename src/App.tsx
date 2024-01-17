import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BaseLayout from './pages/BaseLayout';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import UsesPage from './pages/UsesPage';
import PageTransition from './pages/PageTransition/PageTransition';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route
          index
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="projects"
          element={
            <PageTransition>
              <ProjectsPage />
            </PageTransition>
          }
        />
        <Route
          path="uses"
          element={
            <PageTransition>
              <UsesPage />
            </PageTransition>
          }
        />
        <Route path="*" element={<>Ups</>} />
      </Route>
    </Routes>
  );
};

export default App;
