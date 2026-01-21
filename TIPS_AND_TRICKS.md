# 💡 TIPS & TRICKS

## Development Tips

### 1. **Live Reload**
Backend & Frontend keduanya support hot reload
```bash
# Backend otomatis reload pakai nodemon
npm run dev

# Frontend otomatis reload pakai Vite
npm run dev
```

### 2. **Debugging Backend**
```bash
# Add logging
console.log('Debug info:', data);

# Check error di terminal
npm run dev
```

### 3. **Debugging Frontend**
```bash
# Open browser DevTools (F12)
# Check Console tab untuk errors
# Use Network tab untuk check API calls
# Use Application tab untuk check localStorage
```

### 4. **Test API Endpoints**
Gunakan tools:
- **Postman** - GUI API testing
- **Thunder Client** - VS Code extension
- **curl** - Command line

Contoh:
```bash
curl -X GET http://localhost:5000/api/beasiswa \
  -H "Authorization: Bearer {token}"
```

### 5. **Database Inspection**
Pakai MySQL tools:
- **phpMyAdmin** - Web interface
- **MySQL Workbench** - Desktop app
- **VS Code** - Database extension

---

## Common Customizations

### 1. **Mengubah Warna Brand**
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    }
  }
}
```

Atau ubah di components:
```jsx
<div className="bg-blue-600"> // ubah blue-600
```

### 2. **Menambah Category Baru**
1. Edit `database.sql`:
```sql
INSERT INTO kategori (nama) VALUES ('Nama Kategori Baru');
```
2. Re-import database

Atau manual di database:
```sql
INSERT INTO kategori (nama) VALUES ('Entrepreneur'), ('Research');
```

### 3. **Mengubah Logo/Branding**
Edit `Header.jsx`:
```jsx
<Link to="/" className="text-2xl font-bold">
  🎓 Beasiswa.Info  // Ubah text & emoji
</Link>
```

### 4. **Menambah Menu Baru**
1. Edit `Header.jsx` - tambah link
2. Create page baru di `pages/`
3. Add route di `App.jsx`

Contoh:
```jsx
// Header.jsx
<Link to="/faq">FAQ</Link>

// App.jsx
<Route path="/faq" element={<FAQ />} />

