import dotenv from 'dotenv';

dotenv.config();

// export all environment variables here and set defaults
export const SERVER_PORT: number = Number(process.env.SERVER_PORT) || 4000;
export const ENVIRONMENT: string = process.env.NODE_ENV || 'development';
export const PGUSER: string = process.env.PGUSER || 'postgres';
export const PGHOST: string = process.env.PGHOST || 'localhost';
export const PGPASSWORD: string = process.env.PGPASSWORD || 'postgres';
export const PGDATABASE: string = process.env.PGDATABASE || 'postgres';
export const PGPORT: number = Number(process.env.PGPORT) || 5432;