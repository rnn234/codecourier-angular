# 📚 Panduan Deploy ke Vercel

## Langkah-langkah Deploy

### 🚀 Opsi 1: Deploy Langsung dari Local

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login ke Vercel**
```bash
vercel login
```
Akan membuka browser untuk autentikasi.

3. **Deploy Project**
```bash
cd codecourier-angular
vercel
```

Ikuti prompt:
- Set up and deploy? **Y**
- Which scope? **Pilih account Anda**
- Link to existing project? **N**
- What's your project's name? **codecourier** (atau nama lain)
- In which directory is your code located? **./**
- Want to override the settings? **N**

4. **Deploy ke Production**
```bash
vercel --prod
```

### 🔗 Opsi 2: Deploy via GitHub (Recommended)

#### A. Setup Repository GitHub

1. **Buat Repository Baru di GitHub**
   - Buka https://github.com/new
   - Nama: `codecourier-angular`
   - Visibility: Public atau Private
   - Jangan initialize dengan README (sudah ada)

2. **Push Code ke GitHub**
```bash
cd codecourier-angular
git init
git add .
git commit -m "Initial commit: CodeCourier Angular app"
git branch -M main
git remote add origin https://github.com/USERNAME/codecourier-angular.git
git push -u origin main
```

#### B. Connect Vercel dengan GitHub

1. **Buka Vercel Dashboard**
   - https://vercel.com/dashboard

2. **Import Project**
   - Click tombol **"Add New..."** → **"Project"**
   - Click **"Import Git Repository"**
   - Authorize Vercel untuk akses GitHub (jika belum)
   - Pilih repository **codecourier-angular**

3. **Configure Project**
   - **Framework Preset**: Akan otomatis terdetect sebagai Angular
   - **Root Directory**: ./
   - **Build Command**: `npm run build` (sudah auto-fill)
   - **Output Directory**: `dist/codecourier-angular/browser` (sudah auto-fill dari vercel.json)
   - Click **"Deploy"**

4. **Tunggu Deployment**
   - Proses build biasanya 2-5 menit
   - Setelah selesai, Anda akan dapat URL production

### 🔄 Auto Deploy

Setelah connected dengan GitHub:
- Setiap push ke branch `main` akan otomatis trigger deployment
- Pull request akan mendapat preview URL
- Rollback mudah dari Vercel dashboard

### ⚙️ Environment Variables (Optional)

Jika butuh environment variables:

1. **Di Vercel Dashboard**
   - Buka project → Settings → Environment Variables
   - Add variable, contoh:
     - `API_URL` = `https://api.codecourier.com`
     - `DOWNLOAD_LINK` = `https://download.codecourier.com/game.zip`

2. **Di Angular**
Edit `install.component.ts`:
```typescript
downloadLink = environment.downloadLink;
```

### 🌐 Custom Domain

1. **Di Vercel Dashboard**
   - Buka project → Settings → Domains
   - Click **"Add Domain"**
   - Masukkan domain Anda (misal: `codecourier.com`)

2. **Setup DNS**
   - Ikuti instruksi dari Vercel
   - Tambahkan CNAME record di DNS provider Anda
   - Tunggu propagasi (biasanya 5-30 menit)

### 🔍 Verifikasi Deployment

Setelah deploy berhasil:

1. **Check Homepage**
```
https://your-project.vercel.app
```

2. **Check Routing**
```
https://your-project.vercel.app/install
```

3. **Check Responsive**
   - Buka di mobile browser
   - Buka di tablet
   - Test semua breakpoints

### 🐛 Troubleshooting

#### Build Failed

**Error: "Command failed: npm run build"**
```bash
# Solusi: Test build di local dulu
npm run build

# Jika berhasil, commit dan push ulang
git add .
git commit -m "Fix build configuration"
git push
```

#### Blank Page / 404

**Cek vercel.json:**
```json
{
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

#### Styles Tidak Muncul

**Cek build output directory di vercel.json:**
```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist/codecourier-angular/browser"
      }
    }
  ]
}
```

### 📊 Monitoring

**Vercel Dashboard menyediakan:**
- Real-time logs
- Analytics (page views, top pages)
- Performance metrics (Web Vitals)
- Deployment history

### 🔒 Security Best Practices

1. **Jangan commit secrets**
   - Gunakan Environment Variables
   - File `.env` sudah ada di `.gitignore`

2. **Enable HTTPS**
   - Vercel automatically provides SSL/TLS
   - Force HTTPS di Vercel settings

3. **Security Headers**
   Tambah di `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### 📈 Performance Tips

1. **Enable Compression**
   - Vercel automatically compresses responses

2. **Image Optimization**
   - Gunakan Vercel Image Optimization
   - Atau optimize images sebelum upload

3. **Caching**
   - Static assets automatically cached
   - Configure cache headers jika perlu

### 💡 Tips Tambahan

1. **Preview Deployments**
   - Setiap PR mendapat preview URL
   - Test sebelum merge ke main

2. **Rollback**
   - Mudah rollback ke deployment sebelumnya
   - Dari Dashboard → Deployments → Promote to Production

3. **Analytics**
   - Enable Vercel Analytics untuk insights
   - Free untuk hobby projects

---

## 🎉 Selamat!

Project Anda sudah live di internet! 🚀

**Next Steps:**
- Share URL dengan teman
- Monitor analytics
- Update content secara berkala
- Tambah fitur baru

**Support:**
- Vercel Docs: https://vercel.com/docs
- Angular Docs: https://angular.dev
- Community: Discord, Stack Overflow

Happy Deploying! 🎊
