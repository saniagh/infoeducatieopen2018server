const User = require('mongoose').model('User');
const express = require('express');
const router = new express.Router();
const uuid = require('uuid');
const scraper = require('google-search-scraper');

const RateLimit = require('express-rate-limit');

let createGroupLimiter = new RateLimit({
  windowMs: 10 * 60 * 1000 * 6 * 24, // max 1 users per day
  delayAfter: 3,
  delayMs: 3 * 1000,
  max: 1,
  message: 'Too many orders in a short period of time',
});

const formValidator = require('../middleware/form-validator.js');
const formValidatorPost = require('../middleware/form-validator-post.js');

router.get('/generate-user', createGroupLimiter, (req, res) => {

  let recoveryKey = uuid.v4();

  let userData = {
    recoveryKey: recoveryKey,
    sites: [],
  };

  let newUser = new User(userData);
  newUser.save((err) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000)
        return res.status(400).json({
          message: 'An internal error has occurred.',
        });
    }

    console.log(recoveryKey);

    return res.json({
      recoveryKey: recoveryKey,
    });
  });

});

router.get('/get-user', (req, res) => {
  User.find({ recoveryKey: req.query.recoveryKey }, (err, user) => {
    if (err) {
      return res.status(400).json({
        message: 'An intenal error has occurred.',
      });
    }

    if (user.length === 0) {
      return res.status(404).json({
        message: 'A user with this key does not exist!',
      });
    }

    //console.log(user);

    return res.json({
      sites: user[0].sites,
    });
  });
});

// tried to scrape google search results
router.get('/get-recommendations', (req, res) => {
  User.find({ recoveryKey: req.query.recoveryKey }, (err, user) => {
    if (err) {
      return res.status(400).json({
        message: 'An intenal error has occurred.',
      });
    }

    if (user.length === 0) {
      return res.status(404).json({
        message: 'A user with this key does not exist!',
      });
    }

    //console.log(user);

    let sites = user[0].sites;

    let recommendations = [];

    for (let i = sites.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [sites[i], sites[j]] = [sites[j], sites[i]];
    }

    for (let i = 0; i < 3; i++) {
      let options = {
        query: sites[i],
        limit: 3,
      };
      scraper.search(options, function (err, url, meta) {
        // This is called for each result
        if (err) console.log(err);
        console.log(url);
      });
    }

    return res.json({
      sites: user[0].sites,
    });
  });
});

router.delete('/delete-user', (req, res) => {
  User.deleteOne({ recoveryKey: req.query.recoveryKey }, (err) => {
    if (err) {
      return res.status(404).json({
        message: 'User does not exist.',
      });
    }

    return res.json({
      success: true,
    });
  });
});

router.post('/update-user', (req, res) => {

  let newSites = JSON.parse(req.query.sites);

  User.updateOne({ recoveryKey: req.query.recoveryKey }, {
    $set: {
      sites: newSites,
    },
  }, (err) => {
    if (err) {
      return res.status(400).json({
        message: 'An internal error has occurred.',
      });
    }

    return res.json({
      message: 'User has been updated.',
    });
  });
});

module.exports = router;
