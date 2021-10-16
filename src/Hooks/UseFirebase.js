import initApp from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

initApp();

// initiallize all auth provider and structure
const googleProvider= new GoogleAuthProvider()
