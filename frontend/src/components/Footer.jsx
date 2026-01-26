import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">SCOLARINFO</h3>
            <p className="text-sm">Portal informasi beasiswa terlengkap di Indonesia</p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Menu</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/" className="hover:text-white transition">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/beasiswa" className="hover:text-white transition">
                  Beasiswa
                </a>
              </li>
              <li>
                <a href="/artikel" className="hover:text-white transition">
                  Artikel
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Jenis Beasiswa</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/beasiswa?jenis=swasta" className="hover:text-white transition">
                  Beasiswa Swasta
                </a>
              </li>
              <li>
                <a href="/beasiswa?jenis=negeri" className="hover:text-white transition">
                  Beasiswa Negeri
                </a>
              </li>
              <li>
                <a href="/beasiswa?jenis=luar_negeri" className="hover:text-white transition">
                  Luar Negeri
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Kontak</h3>
            <p className="text-sm mb-2">Email: SCOLARINFO@gmail.com</p>
            <p className="text-sm">Telepon: +62 856-4325-9238</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; 2026 SCOLARINFO. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
