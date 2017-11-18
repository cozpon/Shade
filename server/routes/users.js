const express = require('express');
const router = express.Router();

const db = require('../models');
const User = db.user;

// router.get('/', (req, res) => {
//   return User.findAll()

// });


module.exports = router;