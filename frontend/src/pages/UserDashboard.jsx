import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';

const UserDashboard = () => {
  const { user } = useAuth();
  const { notifications, markAsRead } = useNotification();
  const [stats, setStats] = useState({
    totalNotifications: 0,
    unreadNotifications: 0,
  });

  useEffect(() => {
    setStats({
      totalNotifications: notifications.length,
      unreadNotifications: notifications.filter((n) => !n.is_read).length,
    });
  }, [notifications]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">📊 Dashboard User</h1>

        {/* Profile Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-700 mb-2">👤 Profil</h3>
            <p className="text-2xl font-bold text-blue-600">{user?.name}</p>
            <p className="text-gray-600">{user?.email}</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-700 mb-2">📬 Total Notifikasi</h3>
            <p className="text-4xl font-bold text-green-600">{stats.totalNotifications}</p>
            <p className="text-gray-600">Semua notifikasi</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-700 mb-2">🔔 Belum Dibaca</h3>
            <p className="text-4xl font-bold text-red-600">{stats.unreadNotifications}</p>
            <p className="text-gray-600">Notifikasi belum dibaca</p>
          </div>
        </div>

        {/* Notifications List */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">📬 Notifikasi Anda</h2>

          {notifications.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">Tidak ada notifikasi</p>
            </div>
          ) : (
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-6 rounded-lg border-l-4 transition cursor-pointer ${
                    !notification.is_read
                      ? 'bg-blue-50 border-blue-500'
                      : 'bg-gray-50 border-gray-300'
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {notification.title}
                      </h3>
                      <p className="text-gray-700 mb-2">{notification.message}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">
                          {new Date(notification.created_at).toLocaleDateString('id-ID', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                        {!notification.is_read && (
                          <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                            Baru
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
