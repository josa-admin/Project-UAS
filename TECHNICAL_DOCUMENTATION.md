# 📖 DOKUMENTASI TEKNIS

## Penjelasan Setiap Komponen

---

## BACKEND

### 1. **server.js** (Entry Point)
- Setup Express server
- Konfigurasi CORS
- Konfigurasi Socket.io
- Routing setup
- Server listening

**Fitur Utama:**
```javascript
- Express server initialization
- CORS configuration for frontend
- Socket.io real-time connection
- Routes mounting
```

---

### 2. **middleware/auth.js** (Authentication)
Middleware untuk verifikasi token JWT

**Fungsi:**
- `authMiddleware()` - Verifikasi JWT token
- `adminMiddleware()` - Check role admin

**Penggunaan:**
```javascript
router.post('/api/beasiswa', authMiddleware, adminMiddleware, createBeasiswa)
```

---

### 3. **controllers/** (Business Logic)

#### **authController.js**
- `register()` - Register user baru
- `login()` - Login & return JWT token
- `getProfile()` - Get profile user

**Password Security:**
- Hash password menggunakan bcryptjs
- Compare saat login

---

#### **beasiswaController.js**
- `getAllBeasiswa()` - Get semua dengan filter
- `getBeasiswaById()` - Get detail beasiswa
- `createBeasiswa()` - Tambah beasiswa (admin)
- `updateBeasiswa()` - Edit beasiswa (admin)
- `deleteBeasiswa()` - Hapus beasiswa (admin)
- `getCategories()` - Get list kategori

**Filter Query:**
```javascript
?jenis_beasiswa=swasta&kategori=akademik&search=beasiswa
```

---

#### **notificationController.js**
- `getNotifications()` - Get notifikasi user
- `markNotificationAsRead()` - Tandai sudah dibaca
- `sendNotificationToUsers()` - Kirim ke semua user (admin)
- `getUnreadCount()` - Count unread notifications

---

### 4. **routes/** (API Endpoints)

Struktur routing:
```
/api/auth
/api/beasiswa
/api/notifications
```

Semua protected routes memerlukan JWT token di header:
```
Authorization: Bearer {token}
```

---

### 5. **config/database.js** (Database Connection)
MySQL connection pool configuration

**Features:**
- Connection pooling
- Async/await support
- Error handling

---

## FRONTEND

### 1. **context/AuthContext.jsx** (Auth State Management)
Global authentication state menggunakan React Context

**Exports:**
- `AuthProvider` - Wrapper component
- `useAuth()` - Hook untuk akses auth state

**State:**
```javascript
{
  user: { id, name, email, role },
  token: string,
  isLoggedIn: boolean,
  loading: boolean
}
```

**Methods:**
- `login(email, password)` - Login user
- `register(name, email, password)` - Register
- `logout()` - Logout user

**Persistence:**
- Token & user disimpan di localStorage
- Auto-restore saat page reload

---

### 2. **context/NotificationContext.jsx** (Notification State)
State management untuk notifikasi

**State:**
```javascript
{
  notifications: [],
  unreadCount: number
}
```

**Methods:**
- `fetchNotifications()` - Load notifikasi dari API
- `markAsRead(id)` - Tandai dibaca
- `addNotification(notification)` - Tambah notifikasi baru

**Auto Refresh:**
- Fetch setiap 5 detik
- Real-time dengan Socket.io (optional)

---

### 3. **services/api.js** (API Client)
Axios instance dengan auto JWT attachment

**Modules:**
- `authAPI` - Auth endpoints
- `beasiswaAPI` - Beasiswa endpoints
- `notificationAPI` - Notification endpoints

**Interceptor:**
```javascript
// Otomatis attach token di setiap request
Authorization: Bearer {token}
```

---

### 4. **components/** (Reusable Components)

#### **Header.jsx**
- Navigation bar
- Search & filter
- User menu
- Notification bell

#### **Footer.jsx**
- Footer dengan links
- Contact info
- Copyright

#### **NotificationBell.jsx**
- Dropdown notifikasi
- Badge unread count
- Mark as read onclick
- Real-time updates

#### **BeasiswaCard.jsx**
- Card component untuk beasiswa
- Jenis beasiswa color coding
- Click handler untuk detail

#### **FilterBeasiswa.jsx**
- Filter form
- Real-time filtering
- Category dropdown
- Reset button

#### **ProtectedRoute.jsx**
- Route protection
- Role-based access
- Auto redirect ke login

