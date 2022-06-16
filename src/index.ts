import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { join } from 'path';
import morgan from 'morgan';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Static files
app.use('/public', express.static(join(__dirname, 'public')));

// Minimal logging
app.use(morgan('tiny'));

app.get('/', (req: Request, res: Response) => {
	res.send('init');
});

app.listen(port, () => {
	console.log(`Server is running @ http://localhost:${port}`);
});
