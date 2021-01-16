const express = require('express');
const router = require('./routes/cards');
// const bodyParser = require('body-parser');
const app = express();
const { PORT = 3000 } = process.env;

// const data = require('./data/cards.json')

// app.get('/cards', (req, res) => {
//   res.send(data);
// })

app.use(express.static('public'));
app.use('/', router);

// app.use(bodyParser.urlencoded({ extended: true }));



app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})