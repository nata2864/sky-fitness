import { Navigate, Outlet } from "react-router-dom";
import { RoutesApp } from "./const";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import type { User } from "./context/AuthProvider";

function PrivateRoute() {
  const { user } = useContext(AuthContext) as { user: User | null };
  return user ? <Outlet /> : <Navigate to={RoutesApp.SIGN_IN} />;

}

export default PrivateRoute;
