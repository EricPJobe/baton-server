import pkg from 'pg';
const { Pool } = pkg;

import { PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER } from '../config';

const pool = new Pool({
  user: PGUSER,
  password: PGPASSWORD,
  host: PGHOST,
  database: PGDATABASE,
  port: PGPORT,
  ssl: true,
});

// Import this query function and use for all database queries
// disabled eslint rule because we are using any type that is required for pg
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const query = async (text: string, params: any[]) => {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  console.log('executed query', { text, duration, rows: res.rowCount });
  return res;
};

// if transaction is needed create a connection function and export below