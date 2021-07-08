import express from 'express';  //Import express
import Connection from './database/db.js';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();  //initialize express


app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', Router)

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));


Connection();