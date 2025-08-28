import { createContext } from "react";
import type { User } from "./AuthProvider";

type AuthContextType = {
  user: User | null;
  login: (loginData: User) => boolean;
  logout: () => boolean;
  updateUserInfo: (userData: User | null) => void;
}



export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,               // дефолтная заглушка
  logout: () => false,              // дефолтная заглушка
  updateUserInfo: () => {},         // дефолтная заглушка
});