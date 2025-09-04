import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { checkLocalStorage } from "../utils/checkLocalStorage/checkLocalStorage";

// Тип данных пользователя
export type User ={
  _id: string;
  login: string;
}

// Тип пропсов провайдера
interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  // checkLocalStorage может вернуть либо User, либо null
  const [user, setUser] = useState<User | null>(checkLocalStorage());

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("userInfo");
      if (storedUser) {
        console.log(storedUser)
        setUser(JSON.parse(storedUser) );
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных из localStorage:", error);
    }
  }, []);

  // Обновляем данные о пользователе и сохраняем в лс
  // const updateUserInfo = (userData: User | null) => {
  //   setUser(userData);
  //   if (userData) {
  //     localStorage.setItem("userInfo", JSON.stringify(userData));
  //   } else {
  //     localStorage.removeItem("userInfo");
  //   }
  // };

   const updateUserInfo = (userData: User | null) => {
  console.log("Updating user info:", userData);
  setUser(userData);
  try {
    if (userData) {
      console.log("Saving to localStorage:", JSON.stringify(userData));
      localStorage.setItem("userInfo", JSON.stringify(userData));
    } else {
      console.log("Removing from localStorage");
      localStorage.removeItem("userInfo");
    }
  } catch (error) {
    console.error("LocalStorage error:", error);
  }
};


//АПИ возвращает токен, а не мейл и логин. Нужно переделать


  const login = (loginData: User): boolean => {
    console.log("loginData:", loginData);

    updateUserInfo(loginData);
    return true;
  };


  const logout = (): boolean => {
    updateUserInfo(null);
    return true;
  };

  console.log("updateUserInfo function loaded");

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
