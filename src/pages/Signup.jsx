import { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();

        if(email && password) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                console.log('User created:', user);
                console.log('User UID:', user.uid);
                console.log('User Token:', await user.getIdToken());

                if(user) {
                    firebase.firestore()
                    .collection('users')
                    .doc(user.uid)
                    .set({
                        email: user.email,
                        uid: user.uid  
                    })
                    .then(() => {
                        console.log('User data stored in Firestore');
                    })
                    .catch((error) => {
                        console.error('Error storing user data in Firestore:', error);
                    });
                }
            })
            .catch((error) => {                
                console.error('Error signing up:', error);
            });
        }
    }   
  return (
    <div>
        <form onSubmit={signUp}>
            <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}></input>
            <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
            <button type="submit">Signup</button>
        </form>
    </div>
  )
}

export default Signup