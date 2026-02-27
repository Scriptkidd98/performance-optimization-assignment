import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Landing from '../pages/Landing';

const PublicRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default PublicRoutes