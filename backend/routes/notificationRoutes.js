import express from 'express';
import {
  getNotifications,
  markNotificationAsRead,
  sendNotificationToUsers,
  getUnreadCount,
} from '../controllers/notificationController.js';
import { authMiddleware, adminMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authMiddleware, getNotifications);
router.get('/unread/count', authMiddleware, getUnreadCount);
router.put('/:id/read', authMiddleware, markNotificationAsRead);
router.post('/send', authMiddleware, adminMiddleware, sendNotificationToUsers);

export default router;
