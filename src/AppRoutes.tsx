import { Routes, Route } from 'react-router-dom';
import { RoutesApp } from './const';
import MainPage from './pages/MainPage/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MainLayout from './pages/MainLayout/MainLayout';
import CoursePage from './pages/CoursePage/CoursePage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ProfilPage from './pages/ProfilPage/ProfilPage';
import WorkOutFormPage from './pages/WorkOutsFormPage';
import WorkOutCoursePage from './pages/WorkOutCoursePage/WorkOutCoursePage';
import PrivateRoute from './PrivateRoute';

function AppRoutes() {
  return (
    <Routes>
      {/* Публичные страницы в MainLayout */}
      <Route element={<MainLayout />}>
        <Route path={RoutesApp.MAIN} element={<MainPage />} />
        <Route path="/course/:courseId" element={<CoursePage />} />

        {/* Приватные страницы внутри PrivateRoute */}
        <Route element={<PrivateRoute />}>
          <Route
            path="/course/:courseId/workouts/:workoutId"
            element={<WorkOutCoursePage />}
          />

          <Route path={RoutesApp.PROFILE} element={<ProfilPage />} />
        </Route>
      </Route>

      {/* Авторизация */}
      <Route path={RoutesApp.SIGN_IN} element={<SignInPage />} />
      <Route path={RoutesApp.SIGN_UP} element={<SignUpPage />} />

      {/* Форма выбора урока */}
      <Route path="/course/:courseId/workouts" element={<WorkOutFormPage />} />

      {/* 404 */}
      <Route path={RoutesApp.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;

// есть путь на выход в константах
