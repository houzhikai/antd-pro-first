import { testUnitStatus } from './analysisMenuList';
import {
  CheckOutlined,
  LoadingOutlined,
  HeartOutlined,
  SmileOutlined,
} from '@ant-design/icons';

export const slotList = [
  {
    key: '1',
    title: 'Slot 1 - DRU288',
    status: 'Testing',
    child: [
      {
        key: '0-0',
        title: 'Linearity Cali (2024-03-19)',
        icon: testUnitStatus('0'),
        children: [
          {
            key: '0-0-0',
            title: 'Check (2024-03-19)',
            icon: testUnitStatus('3'),
          },
          {
            key: '0-0-1',
            title: 'Calibrate (2024-03-19)',
            icon: testUnitStatus('0'),
          },
          {
            key: '0-0-2',
            title: 'Verify',
            icon: testUnitStatus('1'),
          },
          {
            key: '0-0-3',
            title: 'Save',
            icon: testUnitStatus('2'),
          },
        ],
      },
      {
        key: '0-1',
        title: 'TX Cali',
        children: [
          {
            key: '0-1-0',
            title: 'Check',
          },
          {
            key: '0-1-1',
            title: 'Calibrate',
          },
          {
            key: '0-1-2',
            title: 'Verify',
          },
          {
            key: '0-1-3',
            title: 'Save',
          },
        ],
      },
      {
        key: '0-2',
        title: 'RX Cali',
        children: [
          {
            key: '0-2-0',
            title: 'Check',
          },
          {
            key: '0-2-1',
            title: 'Calibrate',
          },
          {
            key: '0-2-2',
            title: 'Verify',
          },
          {
            key: '0-2-3',
            title: 'Save',
          },
        ],
      },
    ],
  },
  {
    key: '2',
    title: 'Slot 2 - DRU288',
    status: 'Testing',
    child: [
      {
        key: '2-0',
        title: 'Linearity Cali',
        icon: testUnitStatus('0'),
        children: [
          {
            key: '2-0-0',
            title: 'Check',
            icon: <CheckOutlined />,
          },
          {
            key: '2-0-1',
            title: 'Calibrate',
            icon: <LoadingOutlined />,
          },
          {
            key: '2-0-2',
            title: 'Verify',
            icon: <HeartOutlined />,
          },
          {
            key: '2-0-3',
            title: 'Save',
            icon: <SmileOutlined />,
          },
        ],
      },
      {
        key: '2-1',
        title: 'TX Cali',
        children: [
          {
            key: '2-1-0',
            title: 'Check',
          },
          {
            key: '2-1-1',
            title: 'Calibrate',
          },
          {
            key: '2-1-2',
            title: 'Verify',
          },
          {
            key: '2-1-3',
            title: 'Save',
          },
        ],
      },
      {
        key: '2-2',
        title: 'RX Cali',
        children: [
          {
            key: '2-2-0',
            title: 'Check',
          },
          {
            key: '2-2-1',
            title: 'Calibrate',
          },
          {
            key: '2-2-2',
            title: 'Verify',
          },
          {
            key: '2-2-3',
            title: 'Save',
          },
        ],
      },
    ],
  },
  {
    key: '3',
    title: 'Slot 3 - DRU288',
    status: 'No test',
    child: [
      {
        key: '3-0',
        title: 'Linearity Cali',
        icon: testUnitStatus('1'),
        children: [
          {
            key: '3-0-0',
            title: 'Check',
            icon: <CheckOutlined />,
          },
          {
            key: '3-0-1',
            title: 'Calibrate',
            icon: <LoadingOutlined />,
          },
          {
            key: '3-0-2',
            title: 'Verify',
            icon: <HeartOutlined />,
          },
          {
            key: '3-0-3',
            title: 'Save',
            icon: <SmileOutlined />,
          },
        ],
      },
      {
        key: '3-1',
        title: 'TX Cali',
        children: [
          {
            key: '3-1-0',
            title: 'Check',
          },
          {
            key: '3-1-1',
            title: 'Calibrate',
          },
          {
            key: '3-1-2',
            title: 'Verify',
          },
          {
            key: '3-1-3',
            title: 'Save',
          },
        ],
      },
      {
        key: '3-2',
        title: 'RX Cali',
        children: [
          {
            key: '3-2-0',
            title: 'Check',
          },
          {
            key: '3-2-1',
            title: 'Calibrate',
          },
          {
            key: '3-2-2',
            title: 'Verify',
          },
          {
            key: '3-2-3',
            title: 'Save',
          },
        ],
      },
    ],
  },
];
