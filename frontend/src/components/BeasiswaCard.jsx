import React from 'react';

const BeasiswaCard = ({ beasiswa, onClick }) => {
  const jenisColor = {
    swasta: 'bg-purple-100 text-purple-800',
    negeri: 'bg-green-100 text-green-800',
    luar_negeri: 'bg-blue-100 text-blue-800',
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition cursor-pointer p-6 border-l-4 border-blue-600 h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold text-gray-800 flex-1">{beasiswa.nama}</h3>
        <span className={`px-3 py-1 rounded text-sm font-semibold ${jenisColor[beasiswa.jenis_beasiswa]}`}>
          {beasiswa.jenis_beasiswa.replace('_', ' ')}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-1">
        {beasiswa.deskripsi}
      </p>

      <div className="text-xs text-gray-500 space-y-1">
        <div>📚 Kategori: {beasiswa.kategori || 'Umum'}</div>
        <div>📅 Deadline: {new Date(beasiswa.deadline).toLocaleDateString('id-ID')}</div>
      </div>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full">
        Lihat Detail
      </button>
    </div>
  );
};

export default BeasiswaCard;
