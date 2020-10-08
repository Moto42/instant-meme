/**
 * A MemeText object describes the text to display, as well as the X,Y position
 * and, optionaly, the maximum width and height.
 */


function MemeText(text='',x=0,y=0,w=null,h=null) {
  this.text = text;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
}

module.exports = MemeText;