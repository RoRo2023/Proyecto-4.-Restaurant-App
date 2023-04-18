import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function NavigationRoute() {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
    )
}

export default NavigationRoute;