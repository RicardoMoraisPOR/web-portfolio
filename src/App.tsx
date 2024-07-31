import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BaseLayout from './pages/BaseLayout';
import AboutPage from './pages/AboutPage';
import Page404 from './pages/Page404';
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
          path="uses"
          element={
            <PageTransition>
              <UsesPage />
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
