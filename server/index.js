const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors(), express.static('./'));

app.get('/', (req, res) => {
  res.redirect('/data.json');
})

app.listen(3000, () => {
  console.log('Listening on port 3000: http://localhost:3000/');
});