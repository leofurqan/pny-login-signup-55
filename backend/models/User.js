const mongoose = require('mongoose')

const connect = async () => {
    await mongoose.connect("mongodb+srv://leo:leofurqan@cluster0.wqsahpd.mongodb.net/pny?retryWrites=true&w=majority")
    .then(() => {
        console.log('db connected')
    }).catch((err) => {
        console.log(err)
    })
}

connect()

const userSchema = mongoose.Schema({
    'name':  {
        type: String,
        isRequired: true
    },
    'username':  {
        type: String,
        isRequired: true
    },
    'email': {
        type: String,
        isRequired: true
    },
    'password': {
        type: String,
        isRequired: true,
        minLength: 8
    }
})

const userModel = mongoose.model('Users', userSchema)

module.exports = userModel