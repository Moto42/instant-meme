const express = require('express');
const router = express.Router();
const requestParser = require('./api/requestParser');
const memeBuilder = require('./api/memebuilder');

const commonHandlers =  require('./commonHandlers');

async function memeHandler(req, res, _next) {
  const memeName = req.params['memeName'];
  if(!memeName) {
    res.status(400).json({message: 'No meme template specified'});
  }
  else {
    let template;
    try {
      template = await requestParser(req);
    }
    catch(e) {
      res.status(404).send(`Could not find a meme named ${memeName}.`);
      return;
    }
    const meme = await memeBuilder(template);
    res.set('Content-Type', 'image/png')
    res.send(meme);
  }
}

router.route('/:memeName?')
  .get(memeHandler)
  .post(commonHandlers.e405)
  .put(commonHandlers.e405)
  .delete(commonHandlers.e405);

module.exports = router;