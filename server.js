const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

//arquivo de rotas
const bootcamps = require('./routes/bootcamps');

//carregando config
dotenv.config({
  path: './config/config.env',
});

const app = express();

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//montar rotas
app.use(`/api/v1/bootcamps`, bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Ouvindo a porta ', PORT);
});
