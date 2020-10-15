/**
 * This bit parses a request and ;returns a memetemplate
 */

const {stripPNG} = require('../randomHelpers');
const fs = require('fs');

module.exports = async function (req) {
  const memeName = stripPNG(req.params.memeName);
  const fileName = `${memeName}.json`;
  const json = await fs.promises.readFile(`instant-meme/templates/${fileName}`, 'utf-8');
  let template = JSON.parse(json);
  const texts = Object.keys(template.texts);
  for(let key of texts){
    if(req.query[key] !== undefined){
      const decodedText = decodeURIComponent( req.query[key] );
      template.texts[key].text = decodedText;
    }
  }
  return template;
}