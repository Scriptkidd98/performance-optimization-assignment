import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD6xw6CR79MGTetxuj7O3xtigpD7aXciek",
  authDomain: "synk-10ab3.firebaseapp.com",
  projectId: "synk-10ab3",
  storageBucket: "synk-10ab3.firebasestorage.app",
  messagingSenderId: "151527782881",
  appId: "1:151527782881:web:df7106a5884867de03faa0",
  measurementId: "G-Q7Q9T2XWB6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const authenticateWithGoogle = async ( navigate ) => {
    try {
        auth.signInWithPopup(provider)
        .then(async (result) => {
            const user = result.user;
            console.log("Google user authenticated: ", user);
            
            //is user's data already in the database? if not, create a new user document
            if(user){
                navigate('/user/dashboard'); // Redirect to dashboard after successful authentication
            } else {
                // Handle the case where user data is not available
            }
        })
        .catch((error) => {
            console.error("Google authentication error: ", error);
            alert("Google authentication failed: " + error.message); // Show an alert on authentication failure
        });

    } catch (error) {
        console.error("Google authentication error: ", error);
        alert("Google authentication failed: " + error.message); // Show an alert on authentication failure
    }
}