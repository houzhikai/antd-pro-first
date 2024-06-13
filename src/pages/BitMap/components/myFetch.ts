import { message } from 'antd';

interface MyFetchProps {
  url: string;
  params?: any;
  timeout?: number;
  isExceptionHand?: boolean;
}

const myFetch = (data: MyFetchProps) => {
  const URLS = data.url || '';
  const method = data.params ? 'POST' : 'GET';
  const isException = data.isExceptionHand ? true : false || false; // ÊÇ·ñÒì³££¬Ä¬ÈÏ false
  return Promise.race([
    fetch(URLS, {
      method: method,
      body: data.params ? JSON.stringify(data.params) : null,
    }).then((res) => res.json()),
    new Promise((resovle, reject) => {
      setTimeout(() => reject(false), data.timeout ? data.timeout * 1000 : 3000);
    }),
  ]).then((res: any) => {
    if (isException) {
      return res;
    }
    // ÇëÇó³É¹¦
    if (res.result !== 0) {
      return message.error(res.msg, 5);
    } else {
      return res.data;
    }
  });
  // .catch(() => {
  //   // ÇëÇó³¬Ê±
  //   //   message.error('ÇëÇó³¬Ê±', 5);
  //   return false;
  // });
};
export default myFetch;
