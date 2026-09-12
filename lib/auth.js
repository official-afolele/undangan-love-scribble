import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';
const secret=()=>new TextEncoder().encode(process.env.AUTH_SECRET||'change-this-secret');
export async function createSession(email){const token=await new SignJWT({email}).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime('7d').sign(secret());cookies().set('admin_session',token,{httpOnly:true,secure:true,sameSite:'lax',path:'/',maxAge:60*60*24*7});}
export async function getSession(){const token=cookies().get('admin_session')?.value;if(!token)return null;try{return (await jwtVerify(token,secret())).payload}catch{return null}}
export async function clearSession(){cookies().set('admin_session','',{httpOnly:true,secure:true,sameSite:'lax',path:'/',maxAge:0})}
export async function verifyPassword(password,hash){return bcrypt.compare(password,hash)}
export async function hashPassword(password){return bcrypt.hash(password,12)}
