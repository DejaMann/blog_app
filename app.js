const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const methodOverride = require('method-override')
const session = require('express-session')
const MongoStore = require('connect-mongo')
require('dotenv').config()



const app = express()
const PORT = 3000

// middleware - run in middle of request and response cycle
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'))
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI}),
    resave: false,
    saveUninitialized: true
    // key allowing sessions to be created
}))


// App settings 
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine());

// Routes (endpoints)
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
