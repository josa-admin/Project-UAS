import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import NotificationBell from './NotificationBell';

const Header = () => {
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          🎓 Beasiswa.Info
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-blue-100 transition">
            Beranda
          </Link>
          <Link to="/beasiswa" className="hover:text-blue-100 transition">
            Beasiswa
          </Link>
          <Link to="/artikel" className="hover:text-blue-100 transition">
            Artikel
          </Link>
          <Link to="/tentang" className="hover:text-blue-100 transition">
            Tentang
          </Link>

          {isLoggedIn ? (
            <>
              <NotificationBell />
              <div className="relative group">
                <button className="flex items-center gap-2 hover:text-blue-100">
                  <span>👤 {user?.name}</span>
                </button>
                <div className="hidden group-hover:block absolute right-0 bg-white text-gray-800 rounded shadow-lg w-40">
                  {user?.role === 'admin' && (
                    <Link
                      to="/admin/dashboard"
                      className="block px-4 py-2 hover:bg-gray-100 border-b"
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100 border-b"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-blue-50 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
