import React, { useEffect, useState } from 'react';
import { beasiswaAPI } from '../services/api';

const FilterBeasiswa = ({ onFilter }) => {
  const [jenisList] = useState(['swasta', 'negeri', 'luar_negeri']);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    jenis_beasiswa: '',
    kategori: '',
    search: '',
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await beasiswaAPI.getCategories();
        setCategories(response.data || []);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  const handleReset = () => {
    setFilters({ jenis_beasiswa: '', kategori: '', search: '' });
    onFilter({ jenis_beasiswa: '', kategori: '', search: '' });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Filter Beasiswa</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Cari Beasiswa
          </label>
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleFilterChange}
            placeholder="Cari nama beasiswa..."
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Jenis Beasiswa
          </label>
          <select
            name="jenis_beasiswa"
            value={filters.jenis_beasiswa}
            onChange={handleFilterChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option value="">Semua Jenis</option>
            {jenisList.map((jenis) => (
              <option key={jenis} value={jenis}>
                {jenis.charAt(0).toUpperCase() + jenis.slice(1).replace('_', ' ')}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">
            Kategori
          </label>
          <select
            name="kategori"
            value={filters.kategori}
            onChange={handleFilterChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option value="">Semua Kategori</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.nama}>
                {cat.nama}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-700">&nbsp;</label>
          <button
            onClick={handleReset}
            className="w-full bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Reset Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBeasiswa;
