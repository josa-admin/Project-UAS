// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import { useNotification } from '../context/NotificationContext';
// import NotificationBell from './NotificationBell';

// const Header = () => {
//   const { isLoggedIn, user, logout } = useAuth();

//   return (
//     <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
//       <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold">
//           🎓 Beasiswa.Info
//         </Link>

//         <div className="flex items-center gap-6">
//           <Link to="/" className="hover:text-blue-100 transition">
//             Beranda
//           </Link>
//           <Link to="/beasiswa" className="hover:text-blue-100 transition">
//             Beasiswa
//           </Link>
//           <Link to="/artikel" className="hover:text-blue-100 transition">
//             Artikel
//           </Link>
//           <Link to="/tentang" className="hover:text-blue-100 transition">
//             Tentang
//           </Link>

//           {isLoggedIn ? (
//             <>
//               <NotificationBell />
//               <div className="relative group">
//                 <button className="flex items-center gap-2 hover:text-blue-100">
//                   <span>👤 {user?.name}</span>
//                 </button>
//                 <div className="hidden group-hover:block absolute right-0 bg-white text-gray-800 rounded shadow-lg w-40">
//                   {user?.role === 'admin' && (
//                     <Link
//                       to="/admin/dashboard"
//                       className="block px-4 py-2 hover:bg-gray-100 border-b"
//                     >
//                       Admin Dashboard
//                     </Link>
//                   )}
//                   <Link
//                     to="/dashboard"
//                     className="block px-4 py-2 hover:bg-gray-100 border-b"
//                   >
//                     Dashboard
//                   </Link>
//                   <button
//                     onClick={logout}
//                     className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-blue-50 transition"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 transition"
//               >
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import NotificationBell from './NotificationBell';

const Header = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          🎓 Beasiswa.Info
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
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

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-4 space-y-3">
          <Link to="/" className="block hover:text-blue-100 transition py-2">
            Beranda
          </Link>
          <Link to="/beasiswa" className="block hover:text-blue-100 transition py-2">
            Beasiswa
          </Link>
          <Link to="/artikel" className="block hover:text-blue-100 transition py-2">
            Artikel
          </Link>
          <Link to="/tentang" className="block hover:text-blue-100 transition py-2">
            Tentang
          </Link>

          {isLoggedIn ? (
            <>
              <hr className="border-blue-500 my-2" />
              <NotificationBell />
              <div className="py-2">
                <p className="font-semibold mb-2">👤 {user?.name}</p>
              </div>
              {user?.role === 'admin' && (
                <Link
                  to="/admin/dashboard"
                  className="block hover:text-blue-100 transition py-2"
                >
                  Admin Dashboard
                </Link>
              )}
              <Link
                to="/dashboard"
                className="block hover:text-blue-100 transition py-2"
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-red-300 hover:text-red-200 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <hr className="border-blue-500 my-2" />
              <Link
                to="/login"
                className="block px-4 py-2 bg-white text-blue-600 rounded hover:bg-blue-50 transition text-center"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-4 py-2 bg-blue-800 rounded hover:bg-blue-900 transition text-center"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;