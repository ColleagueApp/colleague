import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import useLocalStorage from "./useLocalStorage";

export interface User {
  id: string;
  name: string;
  email: string;
  authToken?: string;
}

export const useUser = (): {
  user: User | null;
  addUser: (user: User) => void;
  removeUser: () => void;
} => {
  const { user, setUser } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (userInfo: User): void => {
    setUser(userInfo);
    setItem("user", JSON.stringify(userInfo));
  };

  const removeUser = (): void => {
    setUser(null);
    setItem("user", "");
  };

  return { user, addUser, removeUser };
};
