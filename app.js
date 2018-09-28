const express = require('express')
const app = express()
const port = 3001
const Nexmo = require('nexmo')

const session = require('express-session')
app.use(session({
  secret: 'keyboard cat',
  resave: false,
}));

//init nexmo
const nexmo = new Nexmo({
  apiKey: '151e5153',
  apiSecret: 'lgxLpeqTPWfehi64'
}, {debug:true})

const PencurhatRoute = require('./routes/pencurhat')
const TemenCurhatRoute = require('./routes/temencurhat')
// const SesiCurhatRoute = require('./routes')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // for parsing application/json

app.use(express.static(__dirname + '/public'));

app.use('/pencurhat', PencurhatRoute)
app.use('/temen-curhat', TemenCurhatRoute)
// app.use('sesi-curhat', SesiCurhatRoute)


//send sms"
app.get('/sms-sent', (req, res)=>{
  res.render('sendSMS')
})
app.post('/sms-sent', (req, res)=>{
  const number = req.body.number
  const text = req.body.text
// console.log(typeof number)
  nexmo.message.sendSms(
    '6287888587005', number, text, {type: 'unicode'}, 
    (err, responseData)=>{
      if(err) console.log(err);
      else console.dir(responseData)
    }
  )
})

app.get('/', (req, res) => {res.render('home')})

app.listen(port, () => console.log(`app running on ${port} with ❤️`))
