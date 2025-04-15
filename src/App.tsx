import LoadableComponent from '@components/LoadableComponent';
import BaseLayout from '@pages/BaseLayout';
import Page404 from '@pages/Page404';
import PageTransition from '@pages/PageTransition';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = LoadableComponent(lazy(() => import('@pages/Home/HomePage')));
const AboutPage = LoadableComponent(
  lazy(() => import('@pages/About/AboutPage'))
);
const ProjectsPage = LoadableComponent(
  lazy(() => import('@pages/Projects/ProjectsPage'))
);
const UsesPage = LoadableComponent(lazy(() => import('@pages/Uses/UsesPage')));
const ThemePage = LoadableComponent(
  lazy(() => import('@pages/ThemeEditor/ThemeEditorPage'))
);

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
          path="uses"
          element={
            <PageTransition>
              <UsesPage />
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
          path="theme-editor"
          element={
            <PageTransition>
              <ThemePage />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <Page404 />
            </PageTransition>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
