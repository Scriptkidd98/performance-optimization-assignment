import { useState, useEffect } from 'react';
import Profile from '../pages/Profile';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import Homepage from '../pages/Homepage';
import { getUserData } from '../store/index';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const PrivateRoutes = () => {
    const[isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setIsAuthenticated(true);
                getUserData(user.uid);
            } else {
                setIsAuthenticated(false);
            }
        });

        return () => unsubscribe();
    }, []);

  return isAuthenticated ? (
    <Provider store={store}>
        <Routes>          
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Homepage />} />
        </Routes>
    </Provider>
  ) : ( <Navigate to="/login" replace /> )
}

export default PrivateRoutes