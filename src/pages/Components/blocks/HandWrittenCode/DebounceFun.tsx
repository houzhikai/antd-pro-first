import { Input } from 'antd';
import React, { useState } from 'react';

const DebounceFun = () => {
  const [value, setValue] = useState('');
  //  本质上时优化高频率执行代码的一种手段
  // 防抖是指在一定时间额内，如果事件持续触发，则执行一次函数。例如 输入框输入、窗口大小调整等。
  //   如果频繁触发，以最后一次事件为准，往后推迟约定时间,只有在停止触发事件后才执行函数。
  // 定义防抖函数
  function debounce(func, delay) {
    let timer;
    return function (this: any) {
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, ...args);
      }, delay);
    };
  }
  const handleDebounce = debounce((e) => {
    const inputVal = e.target.value;
    setValue(inputVal);
  }, 2000);
  return (
    <Input placeholder="debounce" value={value} onChange={handleDebounce} />
  );
};

export default DebounceFun;
