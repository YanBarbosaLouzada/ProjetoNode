const express = require('express')
const cors = require('cors')
const admin = require('firebase-admin');
const usercontroller = require('./routes/userrouter')
require('dotenv').config()


var app = express();
app.use(cors())
app.use(express.json())

admin.initializeApp({
  credential: admin.credential.cert('./proj-node-react-firebase-firebase-adminsdk-e02i2-d17ea84acd.json'),
  databaseURL: 'https://proj-node-react-firebase-default-rtdb.firebaseio.com/'
});

app.use(usercontroller)

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
