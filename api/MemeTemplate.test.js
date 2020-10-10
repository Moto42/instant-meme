const { test, expect, describe } = require('@jest/globals');
const MemeTemplate = require('./MemeTemplate');

const testData = {
  template : 'testMeme.jpg',
  texts : {
    t1: {
      text:'watermellon',
      x: 10,
      y: 20,
      h: 100,
      w: 200,
    },
    font: 'OpenSans-Regular.ttf',
    font_size: '30px',
  },
}

describe('MemeTemplate', () => {
  test('instantiates without crashing', () => {
    expect( () => { const m = new MemeTemplate() } ).not.toThrow();
  });
  test('has all required keys', () => {
    const m = new MemeTemplate();
    expect(m).toHaveProperty('template');
    expect(m).toHaveProperty('texts');
  });
  test('assignes values correctly', () => {
    const {template, texts} = testData;
    const m = new MemeTemplate(template, texts);
    expect(m).toHaveProperty('template', template);
    expect(m).toHaveProperty('texts', texts);
  });
});

describe('MemeTemplate.fromObject()', () => {
  test('does not throw', () => {
    expect(()=>{ const s = MemeTemplate.fromObject(testData) }).not.toThrow();
  });
  test('assignes values correctly', () => {
    const {template, texts} = testData;
    const m = new MemeTemplate.fromObject(testData);
    expect(m).toHaveProperty('template', template);
    expect(m).toHaveProperty('texts', texts);
  });
  test('main constructor handoff', () => {
    const mt = new MemeTemplate(testData);
    expect(mt).toHaveProperty('template', testData.template);
    expect(mt).toHaveProperty('texts', testData.texts);
  });
});

test('MemeTemplate.prototype.getTexts()', () => {
  const mt = new MemeTemplate(testData);
  const texts = mt.getTexts();
  expect(texts).toEqual(expect.arrayContaining([testData.texts.t1]));
});