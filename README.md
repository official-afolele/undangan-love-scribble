# Undangan Love Scribble — Vercel Final

Full-stack Next.js wedding invitation with admin, Neon Postgres, guest links, wishes/attendance, editable wedding data, and music.

## Deploy
1. Import this project into Vercel.
2. In Vercel add Neon from Marketplace/Storage so `DATABASE_URL` is available.
3. Add environment variables: `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `AUTH_SECRET` for Production (and Preview if needed).
4. Deploy.
5. Open `/admin` to manage data.
6. Guest links: `/?to=Nama%20Tamu`.

## Important
The supplied `public/assets/music.mp3` is only the audio extracted from the reference recording for testing. Replace it with music you have rights to use before public distribution.

## Manual editing
All default data is also visible in `lib/db.js`; admin editing is the preferred way after deployment.
