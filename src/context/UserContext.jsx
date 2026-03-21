import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

export const UserContext = createContext();

function UserProvider({ children }) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ IMPORTANT

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);
      setLoading(false); // ✅ DONE

    });

    return () => unsubscribe();

  }, []);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;