const bcrypt = require('bcrypt')

class Bcrypt{
    static hash(pwInput){
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(pwInput, salt)
    }
    static compare(pwInput, hashResult){
        return bcrypt.compareSync(pwInput, hashResult)
    }
}
module.exports = Bcrypt