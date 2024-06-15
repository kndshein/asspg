import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import EnginePage from './pages/EnginePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <>
      <nav className="flex justify-center items-center gap-8 p-4 mb-6 bg-zinc-900">
        <NavLink
          className={({ isActive }) => {
            return `uppercase ${
              isActive
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'
                : 'text-gray-400 hover:text-gray-200'
            }`;
          }}
          to="/"
        >
          Engine
        </NavLink>
        <h1 className="text-3xl text-white font-bold text-center">ASSPG</h1>
        <NavLink
          className={({ isActive }) => {
            return `uppercase ${
              isActive
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'
                : 'text-gray-400 hover:text-gray-200'
            }`;
          }}
          to="/about"
        >
          About
        </NavLink>
      </nav>
      <Routes>
        <Route index element={<EnginePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
