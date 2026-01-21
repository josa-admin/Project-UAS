# 📂 COMPLETE PROJECT STRUCTURE

```
Project UAS/
│
├── 📄 README.md
├── 📄 INSTALLATION_GUIDE.md
├── 📄 QUICK_START_GUIDE.md
├── 📄 TECHNICAL_DOCUMENTATION.md
├── 📄 FILES_CHECKLIST.md
├── 📄 TIPS_AND_TRICKS.md
├── 📄 PROJECT_SUMMARY.md
│
├── 🎯 backend/
│   ├── 📄 package.json
│   ├── 📄 .env
│   ├── 📄 server.js
│   │
│   ├── 📁 config/
│   │   ├── 📄 database.js
│   │   └── 📄 database.sql
│   │
│   ├── 📁 middleware/
│   │   └── 📄 auth.js
│   │
│   ├── 📁 controllers/
│   │   ├── 📄 authController.js
│   │   ├── 📄 beasiswaController.js
│   │   └── 📄 notificationController.js
│   │
│   └── 📁 routes/
│       ├── 📄 authRoutes.js
│       ├── 📄 beasiswaRoutes.js
│       └── 📄 notificationRoutes.js
│
└── 🎨 frontend/
    ├── 📄 package.json
    ├── 📄 .env.example
    ├── 📄 .gitignore
    ├── 📄 index.html
    ├── 📄 vite.config.js
    ├── 📄 tailwind.config.js
    ├── 📄 postcss.config.js
    │
    └── 📁 src/
        ├── 📄 main.jsx
        ├── 📄 App.jsx
        ├── 📄 index.css
        │
        ├── 📁 services/
        │   ├── 📄 api.js
        │   └── 📄 socket.js
        │
        ├── 📁 context/
        │   ├── 📄 AuthContext.jsx
        │   └── 📄 NotificationContext.jsx
        │
        ├── 📁 components/
        │   ├── 📄 Header.jsx
        │   ├── 📄 Footer.jsx
        │   ├── 📄 NotificationBell.jsx
        │   ├── 📄 BeasiswaCard.jsx
        │   ├── 📄 FilterBeasiswa.jsx
        │   └── 📄 ProtectedRoute.jsx
        │
        └── 📁 pages/
            ├── 📄 Home.jsx
            ├── 📄 Beasiswa.jsx
            ├── 📄 DetailBeasiswa.jsx
            ├── 📄 Login.jsx
            ├── 📄 Register.jsx
            ├── 📄 UserDashboard.jsx
            ├── 📄 AdminDashboard.jsx
            ├── 📄 Artikel.jsx
            └── 📄 Tentang.jsx
```

---

## 📊 File Count by Category

```
Backend:
  ├── Config Files        : 2  (database.js, database.sql)
  ├── Controllers         : 3  (auth, beasiswa, notification)
  ├── Routes              : 3  (auth, beasiswa, notification)
  ├── Middleware          : 1  (auth.js)
  ├── Root Files          : 3  (server.js, package.json, .env)
  └── TOTAL BACKEND       : 12

Frontend:
  ├── Config Files        : 7  (vite, tailwind, postcss, package.json, etc)
  ├── Main Files          : 3  (App.jsx, main.jsx, index.css)
  ├── Services            : 2  (api.js, socket.js)
  ├── Context             : 2  (AuthContext, NotificationContext)
  ├── Components          : 6  (Header, Footer, Bell, Card, Filter, Protected)
  ├── Pages               : 9  (Home, Beasiswa, Detail, Login, Register, etc)
  ├── Root Files          : 1  (index.html)
  └── TOTAL FRONTEND      : 26

Documentation:
  ├── README.md
  ├── INSTALLATION_GUIDE.md
  ├── QUICK_START_GUIDE.md
  ├── TECHNICAL_DOCUMENTATION.md
  ├── FILES_CHECKLIST.md
  ├── TIPS_AND_TRICKS.md
  ├── PROJECT_SUMMARY.md
  └── TOTAL DOCUMENTATION: 7

═══════════════════════════════════
TOTAL FILES: 45 files
TOTAL LINES: ~6700+ lines of code
═══════════════════════════════════
```