// pages/FAQ.jsx
// Create component baru
```

### 5. **Mengubah Email Admin**
Edit `database.sql` dummy data atau database langsung

---

## Performance Tips

### Frontend
1. **Lazy Load Images**
```jsx
<img src={url} loading="lazy" />
```

2. **Memoize Components**
```jsx
export default React.memo(BeasiswaCard);
```

3. **Use useCallback untuk functions**
```jsx
const handleFilter = useCallback(() => {
  // filter logic
}, [dependencies]);
```

### Backend
1. **Add Database Indexes**
```sql
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_beasiswa_type ON beasiswa(jenis_beasiswa);
```

2. **Use Connection Pooling** - Sudah implemented!

3. **Add Caching** (optional)
```javascript
const cache = {};
app.get('/api/beasiswa', (req, res) => {
  if (cache.beasiswa) return res.json(cache.beasiswa);
  // fetch & cache
});
```

---

## Security Best Practices

### 1. **Change JWT Secret**
```env
JWT_SECRET=your_super_secret_key_min_32_chars
```

### 2. **Change Database Password**
```env
DB_PASSWORD=strong_password_123!
```

### 3. **Add Rate Limiting** (optional)
```javascript
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);
```

### 4. **Sanitize Input**
```javascript
// Prevent SQL injection (already using prepared statements)
const [users] = await pool.query(
  'SELECT * FROM users WHERE email = ?',
  [userInput] // Parameter binding
);
```

### 5. **Add HTTPS** (production)
- Get SSL certificate (Let's Encrypt - free)
- Setup redirect HTTP to HTTPS

---

## Testing Tips

### Manual Test Scenarios

#### Scenario 1: New User Registration
```
1. Go to /register
2. Fill form dengan data baru
3. Click register
4. Redirect ke /login
5. Login dengan credentials baru
6. Check localStorage untuk token
```

#### Scenario 2: Admin Create Beasiswa
```
1. Login sebagai admin
2. Go to /admin/dashboard
3. Fill beasiswa form
4. Click "Tambah"
5. Check beasiswa list updated
6. Verify di database
```

#### Scenario 3: User Receive Notification
```
1. Login sebagai admin
2. Go to Notifications tab
3. Fill & send notification
4. Login sebagai user (new tab)
5. Check NotificationBell updated
6. Mark as read
7. Check is_read di database
```

#### Scenario 4: Filter Beasiswa
```
1. Go to /beasiswa
2. Select jenis_beasiswa = "swasta"
3. Check list updated (no reload)
4. Select kategori = "akademik"
5. Check list filtered further
6. Type search query
7. Check real-time search works
```

---

## Troubleshooting Guide

### Error: "Cannot POST /api/beasiswa"
- Check backend running
- Check port 5000 accessible
- Check API_URL di .env.local

### Error: "Invalid token"
- Token expired, login ulang
- Check JWT_SECRET match di .env
- Check token format di Authorization header

### Error: "Access denied (admin only)"
- Login sebagai admin account
- Check role di database
- Refresh page

### Error: "ECONNREFUSED 127.0.0.1:3306"
- MySQL not running
- Check credentials di .env
- Verify database created

### Notifikasi tidak muncul
- Kirim notifikasi dari admin
- Check notifications table
- Refresh user page
- Check browser console F12

### Filter tidak bekerja
- Check querystring di URL
- Check filter onChange handler
- Open console F12 untuk errors
- Try reset filter

---

## Optimization Checklists

### Before Production

Frontend:
- [ ] npm run build (no errors)
- [ ] dist folder created
- [ ] Test production build locally
- [ ] Update API_URL ke production
- [ ] Minify bundle size
- [ ] Remove console.logs
- [ ] Add favicon

Backend:
- [ ] Test all endpoints
- [ ] Add error handling
- [ ] Validate all inputs
- [ ] Use environment variables
- [ ] Enable HTTPS
- [ ] Setup CORS whitelist
- [ ] Add logging
- [ ] Database backup plan

### Deployment Checklist

Frontend (Vercel):
- [ ] npm run build
- [ ] Push ke git
- [ ] Connect Vercel ke repo
- [ ] Set environment variables
- [ ] Deploy
- [ ] Test live site

Backend (Railway/Heroku):
- [ ] Create .env file
- [ ] Push ke git
- [ ] Connect platform ke repo
- [ ] Set environment variables
- [ ] Deploy
- [ ] Test API endpoints
- [ ] Setup database

---

## Advanced Features (Optional)

### 1. Email Notifications
```javascript
const nodemailer = require('nodemailer');
// Send email when notification created
```

### 2. File Upload
```javascript
const multer = require('multer');
// Allow upload CV, dokumen
```

### 3. Search Optimization
```javascript
const Elasticsearch = require('@elastic/elasticsearch');
// Full-text search
```

### 4. Caching
```javascript
const redis = require('redis');
// Cache beasiswa list
```

### 5. Analytics
```javascript
// Track user behavior
// View dashboards
```

---

## Useful Commands

### Backend
```bash
npm install                # Install dependencies
npm run dev               # Development
npm start                 # Production
npm run test             # Run tests (if added)
```

### Frontend
```bash
npm install               # Install dependencies
npm run dev              # Development
npm run build            # Production build
npm run preview          # Preview build
```

### Database
```bash
mysql -u root -p < database.sql    # Import
mysql -u root -p beasiswa_db       # Access
```

### Git
```bash
git init                 # Initialize
git add .               # Add files
git commit -m "msg"     # Commit
git push                # Push
```

---

## Resources & Links

### Documentation
- React: https://react.dev
- Express: https://expressjs.com
- MySQL: https://dev.mysql.com/doc
- Tailwind: https://tailwindcss.com
- Socket.io: https://socket.io/docs

### Tools
- Postman: https://www.postman.com
- VS Code: https://code.visualstudio.com
- MySQL Workbench: https://www.mysql.com/products/workbench
- Vercel: https://vercel.com
- Railway: https://railway.app

### Learning
- YouTube: Search "React Tutorial", "Node.js Tutorial"
- Udemy: Full-stack web development courses
- FreeCodeCamp: Free comprehensive tutorials

---

## FAQ

**Q: Bagaimana cara reset password user?**
A: Fitur reset password belum diimplementasi. Bisa manual via database atau tambahkan forgot-password endpoint.

**Q: Apakah bisa pakai database lain selain MySQL?**
A: Ya, bisa dimodifikasi ke PostgreSQL, MongoDB, dll dengan mengubah connection di config.

**Q: Bagaimana cara scale aplikasi untuk production?**
A: Gunakan Docker, load balancer, CDN, caching, database replication.

**Q: Apakah Support untuk mobile app?**
A: Frontend adalah web responsive. Bisa convert ke mobile app dengan React Native.

**Q: Bagaimana cara backup database?**
A: Gunakan mysqldump atau backup tool di MySQL Workbench.

---

## Support & Community

Jika ada pertanyaan atau issues:
1. Check documentation files
2. Check browser console (F12)
3. Check server logs
4. Search GitHub issues
5. Ask di Stack Overflow

---

**Happy Coding!** 👨‍💻✨

Semoga tips ini membantu development Anda!
