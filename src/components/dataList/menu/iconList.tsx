import { Image } from 'antd';

import { HomeOutlined } from '@ant-design/icons';
import DBMLogo from '@/icon/DBMLogo.svg';
import FULogo from '@/icon/FULogo.svg';
import InstrumentLogo from '@/icon/InstrumentLogo.svg';

export const iconList = [
  { name: 'home', icon: <HomeOutlined /> },
  { name: 'dbm', icon: <Image src={DBMLogo} preview={false} /> },
  { name: 'fu', icon: <Image src={FULogo} preview={false} /> },
  {
    name: 'virtualTable',
    icon: <Image src={InstrumentLogo} preview={false} />,
  },
];