---

## 🔗 Import Flow

### Backend Routes Structure
```
server.js
├── /api/auth routes
│   ├── POST   /register
│   ├── POST   /login
│   └── GET    /profile (protected)
├── /api/beasiswa routes
│   ├── GET    / (with filters)
│   ├── GET    /:id
│   ├── POST   / (admin)
│   ├── PUT    /:id (admin)
│   ├── DELETE /:id (admin)
│   └── GET    /categories
└── /api/notifications routes
    ├── GET    / (protected)
    ├── GET    /unread/count
    ├── PUT    /:id/read
    └── POST   /send (admin)
```

### Frontend Routes Structure
```
App.jsx → BrowserRouter
├── / → Home
├── /beasiswa → Beasiswa (list)
├── /beasiswa/:id → DetailBeasiswa
├── /artikel → Artikel
├── /tentang → Tentang
├── /login → Login
├── /register → Register
├── /dashboard → UserDashboard (protected)
└── /admin/dashboard → AdminDashboard (admin only)
```

### Frontend State Management
```
App.jsx
├── AuthProvider
│   ├── AuthContext
│   │   ├── login()
│   │   ├── register()
│   │   ├── logout()
│   │   └── useAuth() hook
│   │
│   └── NotificationProvider
│       ├── NotificationContext
│       │   ├── markAsRead()
│       │   ├── addNotification()
│       │   └── useNotification() hook
│       │
│       └── Components & Pages (have access to both)
```

---

## 🎯 Dependencies Tree

### Backend Dependencies
```
express (4.18.2)
├── body-parser (included)
├── cors (2.8.5)
│   └── vary
├── multer (for file upload)
│
mysql2 (3.6.0)
├── mysql (connection)
└── promise support

jsonwebtoken (9.1.0)
└── token creation/verification

bcryptjs (2.4.3)
└── password hashing

socket.io (4.6.1)
├── ws (websocket)
└── real-time events

dotenv (16.3.1)
└── environment variables

nodemon (3.0.1) - dev only
└── auto-reload
```

### Frontend Dependencies
```
react (18.2.0)
├── react-dom (18.2.0)
│   └── render
├── react-router-dom (6.18.0)
│   └── routing
│
axios (1.6.0)
└── HTTP client

socket.io-client (4.6.1)
└── real-time events

tailwindcss (3.3.5)
├── postcss (8.4.31)
│   └── autoprefixer (10.4.16)
└── styling

vite (4.5.0)
├── build tool
└── dev server

@vitejs/plugin-react (4.0.0)
└── React plugin for Vite
```

---

## 📊 Lines of Code Distribution

```
Backend (1200+ LOC):
├── Controllers        : 400 lines
├── Routes            : 80 lines
├── Middleware        : 30 lines
├── Config            : 50 lines
└── Server.js         : 40 lines

Frontend (2500+ LOC):
├── Pages             : 1200 lines
├── Components        : 700 lines
├── Services          : 100 lines
├── Context           : 250 lines
└── Config/CSS        : 250 lines

Documentation (3000+ LOC):
├── README            : 500 lines
├── Installation      : 400 lines
├── Technical         : 600 lines
├── Quick Start       : 300 lines
├── Tips & Tricks     : 500 lines
├── Summary           : 400 lines
└── Files Checklist   : 300 lines
```

---

## 🗄️ Database Schema

### users table
```
┌─────────────┬─────────────┬──────────┐
│ Column      │ Type        │ Key      │
├─────────────┼─────────────┼──────────┤
│ id          │ INT         │ PRIMARY  │
│ name        │ VARCHAR     │          │
│ email       │ VARCHAR     │ UNIQUE   │
│ password    │ VARCHAR     │          │
│ role        │ ENUM        │          │
│ created_at  │ TIMESTAMP   │          │
│ updated_at  │ TIMESTAMP   │          │
└─────────────┴─────────────┴──────────┘
```

