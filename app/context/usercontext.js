"use client";
import { Auth } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  useEffect(() => {
    setIsLoading(true);
  }, [pathname]);
  useEffect(() => {
    onAuthStateChanged(Auth, (user) => {
      setUser(user);
    });
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
}
