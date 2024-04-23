const tracer = require('dd-trace').init();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')

  fetch('https://google.com').then((response) => {
      return 'ok';
    }).then((text) => {
      console.log(text);
    });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})