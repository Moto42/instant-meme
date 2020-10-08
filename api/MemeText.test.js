const MemeText = require('./MemeText');
const { test, expect, describe } = require('@jest/globals');

const testData = {
  text: 'www.wesleywilliams.dev',
  x: 10,
  y: 20,
  h: 100,
  w: 200,
};
const testJson = JSON.stringify(testData); 

test('instantiates without crashing', () => {
  expect( ()=>{ const t = new MemeText() } ).not.toThrow();
});
test('has correct constructor/prototype', () => {
  const mt = new MemeText();
  expect(mt.constructor.name).toEqual('MemeText');
  // expect(mt.prototype).toEqual(MemeText.prototype);
});
describe('all required keys...', () =>{
  test('are present', () => {
    const mt = new MemeText();
    const keys = ['text','x','y','w','h'];
    keys.forEach(key => expect(mt).toHaveProperty(key));
  });
  test('have sensible defaults', () => {
    const mt = new MemeText();
    const keys = [
      ['text', ''],
      ['x',0],
      ['y',0],
      ['w',null],
      ['h',null],
    ];
    keys.forEach(([key,value])=> expect(mt).toHaveProperty(key, value));
  });
});

test('can be built with specified values', () => {
  const {text, x, y, w, h} = testData;
  const mt = new MemeText(text, x, y, w, h);
  expect(mt.text).toEqual(text);
  expect(mt.x).toEqual(x);
  expect(mt.y).toEqual(y);
  expect(mt.w).toEqual(w);
  expect(mt.h).toEqual(h);
});

test('can be built from object', () => {
  const {text, x, y, w, h} = testData;
  const mt = new MemeText(testData);
  expect(mt.text).toEqual(text);
  expect(mt.x).toEqual(x);
  expect(mt.y).toEqual(y);
  expect(mt.w).toEqual(w);
  expect(mt.h).toEqual(h);
});

describe('MemeText.fromObject', () => {
  test('does not crash', () => {
    expect( ()=> {const mt = MemeText.fromObject(testData)} ).not.toThrow();
  });
  test('values specified in object are assigned correctly', () => {
    const mt = MemeText.fromObject(testData);
    expect(mt.text).toEqual(testData.text);
    expect(mt.x).toEqual(testData.x);
    expect(mt.y).toEqual(testData.y);
    expect(mt.w).toEqual(testData.w);
    expect(mt.h).toEqual(testData.h);
  });
});
