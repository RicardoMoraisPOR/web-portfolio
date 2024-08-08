import { Routes, Route } from 'react-router-dom';
import BaseLayout from './pages/BaseLayout';
import Page404 from './pages/Page404';
import PageTransition from './pages/PageTransition/PageTransition';
import LoadableComponent from './components/LoadableComponent';
import { lazy } from 'react';
import { useSecretContext } from './hooks/useSecret';

const HomePage = LoadableComponent(lazy(() => import('./pages/HomePage')));
const AboutPage = LoadableComponent(lazy(() => import('./pages/AboutPage')));
const UsesPage = LoadableComponent(lazy(() => import('./pages/UsesPage')));
const SecretsPage = LoadableComponent(
  lazy(() => import('./pages/SecretsPage'))
);
const ThemeEditorPage = LoadableComponent(
  lazy(() => import('./pages/ThemeEditorPage'))
);

const App = () => {
  const { foundAll } = useSecretContext();
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
          path="secrets"
          element={
            <PageTransition>
              <SecretsPage />
            </PageTransition>
          }
        />
        {foundAll && (
          <Route
            path="theme"
            element={
              <PageTransition>
                <ThemeEditorPage />
              </PageTransition>
            }
          />
        )}
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
