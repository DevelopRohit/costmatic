import { createContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Email Login
  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  // Register
  const register = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleLogin = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        register,
        googleLogin,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
