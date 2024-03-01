import { useEffect } from "react";
import { useUser, type User } from "./useUser";
import useLocalStorage from "./useLocalStorage";

const useAuth = (): {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
} => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const localUser = getItem("user");
    if (localUser !== null) {
      // TODO: "Add a check for the user's auth token here"
      addUser(JSON.parse(localUser));
    }
  }, []);

  const login = (userInfo: User): void => {
    // TODO: "Add an actual login function here"
    addUser(userInfo);
  };

  const logout = (): void => {
    // TODO: "Add an actual logout function here"
    removeUser();
  };

  return { user, login, logout };
};

export default useAuth;
