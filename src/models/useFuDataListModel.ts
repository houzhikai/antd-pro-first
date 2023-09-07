// import myFetch from '@/components/myFetch';
import { useAsyncEffect } from 'ahooks';
import { message } from 'antd';
import { useState } from 'react';

export interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const data1: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: Math.floor(Math.random() * 100),
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: Math.floor(Math.random() * 100),
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: Math.floor(Math.random() * 100),
    address: 'Sidney No. 1 Lake Park',
  },
];
export default () => {
  const [data, setData] = useState<any>([]);
  // const random = Math.floor(Math.random() * 100000);
  // 立即调用
  useAsyncEffect(async () => {
    try {
      await fetch(
        `http://192.168.3.216:28700/develop/xxx?broadcast=192.168.3.255`,
        {
          method: 'GET',
        },
      )
        .then((response) => response.json())
        .then((res) => {
          if (res.result === '0') {
            setData(() => res.data);
          } else {
            setData(data1);
            message.error(111);
          }
        });
    } catch (error) {
      setData(data1);
      // message.error(111);
    }
  }, []);
  // 轮询
  // useEffect(() => {
  //   const timer = setInterval(async () => {
  //     try {
  //       const xxx = await myFetch({
  //         url: `http://172.168.0.100:29000/upgrade/heartbeat`,
  //         params: { heartbeat: String(random) },
  //         timeout: 1,
  //       });
  //       setData(xxx);
  //     } catch (error) {
  //       setData(data1);
  //       message.error(111);
  //     }
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  // console.log(data);
  return {
    data,
    setData,
  };
};
