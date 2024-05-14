import express, { Request, Response } from 'express';
import axios from 'axios';
import cors from 'cors';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';

import * as dotenv from 'dotenv';
import { checkOutRouter, loginRouter } from './routers'
import { accessValidation } from './middlewares'

const app = express();

app.use(cors({
  credentials: true,
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
dotenv.config();

app.use('/checkout', accessValidation, checkOutRouter);
app.use('/login', loginRouter);

app.get('/getRandomUsers', async (req: Request, res: Response) => {
  try {
    const results = req.query.results || 1;
    const page = req.query.page || 1;

    const response = await axios.get(`https://randomuser.me/api?results=${results}&page=${page}`);

    const users = response.data.results;
    const formattedUsers = users.map((user: any) => {
        return {
            name: `${user.name.title}, ${user.name.first} ${user.name.last}`,
            location: `${user.location.street.number}, ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country},`,
            email: user.email,
            age: user.registered.age,
            phone: user.phone,
            cell: user.cell,
            picture: `${user.picture.large}, ${user.picture.medium}, ${user.picture.thumbnail}`
        };
    });

    res.json(formattedUsers)
    // res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});