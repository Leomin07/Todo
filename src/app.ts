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

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('hello user');
});

app.listen(process.env.PROT || 5000, () =>
  console.log(`Sever running on port ${PORT}!`)
);
