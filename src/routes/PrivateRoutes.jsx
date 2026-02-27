import { useState, useEffect } from 'react';
import Profile from '../pages/Profile';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import Homepage from '../pages/Homepage';
import { getUserData, testStore } from '../store/index';

const PrivateRoutes = () => {
    const[isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
        const isLogin = () => {
            if(isAuthenticated) {
                setIsAuthenticated(true);
                getUserData();
                testStore();
            } else {
                setIsAuthenticated(false);
            }
        }
        isLogin();
    }, [isAuthenticated]);

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