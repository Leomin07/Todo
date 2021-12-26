import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import todoRoute from './routes/todoRoute';
import connect from './db/connect';
connect();

const app = express();
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(todoRoute);

const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
