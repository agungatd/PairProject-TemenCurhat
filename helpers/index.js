const crypto = require('crypto');
const Nexmo = require('nexmo')

//init nexmo
const nexmo = new Nexmo({
    apiKey: '151e5153',
    apiSecret: 'lgxLpeqTPWfehi64'
  }, {debug:true})
  
class Helper{
    static getHash(password){
        const secret = 'qerjalemburbagaiquda';
        const hash = crypto.createHmac('sha256', secret)
                    .update(password)
                    .digest('hex');
        return hash
    }

    static sendSMS(num1, num2, text){
        nexmo.message.sendSms(
          '6287888587005', num1, text, {type: 'unicode'}, 
          (err, responseData)=>{
            if(err) console.log(err);
            else console.dir(responseData)
          })
          nexmo.message.sendSms(
            '6287888587005', num2, text, {type: 'unicode'}, 
            (err, responseData)=>{
              if(err) console.log(err);
              else console.dir(responseData)
            })
    }

}

module.exports = Helper