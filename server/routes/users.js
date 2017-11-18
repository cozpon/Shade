const express = require('express');
const router = express.Router();

const db = require('../models');
const User = db.user;
const Message = db.message;
const Status = db.status;


//api/users gets you JUST the users

router.get('/', (req, res) => {
  return User.findAll()
  .then(users => {
    return res.json(users);
  })
  .catch((err) => {
    console.log(err);
  })
});

//api/users/all gets you all users + their related tables

router.get('/all', (req, res) => {
  return User.findAll({
    include: [
      { model: Message, as: 'shader' },
      { model: Message, as: 'victim' },
      { model: Status, as: 'status' }
    ]
  })
  .then((users) => {
    return res.json(users);
  })
  .catch((err) => {
    console.log(err);
  });
});

module.exports = router;