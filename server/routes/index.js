const express = require('express');

const users = require('./users');
const messages = require('./messages');
const messageStatuses = require('./messageStatuses');
const userStatuses = require('./userStatuses');

const router = express.Router();

router.use('/users', users);
router.use('/messages', messages);
router.use('/messagestatuses', messageStatuses);
router.use('/userstatuses', userStatuses);

module.exports = router;