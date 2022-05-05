// table to include id, user name, date, & comment

import db from '../connection.js';

const SQLStr = `CREATE TABLE IF NOT EXISTS comments (id SERIAL PRIMARY KEY, blog_id INT, creation_date DATE, user_name TEXT, comment TEXT, likes INT, replies TEXT);`;

async function createTable() {
	const response = await db.query(SQLStr);
	console.log('response', response);
}

createTable();

// let SQLStr = `CREATE TABLE IF NOT EXISTS holidays (id SERIAL PRIMARY KEY, user_id TEXT, creation_date DATE, destination TEXT, style TEXT, cloudinary_id TEXT, image_URL TEXT, image TEXT, hotel TEXT, cost INT);`;

// async function createTable() {
// 	const response = await db.query(SQLStr);
// 	console.log(response);
// }

// createTable();
// db.end();
