import pool from './database.js';

async function cekKoneksi() {
  try {
    await pool.query('SELECT 1');
    console.log('✅ Database SUDAH tersambung');
  } catch (error) {
    console.error('❌ Database BELUM tersambung');
    console.error(error.message);
  }
}

cekKoneksi();
