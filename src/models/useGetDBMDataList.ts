import myFetch from '@/components/myFetch';
import { useAsyncEffect, useSet } from 'ahooks';
import { message } from 'antd';
import { useState } from 'react';

export default () => {
  const [siteList, setSiteList] = useState([]); // dbm的site二级菜单栏
  const [isRequest, setIsRequest] = useState(false);
  const [dbmParams, setDbmParams] = useState('');
  const [isErrorPage, setIsErrorPage] = useState(false);
  const [page, setPage] = useState(0);

  // 选择已勾选的
  const [set, { add, remove }] = useSet(['']);

  const initIp = '192.168.3.233';

  useAsyncEffect(async () => {
    if (isRequest) {
      try {
        const res = await myFetch({
          url: `http://${initIp}:28800/sitemgr/dbm/sites`,
        });
        console.log(res);
        setIsErrorPage(false);
      } catch (error) {
        setIsErrorPage(true);
        message.error('请求出错', 5);
      }
    }
  }, [isRequest, dbmParams]);
  const selectedAddressList = Array.from(set).filter((item) => item.length > 0);
  return {
    siteList,
    setSiteList,
    isRequest,
    setIsRequest,
    dbmParams,
    setDbmParams,
    isErrorPage,
    setIsErrorPage,
    add,
    remove,
    selectedAddressList,
    page,
    setPage,
  };
};
