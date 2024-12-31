import { Input, message } from 'antd';
import { useDBMPageProvider } from '../../components/container';
import { getMaxAddress } from '../../components/getMaxAddress';

const { Search } = Input;

const JumpAddress = () => {
  const { tableRef, setAddress, mode } = useDBMPageProvider();
  const handleJump = (value: string) => {
    if (value === '') {
      message.warning('地址不能为空');
      return false;
    }
    // 最少一位数 /^[A-Fa-f0-9]{1,6}$/ 1位到6位数
    if (/^[A-Fa-f0-9]{1,}$/.test(value)) {
      const newStr = value.substring(0, value.length - 1);
      setTimeout(() => {
        if (newStr === '') {
          // 如果输入一位数，跳到第0行，例如输入2，是指第0行第2列
          tableRef.current.scrollTop(parseInt('0', 16) * 30);
          setAddress(`0${value.toUpperCase()}`);
        } else {
          tableRef.current.scrollTop(parseInt(newStr, 16) * 30);

          const addressRows = parseInt(
            newStr.length === 1 ? `0${newStr}` : newStr,
            16,
          );
          const maxRows = parseInt(getMaxAddress(mode), 16);
          setAddress(value.toUpperCase());
          if (addressRows > maxRows) {
            setAddress(`${getMaxAddress(mode).toUpperCase()}F`);
            message.info('超出最大地址，已跳转到最后一行！');
          }
        }
      }, 0);
    } else {
      message.error('请输入正确的16进制数字');
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      地址 :
      <Search
        style={{ display: 'inline-block', marginLeft: 10, maxWidth: 170 }}
        enterButton="跳转"
        onSearch={handleJump}
      />
    </div>
  );
};

export default JumpAddress;
