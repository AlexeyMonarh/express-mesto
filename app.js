const express = require('express');
const router = require('./routes');
const app = express();
const { PORT = 3000 } = process.env;

app.use('/', router);
app.use('/', express.static('public'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});



// const bodyParser = require('body-parser');
// app.use('/', (req, res, next) => {
//   console.log(`Request to ${req.path}`);
//   next();
// })

// app.use(bodyParser.urlencoded({ extended: true }));
