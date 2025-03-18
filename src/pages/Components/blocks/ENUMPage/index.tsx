import React from 'react';

const ENUMPage = () => {
  // 封装枚举的方法

  const ENUMValues = ['Up', 'Down', 'Left', 'Right'];

  const getENUMObj = (value) => {
    return value || 'NA';
  };

  const getValue = getENUMObj(ENUMValues[9]);
  return <div>{getValue}</div>;
};

export default ENUMPage;
