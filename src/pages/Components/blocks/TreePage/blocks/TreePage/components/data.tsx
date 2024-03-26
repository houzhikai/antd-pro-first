import {
  CheckOutlined,
  HeartOutlined,
  LoadingOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import type { TreeDataNode } from 'antd';
import { Image } from 'antd';
import logo from '@/icon/up.svg';
import styles from '../index.less';
export const treeData: TreeDataNode[] = [
  {
    key: '0-0',
    title: <div className={styles.oneTitle}> Slot 1 - DRU288Testing</div>,
    children: [
      {
        key: '0-0-0',
        title: 'Linearity Cali',
        icon: <Image src={logo} preview={false} />,
        children: [
          {
            key: '0-0-0-0',
            title: 'Check',
            icon: <SmileOutlined />,
          },
          {
            key: '0-0-0-1',
            title: 'Calibrate',
            icon: <HeartOutlined />,
          },
          {
            key: '0-0-0-2',
            title: 'Verify',
            icon: <LoadingOutlined />,
          },
          {
            key: '0-0-0-3',
            title: 'Save',
            icon: <CheckOutlined />,
          },
        ],
      },
      {
        key: '0-0-1',
        title: 'Linearity Cali',
        children: [
          {
            key: '0-0-1-0',
            title: 'Check',
          },
          {
            key: '0-0-1-1',
            title: 'Calibrate',
          },
          {
            key: '0-0-1-2',
            title: 'Verify',
          },
          {
            key: '0-0-1-3',
            title: 'Save',
          },
        ],
      },
      {
        key: '0-0-2',
        title: 'Linearity Cali',
        children: [
          {
            key: '0-0-2-0',
            title: 'Check',
          },
          {
            key: '0-0-2-1',
            title: 'Calibrate',
          },
          {
            key: '0-0-2-2',
            title: 'Verify',
          },
          {
            key: '0-0-2-3',
            title: 'Save',
          },
        ],
      },
      {
        key: '0-0-3',
        title: 'Linearity Cali',
        children: [
          {
            key: '0-0-3-0',
            title: 'Check',
          },
          {
            key: '0-0-3-1',
            title: 'Calibrate',
          },
          {
            key: '0-0-3-2',
            title: 'Verify',
          },
          {
            key: '0-0-3-3',
            title: 'Save',
          },
        ],
      },
    ],
  },
  {
    key: '0-1',
    title: <div className={styles.oneTitle}> Slot 1 - DRU288 Testing</div>,
    children: [
      {
        key: '0-1-0',
        title: 'Linearity Cali',
        icon: <SmileOutlined />,
        children: [
          {
            key: '0-1-0-0',
            title: 'Check',
            icon: <SmileOutlined />,
          },
          {
            key: '0-1-0-1',
            title: 'Calibrate',
            icon: <HeartOutlined />,
          },
          {
            key: '0-1-0-2',
            title: 'Verify',
            icon: <LoadingOutlined />,
          },
          {
            key: '0-1-0-3',
            title: 'Save',
            icon: <CheckOutlined />,
          },
        ],
      },
      {
        key: '0-1-1',
        title: 'Linearity Cali',
        children: [
          {
            key: '0-1-1-0',
            title: 'Check',
          },
          {
            key: '0-1-1-1',
            title: 'Calibrate',
          },
          {
            key: '0-1-1-2',
            title: 'Verify',
          },
          {
            key: '0-1-1-3',
            title: 'Save',
          },
        ],
      },
      {
        key: '0-1-2',
        title: 'Linearity Cali',
        children: [
          {
            key: '0-1-2-0',
            title: 'Check',
          },
          {
            key: '0-1-2-1',
            title: 'Calibrate',
          },
          {
            key: '0-1-2-2',
            title: 'Verify',
          },
          {
            key: '0-1-2-3',
            title: 'Save',
          },
        ],
      },
      {
        key: '0-1-3',
        title: 'Linearity Cali',
        children: [
          {
            key: '0-1-3-0',
            title: 'Check',
          },
          {
            key: '0-1-3-1',
            title: 'Calibrate',
          },
          {
            key: '0-1-3-2',
            title: 'Verify',
          },
          {
            key: '0-1-3-3',
            title: 'Save',
          },
        ],
      },
    ],
  },
  {
    key: '0-2',
    title: <div className={styles.oneTitle}> Slot 1 - DRU288Testing</div>,
    children: [
      {
        key: '0-2-0',
        title: 'Linearity Cali',
        icon: <Image src={logo} preview={false} />,
        children: [
          {
            key: '0-2-0-0',
            title: 'Check',
            icon: <SmileOutlined />,
          },
          {
            key: '0-2-0-1',
            title: 'Calibrate',
            icon: <HeartOutlined />,
          },
          {
            key: '0-2-0-2',
            title: 'Verify',
            icon: <LoadingOutlined />,
          },
          {
            key: '0-2-0-3',
            title: 'Save',
            icon: <CheckOutlined />,
          },
        ],
      },
      {
        key: '0-2-1',
        title: 'Linearity Cali',
        children: [
          {
            key: '0-2-1-0',
            title: 'Check',
          },
          {
            key: '0-2-1-1',
            title: 'Calibrate',
          },
          {
            key: '0-2-1-2',
            title: 'Verify',
          },
          {
            key: '0-2-1-3',
            title: 'Save',
          },
        ],
      },
      {
        key: '0-3-2',
        title: 'Linearity Cali',
        children: [
          {
            key: '0-3-2-0',
            title: 'Check',
          },
          {
            key: '0-3-2-1',
            title: 'Calibrate',
          },
          {
            key: '0-3-2-2',
            title: 'Verify',
          },
          {
            key: '0-3-2-3',
            title: 'Save',
          },
        ],
      },
      {
        key: '0-4-3',
        title: 'Linearity Cali',
        children: [
          {
            key: '0-4-3-0',
            title: 'Check',
          },
          {
            key: '0-4-3-1',
            title: 'Calibrate',
          },
          {
            key: '0-4-3-2',
            title: 'Verify',
          },
          {
            key: '0-4-3-3',
            title: 'Save',
          },
        ],
      },
    ],
  },
];
