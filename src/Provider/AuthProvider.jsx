import {useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import AuthContext from "../context/AuthContext.jsx";
import auth from "../firebase/firebase.config.js";


// Provider Component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login User
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Update Profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // Logout
  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Auth State Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("user data-->", currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Context Value
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    updateUserProfile,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      { children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;
