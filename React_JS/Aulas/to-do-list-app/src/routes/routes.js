import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/home';
import Register from '../pages/register';
import Admin from '../pages/Admin';
import Private from './Private'

function RoutesApp()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/admin' element={<Private><Admin /></Private>} />
            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;