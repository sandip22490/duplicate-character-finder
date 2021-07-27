export default function findDuplicateChars(message = ''): { [key: string]: number } {
  return [...message].reduce((
    acc: { [key: string]: number; },
    curr: string,
    index: number,
    arr: string[],
  ) => {
    if (curr.match(new RegExp('[A-Za-z]'))) {
      if (acc[curr]) {
        acc[curr] += 1;
      } else if (arr.lastIndexOf(curr) > index) {
        acc[curr] = 1;
      }
    }

    return acc;
  }, {});
}

const inputString = 'Hello World';

const result = findDuplicateChars(inputString);

console.log(JSON.stringify(result, null, 2));
