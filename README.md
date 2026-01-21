# 🎓 Beasiswa.Info - Website Informasi Beasiswa

Website modern berbasis React JS untuk informasi beasiswa dengan fitur complete.

## ✨ Fitur Utama

### 👥 User Roles
- **Admin**: Mengelola beasiswa, mengirim notifikasi
- **User**: Melihat beasiswa, menerima notifikasi

### 📋 Fitur Beasiswa
- ✅ Daftar beasiswa dengan filter real-time
- ✅ Filter berdasarkan jenis (Swasta/Negeri/Luar Negeri)
- ✅ Filter berdasarkan kategori
- ✅ Detail beasiswa lengkap
- ✅ Search beasiswa

### 🔔 Sistem Notifikasi
- ✅ Notifikasi real-time untuk user
- ✅ Badge unread count
- ✅ Dropdown notifikasi
- ✅ Mark as read functionality

### 🔐 Autentikasi
- ✅ Register user
- ✅ Login dengan JWT
- ✅ Role-based access control
- ✅ Protected routes

### 📱 Dashboard
- ✅ User dashboard dengan notifikasi
- ✅ Admin dashboard untuk CRUD beasiswa
- ✅ Admin dapat mengirim notifikasi ke user

---

## 🛠️ Teknologi

**Frontend:**
- React 18
- React Router DOM
- Axios
- Tailwind CSS
- Socket.io Client
- Vite

**Backend:**
- Node.js + Express
- MySQL
- JWT Authentication
- Socket.io
- Bcrypt

---

## 📂 Struktur Folder

```
Project UAS/
├── backend/
│   ├── config/
│   │   ├── database.js
│   │   └── database.sql
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── beasiswaController.js
│   │   └── notificationController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── beasiswaRoutes.js
│   │   └── notificationRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx
    │   │   ├── Footer.jsx
    │   │   ├── NotificationBell.jsx
    │   │   ├── BeasiswaCard.jsx
    │   │   ├── FilterBeasiswa.jsx
    │   │   └── ProtectedRoute.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Beasiswa.jsx
    │   │   ├── DetailBeasiswa.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── UserDashboard.jsx
    │   │   ├── AdminDashboard.jsx
    │   │   ├── Artikel.jsx
    │   │   └── Tentang.jsx
    │   ├── context/
    │   │   ├── AuthContext.jsx
    │   │   └── NotificationContext.jsx
    │   ├── services/
    │   │   ├── api.js
    │   │   └── socket.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── index.css
    │   └── pages/Register.jsx
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── package.json
    └── .env.example
```

---

## 🚀 Instalasi & Setup

### Backend Setup

1. **Install dependencies**
```bash
cd backend
npm install
```

2. **Setup Database**
   - Buka MySQL command line atau tools (phpMyAdmin)
   - Jalankan script dari `backend/config/database.sql`

3. **Konfigurasi .env**
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=beasiswa_db
JWT_SECRET=your_jwt_secret_key_change_this
NODE_ENV=development
```

4. **Jalankan Backend**
```bash
npm run dev
```

Backend akan berjalan di `http://localhost:5000`

### Frontend Setup

1. **Install dependencies**
```bash
cd frontend
npm install
```

2. **Konfigurasi .env.local**
```
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

3. **Jalankan Frontend**
```bash
npm run dev
```

Frontend akan berjalan di `http://localhost:3000`

---

## 🔑 Demo Credentials

### Admin Account
- Email: `admin@beasiswa.com`
- Password: `password`

### User Account
- Email: `john@example.com`
- Password: `password`

- Email: `jane@example.com`
- Password: `password`

---

## 📋 Database Schema

### users
```sql
- id (INT, PK)
- name (VARCHAR)
- email (VARCHAR, UNIQUE)
- password (VARCHAR)
- role (ENUM: 'admin', 'user')
- created_at, updated_at
```

### beasiswa
```sql
- id (INT, PK)
- nama (VARCHAR)
- deskripsi (LONGTEXT)
- syarat (LONGTEXT)
- benefit (LONGTEXT)
- deadline (DATE)
- kategori (VARCHAR)
- jenis_beasiswa (ENUM: 'swasta', 'negeri', 'luar_negeri')
- link_pendaftaran (VARCHAR)
- created_at, updated_at
```

### notifications
```sql
- id (INT, PK)
- user_id (INT, FK)
- title (VARCHAR)
- message (LONGTEXT)
- is_read (BOOLEAN)
- created_at
```

### kategori
```sql
- id (INT, PK)
- nama (VARCHAR, UNIQUE)
- created_at
```

---

## 🎨 Fitur UI/UX

### Design
- ✅ Modern & clean interface
- ✅ Responsive design (mobile-friendly)
- ✅ Color scheme: Blue & White
- ✅ Smooth transitions & animations
- ✅ Interactive buttons & hover effects

### Halaman
1. **Home** - Hero section, search, featured, filter buttons
2. **Daftar Beasiswa** - List dengan filter real-time
3. **Detail Beasiswa** - Informasi lengkap beasiswa
4. **Artikel** - Tips dan artikel beasiswa
5. **Tentang** - Informasi tentang platform
6. **Register** - Form pendaftaran user
7. **Login** - Form login user
8. **User Dashboard** - Profil dan notifikasi user
9. **Admin Dashboard** - CRUD beasiswa & kirim notifikasi

---

## 🔌 API Endpoints

### Auth
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Beasiswa
- `GET /api/beasiswa` - Get all beasiswa (with filters)
- `GET /api/beasiswa/:id` - Get beasiswa by ID
- `GET /api/beasiswa/categories` - Get categories
- `POST /api/beasiswa` - Create beasiswa (admin only)
- `PUT /api/beasiswa/:id` - Update beasiswa (admin only)
- `DELETE /api/beasiswa/:id` - Delete beasiswa (admin only)

### Notifications
- `GET /api/notifications` - Get user notifications (protected)
- `GET /api/notifications/unread/count` - Get unread count
- `PUT /api/notifications/:id/read` - Mark as read
- `POST /api/notifications/send` - Send notification (admin only)

---

## 🎯 Fitur yang Bisa Dikembangkan

1. Email verification saat register
2. Password reset functionality
3. File upload untuk dokumen pendaftaran
4. Google OAuth integration
5. Admin analytics dashboard
6. Email notifications
7. Bookmarking/favoriting beasiswa
8. User review & rating
9. Chat/contact form
10. Payment integration untuk subscription

---

## 🐛 Troubleshooting

### Database Connection Error
- Pastikan MySQL service berjalan
- Check konfigurasi .env di backend
- Pastikan database sudah dibuat

### CORS Error
- Ubah origin di `server.js` Socket.io configuration
- Pastikan frontend & backend berjalan di port yang benar

### Token Expired
- Login ulang untuk mendapatkan token baru
- Token berlaku 7 hari

---

## 📞 Kontak & Support

Email: info@beasiswa.info
Telepon: +62 (0) 123-4567-890

---

## 📄 License

MIT License - Bebas digunakan untuk project pribadi maupun komersial

---

## 👨‍💻 Dibuat Oleh

Senior Fullstack Developer
January 2024

**Selamat menggunakan Beasiswa.Info!** 🎓✨
