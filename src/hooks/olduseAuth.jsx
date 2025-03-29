import { useState } from "react";
import { account } from "../Appwrite";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function checkLogin(userName,password) {
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

  return {isAuthenticated, checkLogin};
}
