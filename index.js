const express = require('express')
const app = express()
const port = 15862

app.get('/', (req, res) =>
  res.send('Greetings from Pichaaun...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
