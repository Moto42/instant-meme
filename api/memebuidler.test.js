const { test } = require("@jest/globals");
const memebuilder = require('./memebuilder');

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

test.todo('tests');