import { useModel } from '@umijs/max';
import { useState } from 'react';

const CrossPageTabCommunication = () => {
  const { listenMsg } = useModel('global');
  let list = [1, 2, 3, 4, 5];
  const [xxx, setXxx] = useState(list);
  listenMsg((info) => {
    if (info.type === 'add') {
      return setXxx((pre) => {
        return [...info.message, ...pre];
      });
    }
  });

  return (
    <>
      {xxx.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </>
  );
};

export default CrossPageTabCommunication;
