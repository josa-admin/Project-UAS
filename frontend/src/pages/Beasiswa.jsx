import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterBeasiswa from '../components/FilterBeasiswa';
import BeasiswaCard from '../components/BeasiswaCard';
import { beasiswaAPI } from '../services/api';

const Beasiswa = () => {
  const navigate = useNavigate();
  const [beasiswaList, setBeasiswaList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    jenis_beasiswa: '',
    kategori: '',
    search: '',
  });

  useEffect(() => {
    const fetchBeasiswa = async () => {
      try {
        const response = await beasiswaAPI.getAll(filters);
        setBeasiswaList(response.data);
        setFilteredList(response.data);
      } catch (error) {
        console.error('Error fetching beasiswa:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBeasiswa();
  }, [filters]);

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Daftar Beasiswa</h1>

        <div className="mb-8">
          <FilterBeasiswa onFilter={handleFilter} />
        </div>

        <div className="mb-4 text-gray-600">
          Menampilkan {filteredList.length} beasiswa
        </div>

        {filteredList.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-500 text-lg">Tidak ada beasiswa yang sesuai dengan filter Anda</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredList.map((beasiswa) => (
              <BeasiswaCard
                key={beasiswa.id}
                beasiswa={beasiswa}
                onClick={() => navigate(`/beasiswa/${beasiswa.id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Beasiswa;
