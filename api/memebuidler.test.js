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

test('runs without crashing', async (done) => {  
  await expect(()=>MemeBuilder(testData).then( ()=>done() ) ).not.toThrow();
});

test('regression testing', async (done) => {
  MemeBuilder(testData)
    .then((image)=>{ expect(image).toMatchImageSnapshot(); })
    .then(() => { done() })
});
