const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const User = require('./models/User')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/signup', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.status(200).json({'message': 'User saved successfully'})
    }).catch((err) => {
        res.status(500).json({'error': err.message})
    })
})

app.listen(8000, () => {
    console.log('server started')
})