import { useModel } from '@umijs/max';
import { Input } from 'antd';

const { Search } = Input;

const JumpAddress = () => {
  const { add } = useModel('useGetDBMDataList');

  //   只有选中功能，没有跳转功能
  const handleJump = (value) => {
    console.log(1, value);
    if (value.length > 1) {
      add(value);
    } else {
      add(`0${value}`);
    }

    // css添加边框样式
    // setSelectedDiv((c: string) => {
    //   console.log(c, 12);
    //   return c ? '' : 'selected';
    // });
  };
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
