import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

let provider = new GoogleAuthProvider();

export const loginWithGoogle = () => {
  signInWithPopup(auth, provider);
};

export const logout = () => {
  signOut(auth);
};
