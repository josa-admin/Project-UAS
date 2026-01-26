import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Temukan Beasiswa Impianmu</h1>
          <p className="text-xl mb-8 text-blue-100">
            Portal informasi beasiswa terlengkap di Indonesia
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/beasiswa"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition text-lg"
            >
              Lihat Semua Beasiswa
            </Link>
            {!isLoggedIn && (
              <Link
                to="/register"
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition text-lg border-2 border-white"
              >
                Daftar Sekarang
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Cari Beasiswa Sesuai Kebutuhan
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Cari nama beasiswa..."
                className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <select className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500">
                <option>Semua Jenis</option>
                <option>Swasta</option>
                <option>Negeri</option>
                <option>Luar Negeri</option>
              </select>
              <button className="bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 transition font-bold">
                Cari
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Beasiswa Populer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Beasiswa Penuh S1',
                icon: '🎓',
                desc: 'Biaya kuliah penuh selama 4 tahun',
              },
              {
                title: 'Tunjangan Bulanan',
                icon: '💰',
                desc: 'Dukungan finansial setiap bulannya',
              },
              {
                title: 'Kesempatan Global',
                icon: '🌍',
                desc: 'Belajar di universitas luar negeri',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Jenis Beasiswa</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/beasiswa?jenis=swasta"
              className="bg-purple-600 text-white p-8 rounded-lg text-center hover:bg-purple-700 transition"
            >
              <div className="text-3xl mb-2">🏢</div>
              <h3 className="text-xl font-bold">Beasiswa Swasta</h3>
              <p className="mt-2 text-purple-100">Dari perusahaan dan yayasan swasta</p>
            </Link>

            <Link
              to="/beasiswa?jenis=negeri"
              className="bg-green-600 text-white p-8 rounded-lg text-center hover:bg-green-700 transition"
            >
              <div className="text-3xl mb-2">🏛️</div>
              <h3 className="text-xl font-bold">Beasiswa Negeri</h3>
              <p className="mt-2 text-green-100">Program pemerintah dan BUMN</p>
            </Link>

            <Link
              to="/beasiswa?jenis=luar_negeri"
              className="bg-blue-600 text-white p-8 rounded-lg text-center hover:bg-blue-700 transition"
            >
              <div className="text-3xl mb-2">🌏</div>
              <h3 className="text-xl font-bold">Luar Negeri</h3>
              <p className="mt-2 text-blue-100">Kesempatan belajar di mancanegara</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2026 SCOLARINFO | Portal Informasi Beasiswa Indonesia</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
