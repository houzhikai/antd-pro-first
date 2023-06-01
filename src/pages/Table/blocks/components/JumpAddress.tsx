import { useModel } from '@umijs/max';
import { Input } from 'antd';
import { useCallback } from 'react';

const { Search } = Input;

const JumpAddress = () => {
  const { add, setJumpValue, selectedAddressList, jumpValue } =
    useModel('useGetDBMDataList');

  //   只有选中功能，没有跳转功能
  const handleJump = useCallback(
    (value) => {
      console.log(1, selectedAddressList, value);

      if (value.length > 1) {
        add(value);
        setJumpValue(value);
      } else {
        add(`0${value}`);
        setJumpValue(`0${value}`);
      }
    },
    [jumpValue],
  );
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      X / Y :
      <Search
        style={{ display: 'inline-block', marginLeft: 10, maxWidth: 170 }}
        enterButton="跳转"
        onSearch={handleJump}
      />
    </div>
  );
};

export default JumpAddress;
