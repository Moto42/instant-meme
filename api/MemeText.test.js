const MemeText = require('./MemeText');
const { test, expect, describe } = require('@jest/globals');
const { keys } = require('lodash');

test('instantiates without crashing', () => {
  expect( ()=>{ const t = new MemeText() } ).not.toThrow();
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