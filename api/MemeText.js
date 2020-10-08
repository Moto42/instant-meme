/**
 * A MemeText object describes the text to display, as well as the X,Y position
 * and, optionaly, the maximum width and height.
 */

const { prototype } = require("module");

function MemeText(text='',x=0,y=0,w=null,h=null) {
  this.text = text;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

MemeText.fromObject = function (obj) {
  const {text,x,y,w,h} = obj;
  return new MemeText(text,x,y,w,h);
}

module.exports = MemeText;