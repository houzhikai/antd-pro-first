import chinese from '../MyLayoutPage/locales/zh-CN';
import english from '../MyLayoutPage/locales/en-US';
export const formatMessage = (message: string, language: 'zh-CN' | 'en-US') => {
  const translation: any = {
    'en-US': { ...english },
    'zh-CN': { ...chinese },
  };
  return translation[language][message];
};
