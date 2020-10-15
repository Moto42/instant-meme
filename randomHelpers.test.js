const {
  stripPNG,
  underscoresToSpaces,
} = require('./randomHelpers');

describe('stripPNG(str)', () => {
  const strings = [
    'brain.png',
    '.png',
    'bellringer',
    'tobor.png.gop',
    'tollbooth.png',
  ];
  strings.forEach(str => {
    test(str, () => {
      const result = /.png$/.test(stripPNG(str));
      expect(result).toEqual(false);
    });
  });
  test('null', () => {
    const result = /.png$/.test(stripPNG(null));
    expect(result).toEqual(false);
  });
  test('22', () => {
    const result = /.png$/.test(stripPNG(22));
    expect(result).toEqual(false);
  });
});

describe('underscoresToSpaces(str)', () => {
  const test_cases = [
    'this is a test',
    'this_is_a_test',
    'this is_a_test',
    'this is_____a_test',
    'this_  is a test',
    'this _ is a test',
    'this___is_ _a_test',
  ];
  const correct = 'this is a test';
  test_cases.forEach( str => {
    test(str, () => {
      const result = underscoresToSpaces(str);
      expect(result).toEqual(correct);
    });
  });
})