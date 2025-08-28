import { Routes, Route } from 'react-router-dom';
import { RoutesApp } from './const';
import MainPage from './pages/MainPage/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MainLayout from './pages/MainLayout/MainLayout';
import CoursePage from './pages/CoursePage/CoursePage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ProfilPage from './pages/ProfilPage/ProfilPage';
import WorkOutPage from './pages/WorkOutPage/WorkOutPage';
import PrivateRoute from './PrivateRoute';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={RoutesApp.MAIN} element={<MainPage />} />
        <Route path="/course/:_id" element={<CoursePage />} />
      </Route>
      <Route path={RoutesApp.SIGN_IN} element={<SignInPage />} />
      <Route path={RoutesApp.SIGN_UP} element={<SignUpPage />} />

      <Route path={RoutesApp.NOT_FOUND} element={<NotFoundPage />} />

      <Route element={<PrivateRoute />}>
        <Route path="/workouts/:_id" element={<WorkOutPage />} />
        <Route path={RoutesApp.PROFILE} element={<ProfilPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

// есть путь на выход в константах
