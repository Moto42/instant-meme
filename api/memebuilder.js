const { createCanvas, loadImage, registerFont } = require('canvas')

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
    const {text='',x=100,y=100,h=null,w=null} = textData;
    ctx.fillText(text,x,y);
  }
  return canvas.toBuffer();
}

 module.exports = MemeBuilder;