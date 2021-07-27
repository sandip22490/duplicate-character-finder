import findDuplicateChars from './index';

describe('Test findDuplicateChars function', () => {
  test('Happy Path', () => {
    const response = {
      l: 3,
      o: 2,
    };

    expect(findDuplicateChars('Hello World')).toStrictEqual(response);
  });

  test('Empty String', () => {
    const response = {};

    expect(findDuplicateChars('')).toStrictEqual(response);
  });

  test('No Repeating Characters', () => {
    const response = {};

    expect(findDuplicateChars('Elon Musk')).toStrictEqual(response);
  });

  test('Case Sensitive', () => {
    const response = {};

    expect(findDuplicateChars('Tesla MODEL')).toStrictEqual(response);
  });
});
