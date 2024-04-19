import { Button } from 'antd';
import { ProviderFunc } from '../commons/containers';

const NavActions = () => {
  const { setValue } = ProviderFunc();
  const handleOpenModal = () => {
    console.log(11);
    setValue(true);
  };
  return (
    <div>
      <Button type="primary" onClick={handleOpenModal}>
        打开弹窗
      </Button>
    </div>
  );
};

export default NavActions;
