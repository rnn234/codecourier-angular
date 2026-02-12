# 🎨 Panduan Mengganti Asset Placeholder

## 📂 Struktur Folder Asset

Buat folder structure berikut di project Anda:

```
src/
└── assets/
    └── images/
        ├── game-background.png      # Background screenshot game
        ├── character-sprite.png     # Karakter pixel art
        ├── box-package.png          # Gambar box/kardus
        └── logo.png                 # Logo CodeCourier (optional)
```

---

## 🔄 Cara Mengganti Asset

### 1️⃣ Buat Folder Assets

```bash
cd codecourier-angular/src
mkdir -p assets/images
```

### 2️⃣ Copy Asset Anda

Copy semua asset image ke folder `src/assets/images/`

**File yang dibutuhkan:**
- `game-background.png` - Screenshot background game (1920x1080 recommended)
- `character-sprite.png` - Karakter pixel art dengan background transparent
- `box-package.png` - Gambar box/kardus 3D (PNG dengan transparent background)

---

## 📝 Update Code untuk Enable Asset

### Home Page - Background Game

**File:** `src/app/pages/home/home.component.html`

**Cari:**
```html
<img 
  src="assets/images/game-background.png" 
  alt="Game Background" 
  class="w-full h-full object-cover opacity-40"
  *ngIf="false">
```

**Ganti menjadi:**
```html
<img 
  src="assets/images/game-background.png" 
  alt="Game Background" 
  class="w-full h-full object-cover opacity-40">
```

**Hapus ini:**
```html
<!-- Placeholder gradient background -->
<div class="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-60"></div>
```

---

### Home Page - Box/Package

**File:** `src/app/pages/home/home.component.html`

**Cari:**
```html
<img 
  src="assets/images/box-package.png" 
  alt="CodeCourier Box" 
  class="w-64 h-64 lg:w-80 lg:h-80 object-contain"
  *ngIf="false">
```

**Ganti menjadi:**
```html
<img 
  src="assets/images/box-package.png" 
  alt="CodeCourier Box" 
  class="w-64 h-64 lg:w-80 lg:h-80 object-contain">
```

**Hapus SVG placeholder:**
```html
<!-- Placeholder Box SVG -->
<svg width="320" height="320" viewBox="0 0 200 200" class="animate-float">
  ...
</svg>
```

---

### Home Page - Character Sprite

**File:** `src/app/pages/home/home.component.html`

**Cari:**
```html
<img 
  src="assets/images/character-sprite.png" 
  alt="CodeCourier Character" 
  class="w-48 h-48 lg:w-64 lg:h-64 object-contain pixelated"
  *ngIf="false">
```

**Ganti menjadi:**
```html
<img 
  src="assets/images/character-sprite.png" 
  alt="CodeCourier Character" 
  class="w-48 h-48 lg:w-64 lg:h-64 object-contain pixelated">
```

**Hapus SVG placeholder:**
```html
<!-- Placeholder Character SVG -->
<svg width="200" height="240" viewBox="0 0 100 120" class="pixelated">
  ...
</svg>
```

---

### Install Page - Box Image

**File:** `src/app/pages/install/install.component.html`

**Cari:**
```html
<img 
  src="assets/images/box-package.png" 
  alt="CodeCourier Box" 
  class="w-64 h-64 lg:w-96 lg:h-96 object-contain"
  *ngIf="false">
```

**Ganti menjadi:**
```html
<img 
  src="assets/images/box-package.png" 
  alt="CodeCourier Box" 
  class="w-64 h-64 lg:w-96 lg:h-96 object-contain">
```

**Hapus SVG placeholder:**
```html
<!-- Placeholder Box SVG -->
<svg width="320" height="320" viewBox="0 0 200 200">
  ...
</svg>
```

---

## ✅ Checklist Penggantian Asset

- [ ] Buat folder `src/assets/images`
- [ ] Copy `game-background.png` ke folder images
- [ ] Copy `character-sprite.png` ke folder images
- [ ] Copy `box-package.png` ke folder images
- [ ] Update Home component HTML - background
- [ ] Update Home component HTML - box image
- [ ] Update Home component HTML - character sprite
- [ ] Update Install component HTML - box image
- [ ] Hapus semua SVG placeholder
- [ ] Test di browser (`npm start`)

---

## 🎨 Rekomendasi Ukuran Asset

### Game Background
- **Format:** PNG atau JPG
- **Size:** 1920x1080px atau lebih besar
- **File size:** < 1MB (optimized)
- **Notes:** Background akan di-overlay dengan opacity 40%

### Character Sprite
- **Format:** PNG dengan transparent background
- **Size:** 256x256px - 512x512px
- **File size:** < 200KB
- **Notes:** Akan ditampilkan dengan pixel-perfect rendering

### Box/Package
- **Format:** PNG dengan transparent background
- **Size:** 512x512px - 1024x1024px
- **File size:** < 300KB
- **Notes:** 3D isometric view untuk efek terbaik

---

## 🔧 Optimasi Image (Optional)

Untuk performa lebih baik, compress image Anda:

### Online Tools:
- TinyPNG: https://tinypng.com
- Squoosh: https://squoosh.app
- ImageOptim: https://imageoptim.com

### Command Line:
```bash
# Install imagemin
npm install -g imagemin-cli imagemin-pngquant

# Optimize images
imagemin src/assets/images/*.png --out-dir=src/assets/images --plugin=pngquant
```

---

## 🎯 Quick Replace All Assets

Jika Anda sudah punya semua asset, gunakan script ini:

**File:** `replace-assets.sh`

```bash
#!/bin/bash

# 1. Create assets folder
mkdir -p src/assets/images

# 2. Copy your assets here (ganti path sesuai lokasi asset Anda)
cp ~/Downloads/game-background.png src/assets/images/
cp ~/Downloads/character-sprite.png src/assets/images/
cp ~/Downloads/box-package.png src/assets/images/

# 3. Enable assets in HTML files
sed -i 's/*ngIf="false">//g' src/app/pages/home/home.component.html
sed -i 's/*ngIf="false">//g' src/app/pages/install/install.component.html

echo "✅ Assets replaced successfully!"
echo "⚠️  Don't forget to remove SVG placeholders manually"
```

**Run:**
```bash
chmod +x replace-assets.sh
./replace-assets.sh
```

---

## 🐛 Troubleshooting

### Image tidak muncul?

**Check:**
1. File ada di `src/assets/images/`
2. Nama file exact match (case-sensitive)
3. Format file supported (PNG, JPG, GIF, WebP)
4. File size tidak terlalu besar (< 5MB)

**Debug:**
```bash
# Check if file exists
ls -la src/assets/images/

# Check in browser console
# Image path should be: http://localhost:4200/assets/images/game-background.png
```

### Pixel art terlihat blur?

Pastikan class `pixelated` ada:

```html
<img src="..." class="pixelated">
```

Di CSS sudah ada:
```scss
.pixelated {
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}
```

---

## 📸 Preview Mode

Untuk preview dengan placeholder dulu, biarkan `*ngIf="false"` tetap ada.
Untuk menggunakan asset asli, hapus `*ngIf="false"`.

---

## ✨ Tips

1. **Test incremental** - Ganti satu asset, test, lalu lanjut
2. **Keep backup** - Simpan SVG placeholder sebagai fallback
3. **Optimize images** - Compress sebelum deploy ke production
4. **Use WebP** - Format modern untuk file size lebih kecil
5. **Lazy loading** - Untuk performa, nanti bisa add lazy loading

---

**Happy Designing!** 🎨

Jika ada kendala, hubungi support atau check dokumentasi Angular:
https://angular.dev/guide/assets
