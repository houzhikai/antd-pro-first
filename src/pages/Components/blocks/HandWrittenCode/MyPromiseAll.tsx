import { Button } from 'antd';
import React from 'react';

const MyPromiseAll = ({ className }) => {
  const handleClickPromiseAll = () => {
    const myPromiseAll = (promiseList) => {
      return new Promise((resolve, reject) => {
        let results: any = [];
        for (let i = 0; i < promiseList.length; i++) {
          Promise.resolve(promiseList[i])
            .then((res) => {
              results[i] = res;
              if (i + 1 === promiseList.length) {
                resolve(results);
              }
            })
            .catch((error) => reject(error));
        }
      });
    };
    const promise1 = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise 1 resolved');
      }, 2000);
    });

    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Promise 2 resolved');
      }, 3000);
    });

    const promise3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Promise 3 resolved');
      }, 1000);
    });

    myPromiseAll([promise1, promise2, promise3])
      .then((res) => console.log({ res }))
      .catch((error) => console.log({ error }));
  };
  return (
    <Button
      className={className}
      type="primary"
      onClick={handleClickPromiseAll}
    >
      MyPromiseAll
    </Button>
  );
};

export default MyPromiseAll;
