const router = require('express').Router();
const controllers = require('../controllers/users')

router.get('/', controllers.getUsers);
router.get('/:id', controllers.getUser);

module.exports = router;