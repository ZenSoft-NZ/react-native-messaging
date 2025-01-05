import React, { createContext, useState, useContext } from "react";
import { signInWithAzureAD, signOutWithAzureAD } from "lib/api/auth/azure";

type IAuth =
  | {
      isAuthenticated: false;
    }
  | {
      isAuthenticated: true;
      user: {
        id: string;
        name: string;
      };
      accessToken: string;
    };

type AuthContextProps =
  | {
      auth: IAuth;
      signIn: () => Promise<void>;
      signOut: () => void;
    }
  | undefined;
const AuthContext = createContext<AuthContextProps>(undefined);

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState<IAuth>({ isAuthenticated: false });

  async function signIn() {
    try {
      const auth = await signInWithAzureAD();
      if (auth)
        setAuth({
          isAuthenticated: true,
          user: auth.user,
          accessToken: auth.accessToken,
        });
    } catch (error) {
      console.error("Error in signIn", error);
      throw error;
    }
  }

  async function signOut() {
    signOutWithAzureAD();
    setAuth({ isAuthenticated: false });
  }

  return (
    <AuthContext.Provider value={{ auth, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
