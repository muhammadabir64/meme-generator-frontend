import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDc6mTAOLp0AvtZn7JTitH0oXVSljvszXM",
    authDomain: "meme-generator-7d77f.firebaseapp.com",
    projectId: "meme-generator-7d77f",
    storageBucket: "meme-generator-7d77f.appspot.com",
    messagingSenderId: "816803068843",
    appId: "1:816803068843:web:dafd522eb045561a72b0ee"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default app;
export { firebaseConfig, storage };