import React from 'react';

const ReduceFunc = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const flatten = (arr) => {
    const initialValue = 1;
    // reduce 的参数有两个 callbackFun，initValue， 其中callbackFun有四个参数： accumulate（累计值），currentValue（当前值）、currentIndex（当前索引）、array（数组本身）
    const sumWithInitial = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
    return sumWithInitial;
  };

  console.log(111, flatten(array));
  return <div>ReduceFunc</div>;
};

export default ReduceFunc;
