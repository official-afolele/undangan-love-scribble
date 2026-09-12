# Undangan Love Scribble — FINAL FIX

Versi Next.js full-stack untuk Vercel dengan Neon PostgreSQL, admin, daftar tamu, RSVP/ucapan, musik, dan link personal `?to=Nama%20Tamu`.

## Deploy ke Vercel
1. Upload seluruh isi folder project ini ke repository GitHub.
2. Import repository ke Vercel sebagai project Next.js.
3. Hubungkan Neon Database dari Vercel Marketplace/Storage.
4. Pastikan environment variable `DATABASE_URL` tersedia.
5. Tambahkan `ADMIN_EMAIL`, `ADMIN_PASSWORD`, dan `AUTH_SECRET`.
6. Redeploy.
7. Website publik ada di `/` dan admin di `/admin`.

## Environment Variables
- `DATABASE_URL` — dari integrasi Neon.
- `ADMIN_EMAIL` — email login admin.
- `ADMIN_PASSWORD` — password login admin.
- `AUTH_SECRET` — string acak panjang untuk session.

## Catatan FIX
- `app/globals.css` sudah dibuat ulang agar aman diproses oleh webpack/PostCSS Vercel.
- Tidak memakai `@import` Google Fonts.
- Tidak memakai SVG data-URI di CSS.
- Dependency dipin ke versi yang jelas agar build lebih konsisten.

## Musik
`public/assets/music.mp3` hanya untuk testing. Untuk publik, ganti dengan audio yang Anda miliki hak penggunaannya.
