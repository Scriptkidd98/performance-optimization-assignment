import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import Landing from '../pages/Landing';
import Homepage from '../pages/Homepage';

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/*" element={<PublicRoutes />}>
                <Route index element={<Landing />} />
            </Route>

            <Route path="/user/*" element={<PrivateRoutes />}>
                <Route index element={<Homepage />} />
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRouter