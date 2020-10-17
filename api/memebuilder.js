const { createCanvas, loadImage, registerFont } = require('canvas')

/** writes tet to a context, wrapping at a maxwidth.
 * 
 * @param {CanvasRenderingContext2D} context Canvase contex to be written to.
 * @param {String} text The text to be written
 * @param {Number} x starting position of the text
 * @param {Number} y starting position of the text
 * @param {Number} maxwidth 
 * @param {Number} fontHeight 
 */
function wraptext(context, text, x, y, maxwidth,fontHeight) {
  fontHeight = Number(fontHeight.replace('px',''));
  const lines = [''];
  const words = text.split(' ');
  //create the lines
  for(let word of words) {
    const lastLine = lines[lines.length-1] || '';
    const length_lastline = context.measureText(lastLine.trim()).width;
    const length_word = context.measureText(word.trim()).width;
    if(length_lastline + length_word <= maxwidth) lines[lines.length-1] = lastLine +' '+ word;
    else lines[lines.length] = word;
  }
  //write the lines
  if(lines[0].length = 0) lines.shift;
  for(let index in lines){
    let line = lines[index].trim();
    [x,y,fontHeight, index] = [x,y,fontHeight, index].map(n => Number(n));
    context.fillText(line,x,(y+(fontHeight*index)),maxwidth);
  }
}

/**
 * 
 * @param {TemplateData} templateData 
 * @returns {Buffer} readable Buffer of PNG file.
 */
async function MemeBuilder(templateData){
  const fontFile = templateData.font || 'OpenSans-Regular.ttf';
  registerFont(`instant-meme/fonts/${fontFile}`,{family: "daFont"});
  const image = await loadImage(`instant-meme/templates/${templateData.template}`);
  const canvas = createCanvas(image.naturalWidth,image.naturalHeight, 'png');
  const ctx = canvas.getContext('2d');
  ctx.font = `${templateData.font_size} "daFont"`;
  ctx.drawImage(image,0,0);
  for(textData of Object.values(templateData.texts)) {
    maxwidth_default = textData.x ? image.naturalWidth - textData.x : image.naturalWidth - 100;
    const {text='',x=100,y=100,h=null,w=null,maxwidth=maxwidth_default} = textData;
    wraptext(ctx,text,x,y,maxwidth,templateData.font_size);
  }
  return canvas.toBuffer();
}

 module.exports = MemeBuilder;