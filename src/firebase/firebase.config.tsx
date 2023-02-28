// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBL5jHKJwKhuclKCy4_UzlC5iGbaBdcgnE",
    authDomain: "horizon-a4d5f.firebaseapp.com",
    projectId: "horizon-a4d5f",
    storageBucket: "horizon-a4d5f.appspot.com",
    messagingSenderId: "283388688387",
    appId: "1:283388688387:web:130c7ae972af00f9df3636"
};

// Initialize Firebase
const app: any = initializeApp(firebaseConfig);


function initializeApp(firebaseConfig: { apiKey: string; authDomain: string; projectId: string; storageBucket: string; messagingSenderId: string; appId: string; }) {
    throw new Error("Function not implemented.");
}
const auth = getAuth(app)

export default auth;

