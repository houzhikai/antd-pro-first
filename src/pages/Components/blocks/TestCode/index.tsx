// import React, { useEffect, useState } from 'react';

import MyLogo from '@/components/MyLogo';
import png from '@/icon/DBMLogo.svg';
import detailPng from './output64x64.png';
import { Image } from 'antd';

// import { Button } from 'antd';
// import { useEffect, useState } from 'react';

const TestCode = () => {
  //   const [count, setCount] = useState<number>(0);

  //   useEffect(() => {
  //     if (count > 2) {
  //       console.log('-------');
  //     }
  //     setTimeout(() => {
  //       setCount((c: number) => c + 1);
  //     }, 1000);
  //     console.log(count);
  //   }, [count]);

  /**
   * 防抖函数
   * 在一定时间内，事件被触发了很多次，只会执行最后一次
   * 使用场景：改变窗口大小，拖动滚动条，input框
   */
  // function debounce(func, wait) {
  //   let timer;
  //   return function () {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       func.apply(this, arguments);
  //     }, wait);
  //   };
  // }

  // /**
  //  * 节流函数
  //  * 在一定时间内，只执行一次事件
  //  * 使用场景：鼠标滚动、输入框 keydown事件
  //  */
  // function throttle(func, wait) {
  //   let pre = 0;
  //   return function () {
  //     let now = new Date();
  //     if (now - pre > wait) {
  //       func.apply(this, arguments);
  //       pre = now;
  //     }
  //   };
  // }

  // // 倒计时
  // const maxTime = 1 * 60;
  // let [second, setSecond] = useState(maxTime);
  // const [isLoading, setIsLoading] = useState(false);

  // // 放在 useEffect 中，倒计时结束后不再计时
  // useEffect(() => {
  //   if (isLoading) {
  //     let timer = setInterval(() => {
  //       if (second > 0) {
  //         setSecond((c: number) => c - 1);
  //       } else {
  //         setIsLoading(false);
  //         setSecond(60);
  //       }
  //     }, 1000);
  //     return () => clearInterval(timer);
  //   }
  // }, [second, isLoading]);

  // const handleClick = () => {
  //   setIsLoading(true);
  // };

  // const minutes = Math.floor(second / 60);
  // const seconds = Math.floor(second % 60);
  // const xxx = `${minutes}分${seconds}秒`;
  // return (
  //   <div>
  //     <Button type="primary" onClick={handleClick} disabled={isLoading}>
  //       {isLoading ? xxx : 'Action'}
  //     </Button>
  //   </div>
  // );

  // 生成一个10位数的随机数
  // let charStr =
  //   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  // const randomFunc = (n) => {
  //   let result = '';
  //   for (let i = 0; i < n; i++) {
  //     const index = Math.floor(Math.random() * charStr.length - 1);
  //     result += charStr.substring(index, index + 1);
  //   }
  //   return result;
  // };
  // console.log(randomFunc(10));

  // 继承方式

  // return <MyLogo src={png} title="test-png" />;
  return (
    <Image
      preview={false}
      srcSet="small.jpg 640w, medium.jpg 1280w, large.jpg 1920"
      sizes="(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px"
      src={detailPng}
      alt="test-png"
      width={1000}
      height={1000}
    />
  );
};

export default TestCode;
