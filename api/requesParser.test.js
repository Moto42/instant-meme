const { response } = require('express');
const requestParser = require('./requestParser');

const testData = {
  "template": "test-meme.png",
  "texts" : {
    "t1": {
      "text":"watermellon iced tea",
      "x": 10,
      "y": 20,
      "h": 100,
      "w": 200
    }
  },
  "font": "OpenSans-Regular.ttf",
  "font_size": "30px"
}
const mock_request_underscores = {
  params: {
    memeName: 'test-meme',
  },
  query: {
    t1: 'watermellon_iced__tea',
  }
};
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
const mockRequest_excess_texts = {
  params: {
    memeName: 'test-meme',
  },
  query: {
    t1: 'watermellon iced tea',
    t2: 'strawberry sherbert',
    t3: 'orange jam',
    t4: 'eggplant sundae',
  }
};

describe('Parses requests correctly', () => {
  test('plaintext', async (done) => {
    requestParser(mockRequest_plain)
      .then(response => {
        expect(response).toMatchObject(testData);
        done();
      });
  });
  test('url encoded', async (done) => {
    requestParser(mockRequest_encoded)
      .then(response => {
        expect(response).toMatchObject(testData);
        done();
      });
  });
  test('with_underscores', async (done) => {
    requestParser(mock_request_underscores)
      .then(response => {
        expect(response).toMatchObject(testData);
        done();
      });
  });
});

test('memenames ending in .png and not are equal', async (done) => {
  const mock_request__yes_png = {
    params : {memeName: 'test-meme.png'},
    query: {t1: 'celery'},
  };
  const mock_request__no_png = {
    params : {memeName: 'test-meme'},
    query: {t1: 'celery'},
  };
  const result__yes_png = await requestParser(mock_request__yes_png);
  const result__no_png = await requestParser(mock_request__no_png);
  expect(result__yes_png).toMatchObject(result__no_png);
  done();
});

test('discard extra textblocks', async (done) => {
  requestParser(mockRequest_excess_texts)
  .then(response => {
    expect(response).toMatchObject(testData);
    done();
  });
});