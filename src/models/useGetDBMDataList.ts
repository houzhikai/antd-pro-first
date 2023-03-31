import myFetch from '@/components/myFetch';
import { useAsyncEffect } from 'ahooks';
import { message } from 'antd';
import { useState } from 'react';

export default () => {
  const [siteList, setSiteList] = useState([]); // dbm的site二级菜单栏
  const [isRequest, setIsRequest] = useState(false);
  const [dbmParams, setDbmParams] = useState('');
  const [isErrorPage, setIsErrorPage] = useState(false);

  const initIp = '192.168.3.233';

  useAsyncEffect(async () => {
    if (isRequest) {
      try {
        const res = await myFetch({
          url: `http://${initIp}:28800/sitemgr/dbm/sites111`,
        });
        console.log(res);
        setIsErrorPage(false);
      } catch (error) {
        setIsErrorPage(true);
        message.error('请求出错', 5);
      }
    }
  }, [isRequest, dbmParams]);
  return {
    siteList,
    setSiteList,
    isRequest,
    setIsRequest,
    dbmParams,
    setDbmParams,
    isErrorPage,
    setIsErrorPage,
  };
};
