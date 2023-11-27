export const dataSource = {
  DUT: Array(100)
    .fill(1)
    .map((item, index) => {
      return {
        key: index,
        DUTID: index,
        site: `${item}-${index}`,
        pass: index,
        fail: index,
        total: index * 2,
        yield: index === 0 ? '0' : '50',
      };
    }),
  SBIN: Array(100)
    .fill(1)
    .map((item, index) => {
      return {
        key: index,
        BINID: index,
        pass: index,
        fail: index,
        total: index * 2,
        yield: index === 0 ? '0' : '50',
      };
    }),
  HBIN: Array(100)
    .fill(1)
    .map((item, index) => {
      return {
        key: index,
        BINID: index,
        pass: index,
        fail: index,
        total: index * 2,
        yield: index === 0 ? '0' : '50',
      };
    }),
  CASE: Array(100)
    .fill(1)
    .map((item, index) => {
      return {
        key: index,
        NAME: '',
        total: index * 2,
        Pass: index,
        fail: index,
        yield: index === 0 ? '0' : '50',
        duts: {
          dutid: `${item}-${index}`,
          pass: index + 1,
        },
      };
    }),
};
