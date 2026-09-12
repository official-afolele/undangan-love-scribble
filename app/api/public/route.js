import {NextResponse} from 'next/server'; import {ensureDb,sql} from '@/lib/db';
export async function GET(){try{await ensureDb();const r=await sql`SELECT data FROM wedding_config WHERE id=1`;return NextResponse.json({config:r[0]?.data||{}})}catch(e){return NextResponse.json({error:e.message},{status:500})}}
