export const data = Array(2048)
  .fill(1)
  .map((item, index) => {
    return {
      id: index,
      address: Number(index).toString(16).toUpperCase(),
      zero: `0${index + 1}`,
      one: `1${index}`,
      two: '2',
      three: '3',
      four: '4',
      five: '5',
      six: '6',
      seven: '7',
      eight: '8',
      nine: '9',
      A: 'A',
      B: 'B',
      C: 'C',
      D: 'D',
      E: 'E',
      F: 'F',
    };
  });

export const columnsList = [
  {
    column: 'G',
    dataKey: '0',
  },
  {
    column: 'H',
    dataKey: '1',
  },
  {
    column: 'I',
    dataKey: '2',
  },
  {
    column: 'J',
    dataKey: '3',
  },
  {
    column: 'K',
    dataKey: '4',
  },
  {
    column: 'L',
    dataKey: '5',
  },
  {
    column: 'M',
    dataKey: '6',
  },
  {
    column: 'N',
    dataKey: '7',
  },
  {
    column: 'O',
    dataKey: '8',
  },
  {
    column: 'P',
    dataKey: '9',
  },
  {
    column: 'A',
    dataKey: 'A',
  },
  {
    column: 'B',
    dataKey: 'B',
  },
  {
    column: 'C',
    dataKey: 'C',
  },
  {
    column: 'D',
    dataKey: 'D',
  },
  {
    column: 'E',
    dataKey: 'E',
  },
  {
    column: 'F',
    dataKey: 'F',
  },
];
