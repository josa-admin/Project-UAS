import React from 'react';

const Tentang = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">ℹ️ Tentang Kami</h1>

        <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🎯 Visi & Misi</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Beasiswa.Info adalah portal informasi beasiswa terpercaya yang menyediakan informasi lengkap
            tentang peluang beasiswa dari berbagai sumber di Indonesia. Kami berkomitmen untuk membantu
            calon penerima beasiswa menemukan peluang terbaik sesuai dengan kebutuhan dan kemampuan
            mereka.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">💡 Tentang Platform Kami</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Platform kami menyediakan:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Informasi lengkap tentang berbagai jenis beasiswa (Swasta, Negeri, Luar Negeri)</li>
            <li>Filter yang memudahkan pencarian beasiswa sesuai kriteria Anda</li>
            <li>Notifikasi real-time untuk update beasiswa terbaru</li>
            <li>Dashboard user untuk mengelola informasi beasiswa yang Anda minati</li>
            <li>Artikel dan tips berguna tentang cara mendapatkan beasiswa</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">📞 Hubungi Kami</h2>
          <p className="text-gray-700 mb-2">Email: SCOLARINFO@gmail.com</p>
          <p className="text-gray-700 mb-2">Telepon: +62 856-4325-9238</p>
          <p className="text-gray-700">Alamat: Yogyakarta, Indonesia</p>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
