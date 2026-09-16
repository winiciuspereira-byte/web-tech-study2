import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Faq from './Pages/Faq'; 
import NotFound from './Pages/NotFound';

export default function Router() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/faq" element={<Faq />} /> =
                <Route path="*" element={<NotFound />} />
                <Route path="/usuarios" element={<Usuarios />} /> 
            </Routes>
        </BrowserRouter>
    );
}