import { createContext, useContext, useState } from "react";
import { account } from "../Appwrite";


const AuthContect = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function checkLogin(userName, password) {
    try {
      const response = await account.createEmailPasswordSession(
        userName,
        password
      );
      console.log("User session created:", response);
      setIsAuthenticated(true);
      return response;
    } catch (error) {
      console.error("Error during login:", error);
      setIsAuthenticated(false);
      throw error;
    }
  }

  return (
    <AuthContect.Provider value={{ isAuthenticated, checkLogin }}>
      {children}
    </AuthContect.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContect);
}
export default AuthProvider;
