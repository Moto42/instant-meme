const { test } = require("@jest/globals");
const MemeBuilder = require('./MemeBuilder');

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
  }
}

test('runs without crashing', async (done) => {  
  await expect(()=>MemeBuilder(testData).then( ()=>done() ) ).not.toThrow();
});


var fs = require("fs");
MemeBuilder(testData)
  .then(buf => fs.writeFileSync("test.png", buf));

