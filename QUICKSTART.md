# 🚀 Quick Start Guide - CodeCourier Angular

## ⚡ Langkah Cepat (5 Menit)

### 1️⃣ Install Dependencies
```bash
cd codecourier-angular
npm install
```

### 2️⃣ Run Development Server
```bash
npm start
```

Buka browser: `http://localhost:4200` 🎉

---

## 📦 Yang Sudah Tersedia

✅ **2 Halaman Lengkap:**
- Home Page (`/`) - Landing page dengan pixel art character
- Install Page (`/install`) - Download & installation guide

✅ **Features:**
- Responsive design (mobile, tablet, desktop)
- Smooth page transitions
- Tailwind CSS styling
- Modern Angular 18 architecture
- Ready for Vercel deployment

---

## 🎨 Customization Cepat

### Ubah Warna Aksen
File: `tailwind.config.js`
```javascript
'codecourier-accent': '#ff6b6b', // Ganti dengan warna Anda
```

### Ubah Link Download
File: `src/app/pages/install/install.component.ts`
```typescript
downloadLink = 'https://your-link.com/game.zip';
```

### Tambah Konten
Edit file HTML di:
- `src/app/pages/home/home.component.html`
- `src/app/pages/install/install.component.html`

---

## 🌐 Deploy ke Vercel

### Cara Termudah (GitHub):

1. **Push ke GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

2. **Import di Vercel:**
- Buka https://vercel.com
- Click "New Project"
- Import dari GitHub
- Click "Deploy"

**Selesai!** 🎊 Website Anda sudah live.

### Cara Manual (Vercel CLI):

```bash
npm install -g vercel
vercel login
vercel
```

---

## 📁 Struktur Project

```
codecourier-angular/
├── src/
│   ├── app/
│   │   ├── pages/          # Semua halaman
│   │   │   ├── home/       # Halaman utama
│   │   │   └── install/    # Halaman install
│   │   ├── app.component.ts
│   │   └── app.routes.ts   # Routing config
│   ├── styles.scss         # Global styles
│   └── index.html
├── angular.json
├── package.json
├── tailwind.config.js
├── vercel.json            # Vercel deployment config
└── README.md
```

---

## 🛠️ Build untuk Production

```bash
npm run build
```

Output: `dist/codecourier-angular/browser/`

---

## 💡 Tips

1. **Development:** 
   - Auto-reload enabled
   - Errors tampil di console

2. **Styling:**
   - Gunakan Tailwind utility classes
   - Custom SCSS di component files

3. **Routing:**
   - Lazy loading enabled
   - Smooth transitions antar halaman

4. **Performance:**
   - Standalone components = smaller bundle
   - Production build = optimized & minified

---

## 🐛 Common Issues

**Port 4200 sudah dipakai?**
```bash
npm start -- --port 4300
```

**Build error?**
```bash
rm -rf node_modules
npm install
```

**Tailwind tidak bekerja?**
Pastikan `styles.scss` berisi:
```scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 📚 Documentation

- **Full README:** `README.md`
- **Deployment Guide:** `DEPLOYMENT.md`
- **Tailwind CSS:** https://tailwindcss.com
- **Angular Docs:** https://angular.dev

---

## ✨ Next Steps

1. ✅ Run project locally
2. ✅ Customize content & colors
3. ✅ Add your download link
4. ✅ Deploy to Vercel
5. 🎉 Share dengan dunia!

---

**Happy Coding!** 🚀

Dibuat dengan ❤️ untuk CodeCourier
