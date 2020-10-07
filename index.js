const express = require('express');
const router = express.Router();

const commonHandlers = {
  e405: function(req, res, next) {
    res.status(405).send('This Api only accepts GET requests.');
  },
};

function sendMeme(req, res, next) {
  res.send('');
}

router.route('/:memeName?')
  .get(sendMeme)
  .post(commonHandlers.e405)
  .put(commonHandlers.e405)
  .delete(commonHandlers.e405);


module.exports = router;