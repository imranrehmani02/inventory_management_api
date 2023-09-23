const express = require('express');
const app = express();
const orderRouter = require('./api/routers/orderRouter');
const productRouter = require('./api/routers/productRouter');


const PORT = 3000;
const {
    db,
    sequelize
} = require('./database');


sequelize.authenticate().then(() => {
        console.log('Database connected successfully.');
     }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
     });


app.use('/orders', orderRouter);
app.use('/products', productRouter);

app.listen(PORT, ()=>console.log('Application running....'));