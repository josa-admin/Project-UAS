import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { beasiswaAPI } from '../services/api';

const DetailBeasiswa = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [beasiswa, setBeasiswa] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBeasiswa = async () => {
      try {
        const response = await beasiswaAPI.getById(id);
        setBeasiswa(response.data);
      } catch (error) {
        console.error('Error fetching beasiswa:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBeasiswa();
  }, [id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!beasiswa) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Beasiswa tidak ditemukan</h1>
          <button
            onClick={() => navigate('/beasiswa')}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Kembali ke Daftar Beasiswa
          </button>
        </div>
      </div>
    );
  }

  const jenisColor = {
    swasta: 'bg-purple-100 text-purple-800',
    negeri: 'bg-green-100 text-green-800',
    luar_negeri: 'bg-blue-100 text-blue-800',
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate('/beasiswa')}
          className="mb-4 text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          ← Kembali ke Daftar Beasiswa
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">{beasiswa.nama}</h1>
              <p className="text-gray-600">Kategori: {beasiswa.kategori || 'Umum'}</p>
            </div>
            <span className={`px-4 py-2 rounded text-lg font-semibold ${jenisColor[beasiswa.jenis_beasiswa]}`}>
              {beasiswa.jenis_beasiswa.replace('_', ' ').toUpperCase()}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-blue-50 rounded-lg">
            <div>
              <h3 className="font-bold text-gray-700 mb-2">📅 Deadline</h3>
              <p className="text-xl text-blue-600 font-semibold">
                {new Date(beasiswa.deadline).toLocaleDateString('id-ID', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-2">🎓 Jenis Beasiswa</h3>
              <p className="text-lg text-gray-700 capitalize">
                {beasiswa.jenis_beasiswa.replace('_', ' ')}
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-2">🔗 Link Pendaftaran</h3>
              <a
                href={beasiswa.link_pendaftaran}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline break-all"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">📖 Deskripsi</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {beasiswa.deskripsi}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">💰 Benefit / Manfaat</h2>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {beasiswa.benefit || 'Belum ada informasi benefit'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">✅ Syarat & Ketentuan</h2>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {beasiswa.syarat || 'Belum ada informasi syarat'}
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-3">⏱️ Timeline</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Pendaftaran dibuka: Segera</li>
              <li>• Deadline pendaftaran: {new Date(beasiswa.deadline).toLocaleDateString('id-ID')}</li>
              <li>• Verifikasi dokumen: 2-4 minggu setelah deadline</li>
              <li>• Pengumuman hasil: Sesuai jadwal penyedia beasiswa</li>
            </ul>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href={beasiswa.link_pendaftaran}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition text-center"
            >
              🔗 Daftar Beasiswa Ini
            </a>
            <button
              onClick={() => navigate('/beasiswa')}
              className="flex-1 bg-gray-400 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-500 transition"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBeasiswa;
