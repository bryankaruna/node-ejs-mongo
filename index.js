if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
//Core
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const mongoose = require('mongoose');
//Routes
const indexRouter = require('./routes/index');

app.set("view engine", "ejs");
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.json()); //change req.body to json form
app.use(express.urlencoded({extended: true})); //key=value&key=value


//DB Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB', err))

    
//Router
app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);