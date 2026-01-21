import pool from '../config/database.js';

export const getNotifications = async (req, res) => {
  try {
    const userId = req.user.id;
    const [notifications] = await pool.query(
      'SELECT * FROM notifications WHERE user_id = ? ORDER BY created_at DESC',
      [userId]
    );
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const markNotificationAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('UPDATE notifications SET is_read = true WHERE id = ? AND user_id = ?', [
      id,
      req.user.id,
    ]);
    res.json({ message: 'Notifikasi ditandai sebagai sudah dibaca' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const sendNotificationToUsers = async (req, res) => {
  try {
    const { title, message } = req.body;

    if (!title || !message) {
      return res.status(400).json({ message: 'Title dan message harus diisi' });
    }

    const [users] = await pool.query("SELECT id FROM users WHERE role = 'user'");

    for (const user of users) {
      await pool.query('INSERT INTO notifications (user_id, title, message) VALUES (?, ?, ?)', [
        user.id,
        title,
        message,
      ]);
    }

    res.status(201).json({ message: 'Notifikasi berhasil dikirim ke semua user' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getUnreadCount = async (req, res) => {
  try {
    const userId = req.user.id;
    const [result] = await pool.query(
      'SELECT COUNT(*) as count FROM notifications WHERE user_id = ? AND is_read = false',
      [userId]
    );
    res.json({ unreadCount: result[0].count });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
