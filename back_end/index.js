/** imports */

const express = require('express');

const app = express();

const port = 3000;

// Connection to server get test;

/*app.get('/', (req, res) => {

  res.send('Hello World!')
})*/

// handling post requests :

app.post('/', (req, res) => {

    res.send('response ok from ionic back end')
})

// Connection to server status.

app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)
})
