import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.init";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user with email & password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with Google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //sign in with github
const signInWithGithub = () => {
  setLoading(true);
  return signInWithPopup(auth, githubProvider);
};


  // Log in with email & password
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Update user profile
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  // Keep user state after reload
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    logIn,
    loading,
    setLoading,
    updateUser,
    signInWithGoogle,
    signInWithGithub,
  };

  // ✅ Must use AuthContext.Provider
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
