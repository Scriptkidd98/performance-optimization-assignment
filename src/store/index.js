import store from "./store";
import { storeUserData, updateUserData } from "./actions";


export function testStore() {
    store.subscribe(() => {
        console.log('User data updated:', store.getState());
    });
}

export function getUserData() {
    const userData = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        image: 'https://example.com/john-doe.jpg'
    }
    store.dispatch(storeUserData(userData));
}

export function editUserData(newUserData) {
    store.dispatch(updateUserData(newUserData));
}