### beasiswa table
```
┌──────────────────┬────────────┬──────────┐
│ Column           │ Type       │ Key      │
├──────────────────┼────────────┼──────────┤
│ id               │ INT        │ PRIMARY  │
│ nama             │ VARCHAR    │          │
│ deskripsi        │ LONGTEXT   │          │
│ syarat           │ LONGTEXT   │          │
│ benefit          │ LONGTEXT   │          │
│ deadline         │ DATE       │          │
│ kategori         │ VARCHAR    │          │
│ jenis_beasiswa   │ ENUM       │          │
│ link_pendaftaran │ VARCHAR    │          │
│ created_at       │ TIMESTAMP  │          │
│ updated_at       │ TIMESTAMP  │          │
└──────────────────┴────────────┴──────────┘
```

### notifications table
```
┌────────────┬────────────┬──────────┐
│ Column     │ Type       │ Key      │
├────────────┼────────────┼──────────┤
│ id         │ INT        │ PRIMARY  │
│ user_id    │ INT        │ FOREIGN  │
│ title      │ VARCHAR    │          │
│ message    │ LONGTEXT   │          │
│ is_read    │ BOOLEAN    │          │
│ created_at │ TIMESTAMP  │          │
└────────────┴────────────┴──────────┘
```

### kategori table
```
┌────────────┬─────────────┬──────────┐
│ Column     │ Type        │ Key      │
├────────────┼─────────────┼──────────┤
│ id         │ INT         │ PRIMARY  │
│ nama       │ VARCHAR     │ UNIQUE   │
│ created_at │ TIMESTAMP   │          │
└────────────┴─────────────┴──────────┘
```

---

## 🔐 Authentication Flow

```
┌─────────────────────────────────────────────────┐
│         User Login/Register Flow                │
└─────────────────────────────────────────────────┘

Frontend (React)
    ↓ User fills form
Register.jsx / Login.jsx
    ↓ Form submission
authAPI.register() / authAPI.login()
    ↓ Axios request
Backend Express
    ↓ Route: POST /api/auth/register | /login
authController.register() / authController.login()
    ↓ Validation & hashing
MySQL Database
    ↓ INSERT / SELECT
JWT Token Generation
    ↓ jwt.sign()
Return {token, user}
    ↓
Frontend Update State
    ↓ localStorage.setItem()
AuthContext updated
    ↓
Protected Routes accessible
    ↓ ProtectedRoute component
Render protected pages
```

---

## 🎨 Component Hierarchy

```
App
├── AuthProvider
│   └── NotificationProvider
│       ├── Header
│       │   ├── Logo (Link)
│       │   ├── Nav Links
│       │   └── NotificationBell
│       │       └── Dropdown notifications
│       │
│       ├── main (Routes)
│       │   ├── Home
│       │   ├── Beasiswa
│       │   │   └── FilterBeasiswa
│       │   │   └── BeasiswaCard[] (grid)
│       │   ├── DetailBeasiswa
│       │   ├── Artikel
│       │   ├── Tentang
│       │   ├── Login
│       │   ├── Register
│       │   ├── UserDashboard
│       │   └── AdminDashboard
│       │
│       └── Footer
```

---

## 📈 Scaling Architecture

```
Current (Single Server):
┌──────────┐     ┌──────────┐     ┌──────────┐
│ Frontend │────→│ Backend  │────→│ MySQL DB │
│ (React)  │     │(Express) │     │          │
└──────────┘     └──────────┘     └──────────┘

Future (Load Balanced):
┌──────────┐     ┌──────────┐     ┌──────────┐
│ Frontend │────→│ Load     │────→│ Backend  │
│ (React)  │     │Balancer  │     │ (Multiple)
└──────────┘     └──────────┘     └──────────┘
                                  └──────────┘
                                   │ Cache   │
                                   │(Redis)  │
                                   └──────────┘
                                      ↓
                                  ┌──────────┐
                                  │MySQL DB  │
                                  │(Replicated)
                                  └──────────┘
```

---

**Project Structure Complete!** ✅
