const express = require('express');
const router = require('./routes');
const app = express();
const { PORT = 3000 } = process.env;

app.use('/', express.static('public'));
app.use('/', router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});
