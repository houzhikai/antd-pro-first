import { Descriptions } from 'antd';
import React from 'react';

const DeviceInfo = () => {
  const items = [
    {
      label: 'LotID:',
      children: 'FA85-1282',
    },
    {
      label: 'WaferID',
      children: '1',
    },
    {
      label: 'FlowID:',
      children: '',
    },
    {
      label: 'ProductID:',
      children: '',
    },
    {
      label: 'TestProgram:',
      children: '',
    },
    {
      label: 'TesterID:',
      children: '',
    },
    {
      label: 'OperatorID:',
      children: '',
    },
    {
      label: 'StartTime:',
      children: '2024_01_02_19_39_35',
    },
    {
      label: 'EndTime:',
      children: '2024_01_02_19_40_59',
    },
    {
      label: 'NotchSide:',
      children: '',
    },
    {
      label: 'SortID:',
      children: '',
    },
    {
      label: 'GridXmax:',
      children: '',
    },
    {
      label: 'GridYmax:',
      children: '',
    },
    {
      label: 'FabSite:',
      children: '',
    },
    {
      label: 'TestSite:',
      children: '',
    },
    {
      label: 'ProbeCardID:',
      children: '',
    },
    {
      label: 'LoadBoardID:',
      children: '',
    },
    {
      label: 'CustomerID:',
      children: '',
    },
    {
      label: 'CustomerPartID:',
      children: '',
    },
  ];
  return (
    <>
      <h2>DEVICE INFO</h2>
      <Descriptions bordered column={2} items={items} size="small" />
    </>
  );
};

export default DeviceInfo;