---

### 5. **pages/** (Page Components)

#### **Home.jsx**
- Hero section
- Featured beasiswa
- Filter buttons
- Call-to-action

#### **Beasiswa.jsx**
- Daftar beasiswa dengan grid
- Filter integration
- Loading states

#### **DetailBeasiswa.jsx**
- Full beasiswa details
- Deskripsi, syarat, benefit
- Timeline info
- External link button

#### **Login.jsx**
- Email & password form
- Error handling
- Redirect ke home jika sudah login
- Demo credentials display

#### **Register.jsx**
- Name, email, password form
- Password confirmation
- Form validation
- Error messages

#### **UserDashboard.jsx**
- Profile info
- Notifikasi list
- Stats cards
- Click to mark as read

#### **AdminDashboard.jsx**
- Two tabs: Beasiswa & Notifications
- Form add/edit beasiswa
- CRUD buttons
- Notification form
- Success/error messages

#### **Artikel.jsx**
- List artikel beasiswa
- Tips & tricks
- Author & date info

#### **Tentang.jsx**
- About platform
- Visi & misi
- Contact info

---

## DATA FLOW

### 1. **Login Flow**
```
User Input Email/Password
    ↓
authAPI.login(email, password)
    ↓
Backend: /api/auth/login
    ↓
Return JWT token
    ↓
Save token & user ke localStorage
    ↓
Update AuthContext
    ↓
Redirect ke home
```

### 2. **Fetch Beasiswa Flow**
```
User klik menu Beasiswa
    ↓
Component Beasiswa mount
    ↓
beasiswaAPI.getAll(filters)
    ↓
Backend: /api/beasiswa?filter=...
    ↓
Return beasiswa list
    ↓
Set state & render grid
```

### 3. **Admin Create Beasiswa**
```
Admin fill form
    ↓
Click submit
    ↓
beasiswaAPI.create(data)
    ↓
Backend: POST /api/beasiswa (with auth)
    ↓
Check admin role
    ↓
Insert to database
    ↓
Return success
    ↓
Refresh beasiswa list
    ↓
Show success message
```

### 4. **Notification Flow**
```
Admin kirim notifikasi
    ↓
notificationAPI.send(title, message)
    ↓
Backend: POST /api/notifications/send (admin only)
    ↓
Insert ke DB untuk semua user
    ↓
Socket.io emit ke semua connected clients
    ↓
User terima notifikasi
    ↓
Muncul di NotificationBell dropdown
    ↓
User click mark as read
    ↓
Update is_read flag di DB
```

---

## SECURITY FEATURES

### 1. **JWT Authentication**
- Token generated saat login
- Token berlaku 7 hari
- Verifikasi di setiap protected route
- Secret key di .env

### 2. **Password Hashing**
- Bcrypt dengan 10 salt rounds
- Never store plain password
- Compare hash saat login

### 3. **Role-Based Access**
- Admin role check di middleware
- User hanya akses user routes
- Protected routes redirect jika unauthorized

### 4. **CORS Protection**
- Only allow frontend origin
- Prevent cross-origin attacks

---

## PERFORMANCE OPTIMIZATION

### Frontend
1. **Code Splitting** - React Router lazy loading
2. **Caching** - LocalStorage untuk token & user
3. **Debouncing** - Filter real-time
4. **Lazy Loading** - Images & components
5. **Tailwind** - Minimal CSS bundle

### Backend
1. **Connection Pooling** - MySQL pool reuse
2. **Query Optimization** - Indexed columns
3. **Middleware Ordering** - Auth first
4. **Error Handling** - Try-catch all async

---

## TESTING

### Manual Testing Checklist
- [ ] Register new user
- [ ] Login dengan credentials valid
- [ ] Login dengan invalid credentials
- [ ] Filter beasiswa by type
- [ ] Filter beasiswa by category
- [ ] Search beasiswa
- [ ] View detail beasiswa
- [ ] Admin create beasiswa
- [ ] Admin edit beasiswa
- [ ] Admin delete beasiswa
- [ ] Admin send notification
- [ ] User receive notification
- [ ] Mark notification as read
- [ ] Logout & login lagi
- [ ] Check role-based access

---

## DEPLOYMENT

### Frontend (Vercel)
```bash
npm run build
# Deploy folder 'dist' ke Vercel
```

### Backend (Heroku / Railway)
```bash
git push heroku main
# Set environment variables di platform
```

---

**Dokumentasi Selesai!** 📚
