const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
// const { options } = require('./controllers/BlogRouter')
const methodOverride = require('method-override')
require('dotenv').config()

const app = express()
const PORT = 3000

app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'))

app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine());

app.use('/blog', require('./controllers/BlogRouter'))
app.use('/user', require('./controllers/UserRouter'))
// ^ preappended in router files.


app.get('/', (req, res) =>{
    res.render('pages/HomePage')
})


app.listen(PORT, () => {
    console.log(`nosy on port ${PORT}`);
    
    // connect to MongoDB
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    // confirm we have connection to MongoDB
    mongoose.connection.once('open', () => {
        console.log('connected to mongo');
    });
    
})
