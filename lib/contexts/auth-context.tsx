import React, { createContext, useState, useEffect, useContext } from "react";
import { signInWithAzureAD } from "lib/api/auth/azure";

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

const AuthContext = createContext<IAuth>({ isAuthenticated: false });

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState<IAuth>({ isAuthenticated: false });

  useEffect(() => {
    async function authenticate() {
      try {
        const auth = await signInWithAzureAD();

        setAuth({
          isAuthenticated: true,
          user: auth.user,
          accessToken: auth.accessToken,
        });
      } catch (error) {
        console.error("Error in authenticate: ", error);
      }
    }
    authenticate();
  }, []);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
