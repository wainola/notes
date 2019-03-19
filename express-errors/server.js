const express = require('express');
const { validateSomething, validateSomething2 } = require('./middlewares')

const app = express();

const port = 7000;

app.use(validateSomething)
app.use(validateSomething2)

app.get('/test', (request, response) => response.send('Test!!'))

app.listen(port , err => {
    if(err) process.exit(1)
    console.log('Listening on port', port)
})