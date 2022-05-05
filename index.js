import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
const app = express();

const port = process.env.PORT || '5000';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/comments', router);

app.listen(port, () => {
	console.log(`sever is running on ${port}`);
});
