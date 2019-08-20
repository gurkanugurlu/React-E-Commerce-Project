const express = require('express');
const app = express();
const morgan = require('morgan');
const productRoutes = require('./api/routes/products');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false }));
app.use(express.json());

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', '*');
    if (request.method === 'OPTIONS') {
        response.header('Access-Control-Allow-Methods', 'PUT,POST,DELETE,GET,PATCH');
        return response.status(200).json({});
    }
    next();
})

//My routers

app.use('/products', productRoutes);
//Default Error Handling
app.use((request, response, next) => {
    const error = new Error("Error Occurred");
    error.status = 400;
    next(error);
})

app.use((error, request, response, next) => {
    response.status(error.status || 500);
    response.json({
        error: {
            message: error.message
        }
    })
})
module.exports = app;
