import { useModel } from '@umijs/max';
import { Button } from 'antd';

const ReduxIndex = () => {
  const { sendMsg } = useModel('global');
  const handleAdd = () => {
    sendMsg('add', [6, 7]);
  };
  return (
    <Button type="primary" onClick={handleAdd}>
      add
    </Button>
  );
};

export default ReduxIndex;
