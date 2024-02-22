import React, { createContext, useState, useMemo } from "react";
import type { ReactNode } from "react";
import type { User } from "../utils/useUser"; 

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null, 
  setUser: () => {},
});


interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps): React.ReactElement {
    const [user, setUser] = useState<User | null>(null);
    const value = useMemo(() => ({ user, setUser }), [user]);
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }