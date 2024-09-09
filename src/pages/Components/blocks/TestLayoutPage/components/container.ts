import enUS from '@/components/commons/MyLayoutPage/locales/en-US';
import zhCN from '@/components/commons/MyLayoutPage/locales/zh-CN';
import { createContext, useContext, useState } from 'react';

export const TestPageContext = createContext<any>(null);

export const useTestPageProvider = () => {
  const [locale, setLocale] = useState<'en-US' | 'zh-CN'>('zh-CN');
  // 根据 id 展示中英文内容
  const getLocaleValue = (id) => (locale === 'zh-CN' ? zhCN[id] : enUS[id]);
  // TODO，其他
  const [name, setName] = useState('');
  const [name1, setName1] = useState('Bob1');
  const testPageValues = {
    name,
    setName,
    name1,
    setName1,
    locale,
    setLocale,
    getLocaleValue,
  };
  return { ...useContext(TestPageContext), testPageValues };
};
