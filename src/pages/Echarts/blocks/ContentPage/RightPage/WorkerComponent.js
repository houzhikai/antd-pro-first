// 该组件将使用Worker线程进行后台计算，并通过主线程与Worker线程之间的通信来接收计算结果：
import { Button } from 'antd';

const myWorker = new Worker('./echarts-worker.js');
function WorkerComponent() {
  let result = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // 用于存储从Worker线程接收到的结果

  const sendMessageToWorker = () => {
    // 发送消息给Worker线程的函数
    if (myWorker) {
      console.log('主进程发送', result, myWorker);
      myWorker.postMessage(result);
    }
    myWorker.onmessage = (e) => {
      console.log('主进程接收', e);
    };
  };

  return (
    <div>
      <h1>Worker 示例</h1>
      <Button onClick={sendMessageToWorker}> 发送消息给Worker </Button>
    </div>
  );
}

export default WorkerComponent;
