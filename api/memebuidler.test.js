const { test } = require("@jest/globals");
const {toMatchImageSnapshot} = require('jest-image-snapshot');
const MemeBuilder = require('./MemeBuilder');

expect.extend({
  toMatchImageSnapshot,
});

const testData = {
  template: 'test-meme.png',
  texts: {
    t1: {
      text: 'nuts',
      x: 10,
      y: 20,
    },
    t2: {
      text: 'grapefruit',
      x: 30,
      y: 50,
    }
  },
  font: 'OpenSans-Regular.ttf',
  font_size: '30px',
}
const testData__text_wrapping = {
  template: 'test-meme.png',
  texts: {
    t1: {
      text: 'nuts',
      x: 10,
      y: 20,
      maxwidth: 200,
    },
    t2: {
      text: 'grapefruit watermellon oranges marmalade sugar wheat butter oats',
      x: 30,
      y: 50,
      maxwidth: 400,
    }
  },
  font: 'OpenSans-Regular.ttf',
  font_size: '30px',
}
const testData__text_wrapping__no_width = {
  template: 'test-meme.png',
  texts: {
    t1: {
      text: 'nuts',
      x: 10,
      y: 20,
      maxwidth: 200,
    },
    t2: {
      text: 'grapefruit watermellon oranges marmalade sugar wheat butter oats',
      x: 30,
      y: 50
    }
  },
  font: 'OpenSans-Regular.ttf',
  font_size: '30px',
}

test('runs without crashing', async (done) => {  
  await expect(()=>MemeBuilder(testData).then( ()=>done() ) ).not.toThrow();
});


describe('regression testing', () => {
  test('No wrapping text', async (done) => {
    MemeBuilder(testData)
      .then((image)=>{ expect(image).toMatchImageSnapshot(); })
      .then(() => { done() })
  });
  test('Yes wrapping text', async (done) => {
    MemeBuilder(testData__text_wrapping)
      .then((image)=>{ expect(image).toMatchImageSnapshot(); })
      .then(() => { done() })
  });
  test('Yes wrapping text, no maxwidth give', async (done) => {
    MemeBuilder(testData__text_wrapping__no_width)
      .then((image)=>{ expect(image).toMatchImageSnapshot(); })
      .then(() => { done() })
  });
});
