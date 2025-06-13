import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-semibold underline'
      : 'text-gray-700 hover:text-blue-500';

  return (
    <nav className="bg-white shadow-md px-6 py-4 mb-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-blue-700">
          Campus Club Finder
        </NavLink>
        <div className="space-x-4">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/clubs" className={navLinkClass}>Clubs</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
        </div>
      </div>
    </nav>
  );
}
