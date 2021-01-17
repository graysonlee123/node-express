const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3030

app.use(bodyParser.json())

app.use('/api', require('./routes/routes'))

app.listen(port, function () {
  console.log(`Up and running at http://localhost:${port}`)
})
