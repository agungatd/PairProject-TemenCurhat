const express = require('express')
const app = express()
const port = process.env.port || 3001

const session = require('express-session')
app.use(session({
  secret: 'keyboard cat',
  resave: false,
}));


const PencurhatRoute = require('./routes/pencurhat')
const TemenCurhatRoute = require('./routes/temencurhat')
// const SesiCurhatRoute = require('./routes')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // for parsing application/json

app.use(express.static(__dirname + '/public'));

app.use('/pencurhat', PencurhatRoute)
app.use('/temen-curhat', TemenCurhatRoute)


app.get('/', (req, res) => {res.render('home')})

app.listen(port, () => console.log(`app running on ${port} with ❤️`))
