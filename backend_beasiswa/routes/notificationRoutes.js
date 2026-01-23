const express = require('express');
const {
  getNotifications,
  markNotificationAsRead,
  sendNotificationToUsers,
  getUnreadCount,
} = require('../controllers/notificationController');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

const router = express.Router();

router.get('/', authMiddleware, getNotifications);
router.get('/unread/count', authMiddleware, getUnreadCount);
router.put('/:id/read', authMiddleware, markNotificationAsRead);
router.post('/send', authMiddleware, adminMiddleware, sendNotificationToUsers);

module.exports = router;
