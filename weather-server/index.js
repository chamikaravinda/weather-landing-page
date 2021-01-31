const express = require('express');

//Import Routes
const Routes =  require('./routes');

const app = express();
var cors = require('cors');


//Middleware
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());

//Rout Middlewares
app.use('/api/weather/',Routes);


app.listen(4000,()=>console.log('Server is up and running...'));
  