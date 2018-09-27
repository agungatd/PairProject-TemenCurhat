const crypto = require('crypto');

class Helper{
    static getHash(password){
        const secret = 'qerjalemburbagaiquda';
        const hash = crypto.createHmac('sha256', secret)
                    .update(password)
                    .digest('hex');
        return hash
    }

}

module.exports = Helper