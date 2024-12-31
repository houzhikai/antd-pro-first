import { useSet } from 'ahooks';
import { createContext, useContext, useRef, useState } from 'react';

export const DBMPageContext = createContext<any>(null);

export const useDBMPageProvider = () => {
  const tableRef = useRef<any>();
  const [key, setKey] = useState(0);
  const [isShowErrorPage, setIsShowErrorPage] = useState(false); //site接口为空或请求失败的错误页面
  const [mode, setMode] = useState<string>('-');
  const [sites, setSites] = useState<any[]>([]); // site 数据
  const [isTablePage, setIsTablePage] = useState(false); // 是否有table的错误页面
  // setChangeMenu,
  // setPage,
  // setPageVal,
  const [changeMenu, setChangeMenu] = useState(''); //切换菜单时的监听事件
  const [page, setPage] = useState<number>(0); // 控制 page 页数
  const [pageVal, setPageVal] = useState('0');
  const [data, setData] = useState<any>([]); // 为了控制 actionBar 是否展示

  // 选择已勾选的,reset 恢复默认值
  const [set, { add, remove, reset }] = useSet(['']);
  const initSelectedAddress = Array.from(set).filter((item) => item.length > 0);
  const [selectedAddressList, setSelectedAddressList] =
    useState(initSelectedAddress); // 多选时选择地址列表

  const [address, setAddress] = useState('');

  // 取 DBM Tool 的 ip 值
  const getIp = (value: string) => {
    const res: any = sites?.filter(
      (item: { label: string }) => item.label === value,
    )[0]?.ip;
    return res;
  };

  const defaultSelectedKeys = sites.map(
    (item: { label: string }) => item.label,
  )[0];

  const ip = getIp(defaultSelectedKeys);
  const DBMPageValues = {
    tableRef,
    key,
    setKey,
    isShowErrorPage,
    setIsShowErrorPage,
    mode,
    setMode,
    sites,
    setSites,
    isTablePage,
    setIsTablePage,
    changeMenu,
    setChangeMenu,
    page,
    setPage,
    pageVal,
    setPageVal,
    data,
    setData,
    ip,
    add,
    remove,
    reset,
    selectedAddressList,
    setSelectedAddressList,
    getIp,
    address,
    setAddress,
  };
  return { ...useContext(DBMPageContext), DBMPageValues };
};
