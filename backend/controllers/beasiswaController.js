import pool from '../config/database.js';

export const getAllBeasiswa = async (req, res) => {
  try {
    const { jenis_beasiswa, kategori, search } = req.query;
    let query = 'SELECT * FROM beasiswa WHERE 1=1';
    const params = [];

    if (jenis_beasiswa) {
      query += ' AND jenis_beasiswa = ?';
      params.push(jenis_beasiswa);
    }

    if (kategori) {
      query += ' AND kategori = ?';
      params.push(kategori);
    }

    if (search) {
      query += ' AND nama LIKE ?';
      params.push(`%${search}%`);
    }

    query += ' ORDER BY created_at DESC';

    const [beasiswa] = await pool.query(query, params);
    res.json(beasiswa);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getBeasiswaById = async (req, res) => {
  try {
    const { id } = req.params;
    const [beasiswa] = await pool.query('SELECT * FROM beasiswa WHERE id = ?', [id]);

    if (beasiswa.length === 0) {
      return res.status(404).json({ message: 'Beasiswa tidak ditemukan' });
    }

    res.json(beasiswa[0]);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const createBeasiswa = async (req, res) => {
  try {
    const { nama, deskripsi, syarat, benefit, deadline, kategori, jenis_beasiswa, link_pendaftaran } = req.body;

    if (!nama || !deskripsi || !deadline || !jenis_beasiswa) {
      return res.status(400).json({ message: 'Nama, deskripsi, deadline, dan jenis beasiswa harus diisi' });
    }

    await pool.query(
      'INSERT INTO beasiswa (nama, deskripsi, syarat, benefit, deadline, kategori, jenis_beasiswa, link_pendaftaran) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [nama, deskripsi, syarat, benefit, deadline, kategori, jenis_beasiswa, link_pendaftaran]
    );

    res.status(201).json({ message: 'Beasiswa berhasil dibuat' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateBeasiswa = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama, deskripsi, syarat, benefit, deadline, kategori, jenis_beasiswa, link_pendaftaran } = req.body;

    const [existingBeasiswa] = await pool.query('SELECT id FROM beasiswa WHERE id = ?', [id]);
    if (existingBeasiswa.length === 0) {
      return res.status(404).json({ message: 'Beasiswa tidak ditemukan' });
    }

    await pool.query(
      'UPDATE beasiswa SET nama = ?, deskripsi = ?, syarat = ?, benefit = ?, deadline = ?, kategori = ?, jenis_beasiswa = ?, link_pendaftaran = ? WHERE id = ?',
      [nama, deskripsi, syarat, benefit, deadline, kategori, jenis_beasiswa, link_pendaftaran, id]
    );

    res.json({ message: 'Beasiswa berhasil diupdate' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteBeasiswa = async (req, res) => {
  try {
    const { id } = req.params;

    const [existingBeasiswa] = await pool.query('SELECT id FROM beasiswa WHERE id = ?', [id]);
    if (existingBeasiswa.length === 0) {
      return res.status(404).json({ message: 'Beasiswa tidak ditemukan' });
    }

    await pool.query('DELETE FROM beasiswa WHERE id = ?', [id]);
    res.json({ message: 'Beasiswa berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getCategories = async (req, res) => {
  try {
    const [categories] = await pool.query('SELECT * FROM kategori');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
