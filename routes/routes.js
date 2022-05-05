// need to post to the database on submit,
// and fetch comments on page load, depending on post.

import express from 'express';
import { getTheComments, postTheComments } from '../models/models.js';
const router = express.Router();

router.get('/:id', async function(req, res) {
	const blogID = req.params.id;
	const response = await getTheComments(blogID);
	return res.json({
		sucess: true,
		payload: response
	});
});

router.post('/', async function(req, res) {
	const body = req.body;
	const response = await postTheComments(body);
	return res.json({
		sucess: true,
		payload: response
	});
});

export default router;
