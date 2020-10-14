const {
  stripPNG,
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