import { createContext } from "react";
import type { User } from "./AuthProvider";

interface AuthContextType {
  user: User | null;
  login: (loginData: User) => boolean;
  logout: () => boolean;
  updateUserInfo: (userData: User | null) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);