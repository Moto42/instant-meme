function MemeTemplate(template=null, texts={}) {
  if(template !== null && typeof template === 'object') return MemeTemplate.fromObject(template);
  else {
    this.template = template;
    this.texts = texts;
  }
}

MemeTemplate.prototype.getTexts = function () {
  return Object.values(this.texts);
}

MemeTemplate.fromObject = function (obj) {
  return Object.assign(new MemeTemplate, obj);
}

module.exports = MemeTemplate;

