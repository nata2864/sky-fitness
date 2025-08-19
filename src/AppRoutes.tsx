import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import MainPage from "./src/pages/MainPage.tsx";

// import { RoutesApp } from "./const.tsx";

// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
// import PrivateRoute from "./PrivateRoute.jsx";
import { RoutesApp } from "./const";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"



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
         
        <Route path={RoutesApp.MAIN} element={<MainPage/>} />
 
      <Route path={RoutesApp.NOT_FOUND} element={<NotFoundPage/>} />
    </Routes>
  );
}

export default AppRoutes;
