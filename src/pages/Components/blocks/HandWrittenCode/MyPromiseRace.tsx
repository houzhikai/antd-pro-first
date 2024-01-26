import { Button } from 'antd';
import React from 'react';

const MyPromiseRace = ({ className }) => {
  const handleClickPromiseRace = () => {
    const promise1 = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise1 resolve');
      }, 1000);
    });
    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Promise2 resolve');
      }, 0);
    });
    // 自定义写法
    const myPromiseRace = (promiseList) => {
      return new Promise((res, rej) => {
        for (let i = 0; i < promiseList.length; i++) {
          promiseList[i]
            .then((resolve) => res(resolve))
            .catch((error) => rej(error));
        }
      });
    };
    myPromiseRace([promise1, promise2])
      .then((res) => console.log('myPromiseRace---resolve', res))
      .catch((error) => console.log('myPromiseRace---reject', error));
    // Promise.race 标准写法
    Promise.race([promise2, promise1])
      .then((values) => console.log({ values }))
      .catch((error) => console.log({ error }));
  };

  return (
    <Button
      className={className}
      type="primary"
      onClick={handleClickPromiseRace}
    >
      MyPromiseRace
    </Button>
  );
};

export default MyPromiseRace;
