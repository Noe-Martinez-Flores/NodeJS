const express = require ('express');
const morgan = require ('morgan');

//iinitializations
const app = express();

//Setting
app.set('port', process.env.PORT || 4000);

//middleWare
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index.js'));
app.use('/products', require('./routes/products.js'));

//Starting Server
app.listen(app.get('port'), () => {
    console.log("Server on port",app.get('posrt'));
});