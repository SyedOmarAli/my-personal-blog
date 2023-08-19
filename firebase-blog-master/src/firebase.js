import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkF1Lp3-Wm9R7ILxptKyiFFBbTQ2EL-QA",
  authDomain: "personal-blog-website-10d9c.firebaseapp.com",
  projectId: "personal-blog-website-10d9c",
  storageBucket: "personal-blog-website-10d9c.appspot.com",
  messagingSenderId: "415509377169",
  appId: "1:415509377169:web:717da91f6634a4ba7a4f30"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
