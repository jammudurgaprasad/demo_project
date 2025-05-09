// require('dotenv').config();
// const mongoose = require('mongoose');
// const express = require('express');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const PORT = process.env.PORT || 5000;
// const MONGO_URI = process.env.MONGO_URI;

// mongoose.connect(MONGO_URI)
//     .then(()=> console.log("MongoDB connected successfully"))
//     .catch(err => console.log(err));

// app.listen(PORT, ()=>{
//     console.log(`Server running on port number ${PORT}`)
// })

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const routes = require('./routes/userRoute.js');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(()=>console.log("MongoDB connected"))
    .catch(err=>console.log(err));

app.use(routes);
    
app.listen(PORT, ()=>{
    console.log(`Server running on port number ${PORT}`)
})

module.exports = app;