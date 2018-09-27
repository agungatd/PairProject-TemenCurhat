const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const models = require('./models')

app.set('view engine', 'ejs')
const PencurhatRoute = require('./routes/pencurhat')
const TemenCurhatRoute = require('./routes/temencurhat')
// const SesiCurhatRoute = require('./routes')

// const session = require('express-session')
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
// }));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false }));

// ...
app.use(function(req, res, next){
  res.locals.completeMark = false;
  next();
});

app.use(express.static(__dirname + '/public'));

app.use('/pencurhat', PencurhatRoute)
app.use('/temen-curhat', TemenCurhatRoute)
// app.use('sesi-curhat', SesiCurhatRoute)

app.get('/', (req, res) => {res.render('home')})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
