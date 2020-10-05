const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')



//carregando config
dotenv.config({
    path: './config/config.env'
});

//conectando com o banco

connectDB()

//arquivo de rotas
const bootcamps = require('./routes/bootcamps');

const app = express();

app.use(express.json())

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//montar rotas
app.use(`/api/v1/bootcamps`, bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log('Ouvindo a porta ', PORT);
});

//verificar erros - promise rejections 
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);

    server.close(() => process.exit(1))
})