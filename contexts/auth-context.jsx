import React, { createContext, useState, useEffect, useContext } from "react";
import { signInWithAzureAD } from "lib/auth/azure";
import axios from "axios";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({ id: "", name: "" });
  const [streamToken, setStreamToken] = useState("");

  useEffect(() => {
    async function authenticate() {
      try {
        const auth = await signInWithAzureAD();
        const response = await axios.post(
          "http://localhost:3000/api/get-stream-token",
          {
            azureToken: auth.access_token,
          }
        );

        const { streamToken, userId, userName } = response.data;
        setUser({ id: userId, name: userName });
        setStreamToken(streamToken);
      } catch (error) {
        console.error("Error in ChatWrapper during authenticate: ", error);
      }
    }
    authenticate();
  }, []);

  return (
    <AuthContext.Provider value={{ user, streamToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
