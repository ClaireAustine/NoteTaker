const express = require('express');
const api = require('./routes/api.js');
const html = require('./routes/html.js');

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//localhost:3001/api
app.use('/api', api)
app.use('/', html)

app.listen(PORT, () => 
console.log(`listening at http://localhost:${PORT}`)
);