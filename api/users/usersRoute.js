const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/userModel');

router.get('/', (req, res, next) => {
  User.find({})
  .exec()
  .then(user => {
    console.log(user);
    res.status(200).json({
      message: 'All users',
      arrayOfUsers: user // array of objects
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    })
  });
});

router.get('/:userid', (req, res, next) => {
  const id = req.params.userid;
  User.findById(id)
  .exec()
  .then(result => {
    res.status(200).json({
      id,
      result,
      message: 'This is only one user'
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    })
  });
  
});

router.post('/', (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username
  });
  user.save()
  .then(resultUser => {
    res.status(201).json({
      message: 'Created User successfully',
      createdUser: {
        id: resultUser._id,
        name: resultUser.name
      },
      request: {
        type: 'POST',
        url: "http://localhost:5000/users/" + resultUser._id,
        message: 'the url still doesnt work ofc because i havent yet added that path'
      }
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    })
  });
});

router.patch('/:userid', (req, res, next) => {
  const id = req.params.userid;
  const updateOps = {};
  // for (const ops of req.body) {
  //   updateOps[ops.propName] = ops.value;
  // }
  console.log(req.body.username);
  updateOps['username'] = req.body.username;
  User.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User updated"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.delete('/:userid', (req, res, next) => {
  const id = req.params.userid;
  User.remove({ _id: id })
  .exec()
  .then(result => {
    res.status(200).json({
      message: "User deleted",
      request: {
        type: "Delete",
        url: "http://localhost:5000/users"
      }
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});

module.exports = router;