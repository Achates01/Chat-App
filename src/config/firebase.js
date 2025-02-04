import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword,getAuth } from "firebase/auth";
import { getFirestore,setDoc } from "firebase/firestore";
import toast from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCp8p5CL2imzDBhNnnoDYw-tUVexvvAND8",
  authDomain: "chat-app-gs-4855e.firebaseapp.com",
  projectId: "chat-app-gs-4855e",
  storageBucket: "chat-app-gs-4855e.firebasestorage.app",
  messagingSenderId: "1011533010719",
  appId: "1:1011533010719:web:ea4b806f82ec5c85e3422a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username,email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await setDoc(doc(db, "users", user.uid), {
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hey, There i am using chat app",
            lastSeen:Date.now(), 
            createdAt: serverTimestamp(),
          });
        await setDoc(doc(db,"chats",user.uid),{
            chatData:[]
        })
    } catch (error) {
        console.error(error)
        toast.errow(error.code)
        
    }
};
export {signup}