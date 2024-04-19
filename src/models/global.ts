// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useState } from 'react';

const useUser = () => {
  const [name, setName] = useState<string>(DEFAULT_NAME);

  // 两个页签之间的通道，里面字符串可以随意填
  const channel = new BroadcastChannel('cross-page-tab-communication');

  const sendMsg = (type: 'add', message) => {
    // 从通道里发送消息，里面内容随便填
    channel.postMessage({ type, message });
  };

  const listenMsg = (callback) => {
    channel.addEventListener('message', (e) => {
      // 阻止其他监听器接收到这个消息，不然会有多次监听事件
      e.stopImmediatePropagation();
      // e.data 就是 postMessage 里面的内容
      return callback && callback(e.data);
    });
  };

  return {
    name,
    setName,
    sendMsg,
    listenMsg,
  };
};

export default useUser;
