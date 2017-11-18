const express = require('express');

const users = require('./users');
const messages = require('./messages');
const statuses = require('./statuses');

const router = express.Router();

router.use('/users', users);
router.use('/messages', messages);
router.use('/statuses', statuses);

module.exports = router;