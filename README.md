# Cleanaction Network Website

Website statis untuk Cleanaction Network - Gerakan Lingkungan Indonesia.

## Tech Stack
- React 19
- Tailwind CSS
- Lucide Icons

## Fitur
- Single-page website dengan smooth scroll
- Responsive design
- Instagram embed feed dari @cleanaction
- Optimized images dengan WebP format dan lazy loading

## Deploy ke GitHub Pages

1. Build production:
```bash
cd frontend
yarn build
```

2. Deploy folder `build` ke GitHub Pages

3. Setup custom domain `cleanaction.id`

## Struktur
- `/frontend` - React application
- `/frontend/src/App.js` - Main component dengan semua sections
- `/frontend/public` - Static assets

## Optimisasi
- Images menggunakan WebP format
- Lazy loading untuk gambar
- Preconnect untuk external resources
- Minified CSS/JS saat build
