import { neon } from '@neondatabase/serverless';
export const sql = neon(process.env.DATABASE_URL);
let initialized=false;
export async function ensureDb(){
 if(initialized) return;
 if(!process.env.DATABASE_URL) throw new Error('DATABASE_URL belum diatur. Hubungkan Neon ke project Vercel.');
 await sql`CREATE TABLE IF NOT EXISTS wedding_config (id integer primary key, data jsonb not null, updated_at timestamptz default now())`;
 await sql`CREATE TABLE IF NOT EXISTS guests (id bigserial primary key, name text not null, note text default '', created_at timestamptz default now())`;
 await sql`CREATE TABLE IF NOT EXISTS wishes (id bigserial primary key, name text not null, attendance text not null, message text not null, guest_id bigint, created_at timestamptz default now())`;
 await sql`CREATE TABLE IF NOT EXISTS admin_user(id integer primary key, email text unique not null, hash text not null)`;
 const rows=await sql`SELECT id FROM wedding_config WHERE id=1`;
 if(!rows.length){
  const data={groom:'Jaka',bride:'Dian',date:'2026-12-26T09:00:00+07:00',dateLabel:'26 DESEMBER 2026',venue:'Gedung Harmoni',address:'Jl. Melati No. 123, Jakarta',maps:'https://maps.google.com',groomFull:'Jaka Abdul Rizky',brideFull:'Dian',groomParents:'Putra Bapak Herman & Ibu Yuli',brideParents:'Putri Bapak & Ibu',akad:'08.00 – 10.00 WIB',reception:'11.00 – 14.00 WIB',quote:'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu mendapat ketenangan hati dan dijadikan-Nya kasih sayang di antara kamu.',story:[['Awal Pertemuan','Semua berawal dari sebuah pertemuan sederhana yang kemudian menjadi cerita indah.'],['Momen Bahagia','Waktu membuat kami semakin dekat hingga akhirnya memilih untuk berjalan bersama.'],['Selamanya','Dengan penuh syukur, kami memilih untuk melangkah bersama.']],banks:[{bank:'BCA',account:'1234567890',owner:'Jaka & Dian'},{bank:'DANA',account:'081234567890',owner:'Jaka & Dian'}],photoGroom:'',photoBride:'',photos:[],musicUrl:'/assets/music.mp3',musicTitle:'Our Wedding Song',musicArtist:'Jaka & Dian'};
  await sql`INSERT INTO wedding_config(id,data) VALUES(1,${JSON.stringify(data)}::jsonb)`;
 }
 initialized=true;
}
