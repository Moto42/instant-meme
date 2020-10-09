const { createCanvas, loadImage } = require('canvas')

/**
 * 
 * @param {TemplateData} templateData 
 * @returns {ReadableStream} readable stream of PNG file.
 */
async function MemeBuilder(templateData){
  const image = await loadImage(`templates/${templateData.template}`)
  const canvas = createCanvas(image.naturalWidth,image.naturalHeight, 'png');
  const ctx = canvas.getContext('2d')
  ctx.drawImage(image,0,0);
  for(textData of Object.values(templateData.texts)) {
    const {text='',x=100,y=100,h=null,w=null} = textData;
    ctx.fillText(text,x,y);
  }
  return canvas.toBuffer();
}

 module.exports = MemeBuilder;