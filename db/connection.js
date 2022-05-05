import pg from 'pg';
import { connectionString } from '../config.js';

const db = new pg.Pool({
	connectionString,
	ssl: {
		rejectUnauthorized: false
	}
});

export default db;
