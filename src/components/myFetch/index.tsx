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
  const isException = data.isExceptionHand ? true : false || false; // 是否异常，默认 false
  return Promise.race([
    fetch(URLS, {
      method: method,
      body: data.params ? JSON.stringify(data.params) : null,
    }).then((res) => res.json()),
    new Promise((resovle, reject) => {
      setTimeout(
        () => reject(false),
        data.timeout ? data.timeout * 1000 : 1000,
      );
    }),
  ]).then((res: any) => {
    if (isException) {
      return res;
    }
    // 请求成功
    if (res.result !== '0') {
      return message.error(res.msg, 5);
    } else {
      return res.data;
    }
  });
  // .catch(() => {
  //   // 请求超时
  //   //   message.error('请求超时', 5);
  //   return false;
  // });
};
export default myFetch;
