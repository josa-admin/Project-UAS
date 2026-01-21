# 🚀 PANDUAN INSTALASI LENGKAP

## Prasyarat
- Node.js (v14+)
- npm atau yarn
- MySQL Server
- Git (optional)

---

## STEP 1: Setup Backend

### 1.1 Install MySQL
1. Download & install MySQL dari https://www.mysql.com/downloads/
2. Jalankan MySQL Server
3. Buka MySQL Console (Command Prompt / Terminal)

### 1.2 Setup Database
```bash
# Jalankan script database
mysql -u root -p < backend/config/database.sql
```

Atau manual:
1. Buka phpMyAdmin atau MySQL Workbench
2. Copy-paste isi dari `backend/config/database.sql`
3. Execute

### 1.3 Install Backend Dependencies
```bash
cd backend
npm install
```

### 1.4 Setup .env File
```bash
# Edit backend/.env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=beasiswa_db
JWT_SECRET=beasiswa_secret_key_123456
NODE_ENV=development
```

### 1.5 Test Backend
```bash
npm run dev
```

Output yang benar:
```
Server running on port 5000
```

---

## STEP 2: Setup Frontend

### 2.1 Install Frontend Dependencies
```bash
cd frontend
npm install
```

### 2.2 Setup .env.local File
```bash
# Buat file .env.local di root frontend/
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

### 2.3 Install Tailwind CSS
```bash
# Sudah ada di package.json, cukup npm install
npm install
```

### 2.4 Test Frontend
```bash
npm run dev
```

Output yang benar:
```
VITE v4.5.0  ready in XXX ms

➜  Local:   http://localhost:3000/
```

---

## STEP 3: Testing

### 3.1 Akses Website
1. Buka browser
2. Go to: http://localhost:3000

### 3.2 Test Register
1. Klik "Register"
2. Isi form dengan data baru
3. Submit

### 3.3 Test Login
1. Klik "Login"
2. Gunakan credentials:
   - Admin: admin@beasiswa.com / password
   - User: john@example.com / password

### 3.4 Test Admin Dashboard
1. Login sebagai admin
2. Klik "Admin Dashboard" di menu
3. Coba tambah/edit/hapus beasiswa
4. Coba kirim notifikasi

### 3.5 Test User Dashboard
1. Login sebagai user
2. Klik "Dashboard" di menu
3. Lihat notifikasi yang diterima

---

## TROUBLESHOOTING

### Error: "Cannot find module 'express'"
```bash
cd backend
npm install
```

### Error: "Port 5000 already in use"
```bash
# Kill process di port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Atau ubah PORT di .env
PORT=5001
```

### Error: "Cannot connect to database"
1. Pastikan MySQL running
2. Check credentials di .env
3. Pastikan database 'beasiswa_db' sudah dibuat

### Error: "CORS error"
1. Pastikan backend running di port 5000
2. Pastikan frontend running di port 3000
3. Check VITE_API_URL di .env.local

### Notifikasi tidak muncul
1. Login ulang
2. Kirim notifikasi dari admin dashboard
3. Check console browser (F12)

---

## 🎯 Next Steps

### Development
```bash
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend
cd frontend && npm run dev
```

### Production Build
```bash
# Frontend
cd frontend
npm run build

# Deploy hasil di folder 'dist'
```

---

## 📚 Resources

- Express.js Docs: https://expressjs.com
- React Docs: https://react.dev
- MySQL Docs: https://dev.mysql.com/doc
- Tailwind CSS: https://tailwindcss.com

---

## ✅ Checklist Setup

- [ ] MySQL Server installed & running
- [ ] Database 'beasiswa_db' created
- [ ] Backend .env configured
- [ ] Backend dependencies installed
- [ ] Backend running at port 5000
- [ ] Frontend .env.local configured
- [ ] Frontend dependencies installed
- [ ] Frontend running at port 3000
- [ ] Can login as admin
- [ ] Can login as user
- [ ] Can see beasiswa list
- [ ] Can create beasiswa (admin)
- [ ] Can send notification (admin)
- [ ] Notifications appear for user

---

**Selamat! Anda sudah siap menggunakan Beasiswa.Info** 🎉
