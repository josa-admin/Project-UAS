import React from 'react';

const Artikel = () => {
  const articles = [
    {
      id: 1,
      title: 'Tips Menulis Essay Beasiswa yang Kuat',
      content:
        'Essay beasiswa yang baik harus jelas, fokus, dan menunjukkan motivasi Anda yang kuat. Pastikan untuk menjawab setiap pertanyaan dengan spesifik dan gunakan contoh konkret dari pengalaman Anda.',
      author: 'Admin',
      date: '2026-01-15',
    },
    {
      id: 2,
      title: 'Cara Memilih Beasiswa yang Tepat untuk Anda',
      content:
        'Memilih beasiswa yang tepat memerlukan penelitian yang matang. Pertimbangkan kriteria beasiswa, benefit yang ditawarkan, dan apakah sesuai dengan tujuan akademik Anda.',
      author: 'Admin',
      date: '2026-01-10',
    },
    {
      id: 3,
      title: 'Dokumen Penting yang Harus Disiapkan',
      content:
        'Sebelum mendaftar beasiswa, pastikan Anda sudah menyiapkan dokumen-dokumen penting seperti rapor, sertifikat, surat rekomendasi, dan dokumen identitas.',
      author: 'Admin',
      date: '2026-01-05',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">📚 Artikel & Tips</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.content}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>👤 {article.author}</span>
                <span>📅 {new Date(article.date).toLocaleDateString('id-ID')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artikel;
