import { useState } from 'react';

export default () => {
  const [isHiddenSide, setIsHiddenSide] = useState(true); // true 表示展示在页面上
  const [isHiddenFormat, setIsHiddenFormat] = useState(true); // true 表示展示在页面上
  return { isHiddenSide, setIsHiddenSide, isHiddenFormat, setIsHiddenFormat };
};
