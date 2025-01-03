import React, { createContext, useState, useEffect, useContext } from "react";
import { signInWithAzureAD } from "lib/api/auth/azure";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: { id: "", name: "" },
    accessToken: "",
  });

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
