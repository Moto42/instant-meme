const express = require('express');
const router = express.Router();

const commonHandlers = {
  e405: function(req, res, next) {
    res.status(405).send('This Api only accepts GET requests.');
  },
};



function memeHandler(req, res, next) {
  const memeName = req.param('memeName');
  console.log(req.params);
  if(!memeName) {
    res.status(400).json({message: 'No meme template specified'});
  }
  else {
    res.send('');
  }
}

router.route('/:memeName?')
  .get(memeHandler)
  .post(commonHandlers.e405)
  .put(commonHandlers.e405)
  .delete(commonHandlers.e405);


module.exports = router;