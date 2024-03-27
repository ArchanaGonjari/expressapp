const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const db=require('./db');
var cors=require('cors');
var corsOption={
    origin:'http://localhost:3000',
    OptionSucessStatus : 200

}

const app = express();
var port=4000;
app.use(bodyParser.json(),cors(corsOption));

app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})