const router = require('express').Router();
// const path = require('path');
// const { cards } = require('../data/cards.json');

// const data = require('../data/cards.json')

// router.get('/cards', function (req, res) {

//   res.send(data);
// })

router.get('/cards', (req, res) => {
  res.send('Hello world')
})

// const cardData = (req, res) => {
//   router(console.log(req))
// }

module.exports = router;