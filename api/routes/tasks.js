var express = require('express');
var router = express.Router();

/* GET tasks listing. */
router.get('/', function(req, res, next) {
  res.send([
    { 
      id: 0,
      taskName: 'Clean the room',
      isDone: false
    },
    { 
      id: 1,
      taskName: 'Buy the cinema tickets',
      isDone: false
    },
    { 
      id: 2,
      taskName: 'Go swimming',
      isDone: false
    },
    { 
      id: 3,
      taskName: 'Send the parcel',
      isDone: false
    },
  ]);
});

module.exports = router;
