import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Pages/home';
import Faq from './Pages/Faq';
import Sobre from './Pages/Sobre';
import Usuarios from './Pages/Usuarios';
import CadastroNews from './Pages/CadastroNews';
import NotFound from './Pages/NotFound';

export default function App() {
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/faq', label: 'FAQ' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/usuarios', label: 'Usuários' },
    { to: '/cadastroNews', label: 'Cadastro News' },
  ];

  return (
    <>
      <header className="site-header">
        <nav className="main-nav" aria-label="Menu principal">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/cadastroNews" element={<CadastroNews />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
