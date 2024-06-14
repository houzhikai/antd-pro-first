import React from 'react';
import { ConfigProvider } from 'antd';
import WaferMapPages from './WaferMapPages/WaferMapPages';
import SingleModeModal from './ModalPages/SingleModeModals/SingleModeModal';
import StackModeModalPage from './ModalPages/StackModeModal';
import { getThemeToken } from '../components/getThemeToken';
import { ProviderFunc } from '../components/containers';

const WaferMapLayoutPage = () => {
  const { theme } = ProviderFunc();
  return (
    <ConfigProvider theme={getThemeToken(theme)}>
      <WaferMapPages />
      <SingleModeModal />
      <StackModeModalPage />
    </ConfigProvider>
  );
};

export default WaferMapLayoutPage;
