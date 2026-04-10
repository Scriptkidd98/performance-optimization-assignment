import store from "./store";
import { storeUserData, updateUserData } from "./actions";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


export function testStore() {
    store.subscribe(() => {
        console.log('User data updated:', store.getState());
    });
}

export function getUserData(userId) {
    const userData = firebase.firestore().collection('users').doc(userId).get()
    .then((doc) => {
        if (doc.exists) {
            console.log('User data:', doc.data());
            return doc.data();
        } else {
            console.log('No such document!');
            return null;
        }
    })
    .catch((error) => {
        console.error('Error getting user data:', error);
        return null;
    });
    
    store.dispatch(storeUserData(userData));
}

export function editUserData(newUserData) {
    store.dispatch(updateUserData(newUserData));
}