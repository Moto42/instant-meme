/**
 * This bit parses a request and ;returns a memetemplate
 */

const {stripPNG} = require('../randomHelpers');
const fs = require('fs');

module.exports = async function (req) {
  const memeName = stripPNG(req.params.memeName);
  const fileName = `${memeName}.json`;
  const json = await fs.promises.readFile(`instant-meme/templates/${fileName}`, 'utf-8');
  let obj = JSON.parse(json);
  
  const texts = Object.entries(req.query).filter(e => /^t\d/.test(e[0]));
  for(let t of texts){
    const [key, value] = t;
    obj.texts[key].text = decodeURIComponent(value);
  }

  return obj;
}