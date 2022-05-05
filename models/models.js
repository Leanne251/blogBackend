// do an insrt into function
// do a get function, depending on the post id

import db from '../db/connection.js';

export async function getTheComments(blogID) {
	try {
		const result = await db.query(`SELECT * FROM comments WHERE blog_id=$1`, [ blogID ]);
		return result.rows;
	} catch (e) {
		console.log('error', e);
	}
}

export async function postTheComments({ blogID, date, userName, comment }) {
	try {
		const result = await db.query(
			`INSERT INTO comments (blog_id, creation_date, user_name, comment) VALUES ($1, $2, $3, $4) RETURNING comment; `,
			[ blogID, date, userName, comment ]
		);
		return result.rows;
	} catch (e) {
		console.log('error', e);
	}
}
