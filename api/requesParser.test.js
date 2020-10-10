const { response } = require('express');
const requestParser = require('./requestParser');

const testData = {
  template : 'test-meme.png',
  texts : {
    t1: {
      text:'watermellon iced tea',
      x: 10,
      y: 20,
      h: 100,
      w: 200,
    },
    font: 'OpenSans-Regular.ttf',
    font_size: '30px',
  },
}

const mockRequest_plain = {
  params: {
    memeName: 'test-meme',
  },
  query: {
    t1: 'watermellon iced tea',
  }
};
const mockRequest_encoded = {
  params: {
    memeName: 'test-meme',
  },
  query: {
    t1: 'watermellon%20iced%20tea',
  }
};

describe('Parses requests correctly', () => {
  test('plaintext', async (done) => {
    requestParser(mockRequest_plain)
      .then(response => {
        expect(response).toEqual(testData);
        done();
      });
  });
});
