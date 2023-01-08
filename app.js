//express module 가져오기
const express = require('express')


const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const indexRouter = require('./routes/index');

//새로운 express app을 만든다.
const app = express()

//mariaDB connect
const maria = require('./database/connect/maria');
maria.connect();

const port = 3308

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}`))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');