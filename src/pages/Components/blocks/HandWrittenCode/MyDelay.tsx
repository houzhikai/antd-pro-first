import { Button } from 'antd';
import React from 'react';

const MyDelay = ({ className }) => {
  const handleClickMyDelay = () => {
    console.log(1, new Date());
    const delayFunc = (time) => {
      // eslint-disable-next-line no-promise-executor-return
      return new Promise((resolve) => setTimeout(resolve, time));
    };
    delayFunc(1200).then(() => console.log('delayFunc action', new Date()));
  };
  return (
    <Button className={className} type="primary" onClick={handleClickMyDelay}>
      MyDelay
    </Button>
  );
};

export default MyDelay;
