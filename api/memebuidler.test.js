const { test } = require("@jest/globals");
const MemeBuilder = require('./MemeBuilder');

const testData = {
  template: 'testmeme.png',
  texts: {
    t1: {
      text: 'strawberrry',
      x: 10,
      y: 20,
    },
    t2: {
      text: 'grapefruit',
      x: 30,
      y: 50,
    }
  }
}

test('runs without crashing', () => {
  expect(()=>{const m = MemeBuilder(testData)}).not.toThrow();
});