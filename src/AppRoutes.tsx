import { Routes, Route } from 'react-router-dom';
import { RoutesApp } from './const';
import MainPage from './pages/MainPage/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MainLayout from './pages/MainLayout/MainLayout';
import CoursePage from './pages/CoursePage/CoursePage';
import SignInPage from './pages/SignInPage/SignInPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

function AppRoutes() {
  return (
    <Routes>
      {/* <Route element={<PrivateRoute />}>
        <Route path={RoutesApp.MAIN} element={<MainPage />}
          <Route path={RoutesApp.NEWCARD} element={<PopNewCardPage />} />
          <Route path={RoutesApp.BROWSE} element={<PopBrowsePage />} />
          <Route path={RoutesApp.EXIT} element={<PopExitPage />} />
        </Route>
      </Route> */}
      {/* <Route path={RoutesApp.SIGN_IN} element={<SignInPage />} />
      <Route path={RoutesApp.SIGN_UP} element={<SignUpPage />} /> */}
      <Route element={<MainLayout />}>
        <Route path={RoutesApp.MAIN} element={<MainPage />} />
        <Route path={RoutesApp.COURSE} element={<CoursePage />} />
         
      </Route>
       <Route path={RoutesApp.SIGN_IN} element={<SignInPage />} />
      <Route path={RoutesApp.SIGN_UP} element={<SignUpPage />} />

        <Route path={RoutesApp.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;

// есть путь на выход в константах
