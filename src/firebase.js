import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
   apiKey: "AIzaSyCctmQZuxWTn0C14iMGyIDI-fLIvZb5NcI",
  authDomain: "devpulse-8e77f.firebaseapp.com",
  projectId: "devpulse-8e77f",
  storageBucket: "devpulse-8e77f.firebasestorage.app",
  messagingSenderId: "1025628332905",
  appId: "1:1025628332905:web:eb7fcba474fb0aedf553f8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;