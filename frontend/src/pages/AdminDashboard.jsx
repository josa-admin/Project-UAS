import React, { useState, useEffect } from 'react';
import { beasiswaAPI, notificationAPI } from '../services/api';

const AdminDashboard = () => {
  const [beasiswaList, setBeasiswaList] = useState([]);
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [editingBeasiswa, setEditingBeasiswa] = useState(null);
  const [formData, setFormData] = useState({
    nama: '',
    deskripsi: '',
    syarat: '',
    benefit: '',
    deadline: '',
    kategori: '',
    jenis_beasiswa: 'swasta',
    link_pendaftaran: '',
  });
  const [tab, setTab] = useState('beasiswa'); // 'beasiswa' atau 'notifications'

  useEffect(() => {
    fetchBeasiswa();
  }, []);

  const fetchBeasiswa = async () => {
    try {
      const response = await beasiswaAPI.getAll({});
      setBeasiswaList(response.data);
    } catch (error) {
      console.error('Error fetching beasiswa:', error);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitBeasiswa = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (editingBeasiswa) {
        await beasiswaAPI.update(editingBeasiswa.id, formData);
        setSuccess('Beasiswa berhasil diupdate');
      } else {
        await beasiswaAPI.create(formData);
        setSuccess('Beasiswa berhasil ditambahkan');
      }

      setFormData({
        nama: '',
        deskripsi: '',
        syarat: '',
        benefit: '',
        deadline: '',
        kategori: '',
        jenis_beasiswa: 'swasta',
        link_pendaftaran: '',
      });
      setEditingBeasiswa(null);
      fetchBeasiswa();
    } catch (err) {
      setError(err.response?.data?.message || 'Error');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (beasiswa) => {
    setEditingBeasiswa(beasiswa);
    setFormData({
      nama: beasiswa.nama,
      deskripsi: beasiswa.deskripsi,
      syarat: beasiswa.syarat,
      benefit: beasiswa.benefit,
      deadline: beasiswa.deadline.split('T')[0],
      kategori: beasiswa.kategori,
      jenis_beasiswa: beasiswa.jenis_beasiswa,
      link_pendaftaran: beasiswa.link_pendaftaran,
    });
  };

  const handleDelete = async (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus beasiswa ini?')) {
      try {
        await beasiswaAPI.delete(id);
        setSuccess('Beasiswa berhasil dihapus');
        fetchBeasiswa();
      } catch (err) {
        setError(err.response?.data?.message || 'Error');
      }
    }
  };

  const handleSendNotification = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await notificationAPI.send({
        title: notificationTitle,
        message: notificationMessage,
      });
      setSuccess('Notifikasi berhasil dikirim ke semua user');
      setNotificationTitle('');
      setNotificationMessage('');
    } catch (err) {
      setError(err.response?.data?.message || 'Error');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEditingBeasiswa(null);
    setFormData({
      nama: '',
      deskripsi: '',
      syarat: '',
      benefit: '',
      deadline: '',
      kategori: '',
      jenis_beasiswa: 'swasta',
      link_pendaftaran: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">⚙️ Admin Dashboard</h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setTab('beasiswa')}
            className={`px-6 py-2 rounded font-bold transition ${
              tab === 'beasiswa'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-800 border border-gray-300'
            }`}
          >
            Kelola Beasiswa
          </button>
          <button
            onClick={() => setTab('notifications')}
            className={`px-6 py-2 rounded font-bold transition ${
              tab === 'notifications'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-800 border border-gray-300'
            }`}
          >
            Kirim Notifikasi
          </button>
        </div>

        {/* Success/Error Messages */}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {success}
          </div>
        )}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Beasiswa Tab */}
        {tab === 'beasiswa' && (
          <div>
            {/* Form */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {editingBeasiswa ? '✏️ Edit Beasiswa' : '➕ Tambah Beasiswa Baru'}
              </h2>

              <form onSubmit={handleSubmitBeasiswa} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Nama Beasiswa *
                    </label>
                    <input
                      type="text"
                      name="nama"
                      value={formData.nama}
                      onChange={handleFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Deadline *
                    </label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Jenis Beasiswa *
                    </label>
                    <select
                      name="jenis_beasiswa"
                      value={formData.jenis_beasiswa}
                      onChange={handleFormChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    >
                      <option value="swasta">Swasta</option>
                      <option value="negeri">Negeri</option>
                      <option value="luar_negeri">Luar Negeri</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Kategori
                    </label>
                    <input
                      type="text"
                      name="kategori"
                      value={formData.kategori}
                      onChange={handleFormChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                      placeholder="Akademik, Olahraga, dll"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Deskripsi *
                  </label>
                  <textarea
                    name="deskripsi"
                    value={formData.deskripsi}
                    onChange={handleFormChange}
                    required
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Benefit / Manfaat
                    </label>
                    <textarea
                      name="benefit"
                      value={formData.benefit}
                      onChange={handleFormChange}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Syarat & Ketentuan
                    </label>
                    <textarea
                      name="syarat"
                      value={formData.syarat}
                      onChange={handleFormChange}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Link Pendaftaran
                  </label>
                  <input
                    type="url"
                    name="link_pendaftaran"
                    value={formData.link_pendaftaran}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="https://..."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700 transition disabled:opacity-50"
                  >
                    {loading ? 'Loading...' : editingBeasiswa ? 'Update' : 'Tambah'}
                  </button>
                  {editingBeasiswa && (
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="flex-1 bg-gray-500 text-white px-6 py-2 rounded font-bold hover:bg-gray-600 transition"
                    >
                      Batal
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* List */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Daftar Beasiswa</h2>

              <div className="space-y-4">
                {beasiswaList.map((beasiswa) => (
                  <div
                    key={beasiswa.id}
                    className="p-4 border border-gray-300 rounded hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800">{beasiswa.nama}</h3>
                        <p className="text-sm text-gray-600">
                          Jenis: {beasiswa.jenis_beasiswa} | Deadline:{' '}
                          {new Date(beasiswa.deadline).toLocaleDateString('id-ID')}
                        </p>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                          {beasiswa.deskripsi}
                        </p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => handleEdit(beasiswa)}
                          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(beasiswa.id)}
                          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {tab === 'notifications' && (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🔔 Kirim Notifikasi ke User</h2>

            <form onSubmit={handleSendNotification} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Judul Notifikasi *
                </label>
                <input
                  type="text"
                  value={notificationTitle}
                  onChange={(e) => setNotificationTitle(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Contoh: Update Beasiswa Baru Tersedia"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Pesan Notifikasi *
                </label>
                <textarea
                  value={notificationMessage}
                  onChange={(e) => setNotificationMessage(e.target.value)}
                  required
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Tulis pesan notifikasi yang ingin dikirim ke semua user terdaftar..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded font-bold hover:bg-blue-700 transition disabled:opacity-50"
              >
                {loading ? 'Loading...' : '📬 Kirim Notifikasi ke Semua User'}
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded">
              <p className="text-sm text-gray-700">
                ℹ️ Notifikasi akan dikirim ke semua user terdaftar dan akan muncul di dashboard mereka
                serta di notifikasi bell di header.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
