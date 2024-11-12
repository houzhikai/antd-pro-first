import React from 'react'
import { Tabs } from 'antd'
import InformationPage from './InformationPage';
import ColorSettingPage from './ColorSettingPage';

const InfoAndColorTabsPage = () => {

  const items: any = [
    {
      key: 'Info',
      label: 'Info',
      children: <InformationPage />,
    },
    {
      key: 'colorSetting',
      label: 'Color Setting',
      children: <ColorSettingPage />,
    },
  ];
  return (

    <Tabs style={{ width: 300 }} defaultActiveKey="Info" items={items} type="card" size='large' />
  )
}

export default InfoAndColorTabsPage