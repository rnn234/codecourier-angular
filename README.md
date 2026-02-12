# CodeCourier Angular App

Project Angular 18 untuk CodeCourier - Game edukasi pemrograman dengan Tailwind CSS dan animasi transisi halaman.

## 🎨 Design Update (Sesuai Figma)

Design telah diupdate sesuai dengan Figma terbaru:

**Home Page:**
- Background game screenshot (placeholder - ganti dengan asset Anda)
- Box/package dengan text "Klik Kardus ini untuk install"
- Karakter pixel art di kiri bawah
- Deskripsi CodeCourier di kanan bawah

**Install Page:**
- Background hitam minimalis
- 2 tombol biru untuk install
- Box/package di sebelah kanan
- System requirements

📖 **Lihat:** `ASSET_REPLACEMENT_GUIDE.md` untuk cara mengganti placeholder dengan asset asli Anda.

## 🚀 Features

- ✅ Angular 18 dengan Standalone Components
- ✅ Tailwind CSS untuk styling
- ✅ Routing dengan animasi transisi halaman
- ✅ Responsive design (mobile & desktop)
- ✅ Pixel art character SVG
- ✅ Siap deploy ke Vercel

## 📋 Prerequisites

Pastikan Anda sudah menginstall:
- Node.js (v18 atau lebih baru)
- npm atau yarn

## 🛠️ Installation

1. **Install dependencies**
```bash
npm install
```

2. **Jalankan development server**
```bash
npm start
```

Buka browser dan akses `http://localhost:4200`

## 🏗️ Build untuk Production

```bash
npm run build
```

File hasil build akan tersedia di folder `dist/codecourier-angular/browser/`

## 🌐 Deploy ke Vercel

### Cara 1: Melalui Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login ke Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Cara 2: Melalui Vercel Dashboard

1. Push project ke GitHub
2. Buka [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import repository GitHub Anda
5. Vercel akan otomatis detect Angular project
6. Click "Deploy"

### Cara 3: Connect GitHub (Recommended)

1. Push project ke GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Vercel akan otomatis deploy setiap kali ada push ke branch main

## 📁 Struktur Project

```
codecourier-angular/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   └── home.component.scss
│   │   │   └── install/
│   │   │       ├── install.component.ts
│   │   │       ├── install.component.html
│   │   │       └── install.component.scss
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── assets/
│   ├── styles.scss
│   ├── index.html
│   └── main.ts
├── angular.json
├── package.json
├── tailwind.config.js
├── vercel.json
└── README.md
```

## 🎨 Customization

### Mengubah Warna

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'codecourier-dark': '#1a1a1a',  // Background color
      'codecourier-accent': '#ff6b6b', // Accent color
    },
  },
}
```

### Menambah Halaman Baru

1. Buat component baru:
```bash
ng generate component pages/about --standalone
```

2. Tambahkan route di `app.routes.ts`:
```typescript
{
  path: 'about',
  loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
}
```

### Mengubah Link Download

Edit `install.component.ts`:
```typescript
downloadLink = 'https://your-download-link.com/codecourier.zip';
```

## 🎯 Pages

- **Home** (`/`) - Halaman utama dengan karakter pixel art dan deskripsi produk
- **Install** (`/install`) - Halaman download dan instruksi instalasi

## 🔧 Technology Stack

- **Framework**: Angular 18
- **CSS**: Tailwind CSS
- **Animations**: Angular Animations API
- **Routing**: Angular Router (lazy loading)
- **Build**: Angular CLI
- **Hosting**: Vercel

## 📱 Responsive Design

Website ini fully responsive dan teroptimasi untuk:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## ⚡ Performance

- Lazy loading untuk semua routes
- Standalone components untuk bundle size lebih kecil
- Optimized builds dengan Angular CLI
- CDN delivery via Vercel

## 🐛 Troubleshooting

### Build Error
Jika ada error saat build, coba:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Vercel Deployment Failed
Pastikan `vercel.json` sudah benar dan build berhasil di local:
```bash
npm run build
```

## 📝 License

MIT License - silakan gunakan untuk project Anda!

## 👨‍💻 Author

Dibuat dengan ❤️ untuk CodeCourier

---

Happy Coding! 🚀
