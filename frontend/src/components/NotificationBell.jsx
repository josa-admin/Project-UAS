import React, { useState } from 'react';
import { useNotification } from '../context/NotificationContext';

const NotificationBell = () => {
  const { notifications, unreadCount, markAsRead } = useNotification();
  const [isOpen, setIsOpen] = useState(false);

  const handleMarkAsRead = (notificationId) => {
    markAsRead(notificationId);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative hover:text-blue-100 transition"
      >
        🔔
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white text-gray-800 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          <div className="bg-blue-600 text-white p-4 font-bold">
            Notifikasi ({unreadCount} belum dibaca)
          </div>

          {notifications.length === 0 ? (
            <div className="p-4 text-center text-gray-500">Tidak ada notifikasi</div>
          ) : (
            <div>
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b hover:bg-blue-50 cursor-pointer transition ${
                    !notification.is_read ? 'bg-blue-100' : ''
                  }`}
                  onClick={() => handleMarkAsRead(notification.id)}
                >
                  <div className="font-semibold text-sm">{notification.title}</div>
                  <div className="text-sm text-gray-600 mt-1">{notification.message}</div>
                  <div className="text-xs text-gray-400 mt-2">
                    {new Date(notification.created_at).toLocaleDateString('id-ID')}
                  </div>
                  {!notification.is_read && (
                    <div className="text-xs text-blue-600 font-semibold mt-1">Belum dibaca</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
