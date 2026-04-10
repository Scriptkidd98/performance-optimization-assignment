import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Landing from '../pages/Landing';
import Signup from '../pages/Signup';

const PublicRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default PublicRoutes