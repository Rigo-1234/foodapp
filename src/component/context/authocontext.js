import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userloggeduid, setUserloggeduid] = useState("");

  /* ------------ save UID to storage ------------ */
  const userloggeduidHandler = async (userid) => {
    try {
      await AsyncStorage.setItem("userloggeduid", userid);
      setUserloggeduid(userid);
    } catch (err) {
      console.error("Failed to save UID:", err);
    }
  };

  /* -------- load UID from storage on demand -------- */
  const loadUid = async () => {
    try {
      const value = await AsyncStorage.getItem("userloggeduid");
      if (value !== null) {
        setUserloggeduid(value);
      } else {
        console.log("User UID not found in AsyncStorage");
      }
    } catch (error) {
      console.error("Failed to load userloggeduid:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ userloggeduid, userloggeduidHandler, loadUid }}
    >
      {children}
    </AuthContext.Provider>
  );
};
