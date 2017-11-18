const express = require('express');
const router = express.Router();

const db = require('../models');
const Message = db.message;
const User = db.user;
const Status = db.status;

router.get('/', (req, res) => {
  return Message.findAll({
    include:[
      { model: User, as: 'shader' },
      { model: User, as: 'victim' },
      { model: Status, as: 'status' }
    ]
  })
  .then(messages => {
    return res.json(messages);
  })
  .catch((err) => {
    console.log(err);
  })
});

router.post('/', (req, res) => {
  //note: no idea how media will work lol. there will be some uploading stuff going on. just a placeholder.
  Message.create({
    body: req.body.body,
    media: req.body.media,
    shader_id: req.user.id,
    victim_id: req.body.victim
  })
  .then((message) => {
    return res.json(message);
  })
  .catch((err) => {
    console.log(err);
  });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  return Message.findById(id, {
    include:[
      { model: User, as: 'shader' },
      { model: User, as: 'victim' },
      { model: Status, as: 'status'}
    ]
  })
  .then(message => {
    return res.json(message);
  })
  .catch((err) => {
    console.log(err);
  });
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;


});

module.exports = router;