import express, { Express, Request, Response } from 'express';
import { join } from 'path';
import dotenv from 'dotenv';
import morgan from 'morgan';
import driversRoutes from './drivers/drivers.routes';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

// Static files
app.use('/public', express.static(join(__dirname, 'public')));

// Minimal logging
app.use(morgan('tiny'));

// Enable cors
app.use(cors());

app.get('/', (req: Request, res: Response) => {
	res.send('init');
});

// Routes
driversRoutes(app);

app.listen(port, () => {
	console.log(`Server is running @ http://localhost:${port}`);
});
