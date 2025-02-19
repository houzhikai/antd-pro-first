import { createContext, useState, useContext } from 'react';
import { formatMessage } from '@/components/commons/formatMessage';

export const InstrumentPageContext = createContext<any>(null);

export const useInstrumentPageProvider = () => {
  const [isErrorPage, setIsErrorPage] = useState(false); //是否展示错误页面
  const [locales, setLocales] = useState<'zh-CN' | 'en-US'>('zh-CN'); //语言
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [webRefresh, setWebRefresh] = useState(1); // 是否点击刷新
  const [webType, setWebType] = useState<string>(''); // 页面组件类型
  const [instrumentParm, setInstrumentParm] = useState<string>(''); //设置页面节点参数
  const [menuList, setMenuList] = useState<any>([]); //左侧菜单栏数据
  const [initIp, setInitIp] = useState('192.168.207');
  const [webContent, setWebContent] = useState<any>({});
  const [detailRefresh, setDetailRefresh] = useState(1); // 是否刷新详情页
  const [selectKey, setSelectKey] = useState('item-0'); // 设置左侧菜单选中项，防止回退后选中项变成默认值
  const [isShowSpin, setIsShowSpin] = useState(false); // 是否展示加载中图片
  const translation = (value) => formatMessage(value, locales);
  const [isHeadErrDetails, setIsHeadErrDetails] = useState(false);
  const textColor = { warning: '#ff9100', error: 'red' };

  const InstrumentPageValues = {
    isErrorPage,
    setIsErrorPage,
    locales,
    setLocales,
    theme,
    setTheme,
    webRefresh,
    setWebRefresh,
    webType,
    setWebType,
    instrumentParm,
    setInstrumentParm,
    menuList,
    setMenuList,
    initIp,
    setInitIp,
    detailRefresh,
    setDetailRefresh,
    selectKey,
    setSelectKey,
    isShowSpin,
    setIsShowSpin,
    textColor,
    webContent,
    setWebContent,
    isHeadErrDetails,
    setIsHeadErrDetails,
    translation,
  };
  return { ...useContext(InstrumentPageContext), InstrumentPageValues };
};
