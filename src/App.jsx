import './App.css';
import AppRouter from './routes/AppRouter';

import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";


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
const app = firebase.initializeApp(firebaseConfig);
getAnalytics(app);

function App() {
  return (
    <AppRouter />
  );
}

export default App;