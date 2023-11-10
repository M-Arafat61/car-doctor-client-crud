import { createContext, useEffect, useState } from "react";
import auth from "../firebase/config.firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // user create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // user signIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user sign out
  const logout = () => {
    setLoading(false);
    return signOut(auth);
  };

  // current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };

      setUser(currentUser);
      console.log(currentUser);

      setLoading(false);
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then(response => {
            console.log(response.data);
          });
      } else {
        axios
          .post("http://localhost:5000/logout", loggedUser, {
            withCredentials: true,
          })
          .then(res => {
            console.log(res.data);
          });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user?.email]);
  const authInfo = {
    createUser,
    signIn,
    logout,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
