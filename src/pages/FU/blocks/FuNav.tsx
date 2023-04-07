import MyLogo from '@/components/MyLogo';
import FULogo from '@/icon/FULogo.svg';
import { Button } from 'antd';
import { useIntl } from 'umi';

const FuNav = () => {
  const { formatMessage } = useIntl();
  return (
    <div>
      <MyLogo src={FULogo} />
      <Button type="primary">{formatMessage({ id: 'menu.home' })}1</Button>
    </div>
  );
};
export default FuNav;
