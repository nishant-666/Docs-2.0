import { auth } from "../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

let provider = new GoogleAuthProvider();

export const loginWithGoogle = () => {
  signInWithPopup(auth, provider);
};
