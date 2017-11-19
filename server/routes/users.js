const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const saltRounds = 12;

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
      { model: Message, as: 'offense' },
      { model: Message, as: 'defense' },
      { model: Status, as: 'user_status' }
    ]
  })
  .then((users) => {
    return res.json(users);
  })
  .catch((err) => {
    console.log(err);
  });
});

router.post('/', (req, res) => {
  //note: req.body will need an emoji field w/ emoji id.
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      User.create({
        username: req.body.username,
        password: hash,
        emoji_id: req.body.emoji
      })
      .then((user) => {
        return res.json(user);
      })
      .catch((err) => {
        console.log(err);
      });
    });
  });
});

module.exports = router;