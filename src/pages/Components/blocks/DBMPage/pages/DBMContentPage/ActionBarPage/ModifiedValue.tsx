import { Input, message } from 'antd';
import { useState } from 'react';
import myFetch from '@/components/myFetch';
import { changeMode } from '../../../components/changeMode';
import { useDBMPageProvider } from '../../../components/container';
import { getDataKey } from '../../../components/getDataKey';

const { Search } = Input;

const ModifiedValue = () => {
  const {
    selectedAddressList,
    setSelectedAddressList,
    initSelectedAddress,
    reset,
    page,
    data,
    setData,
    setKey,
    tableRef,
    ip,
    mode,
  } = useDBMPageProvider();
  const [modifiedValues, setModifiedValues] = useState('');

  const handleChange = (e: any) => {
    setModifiedValues(e.target.value);
  };

  const handleEnter = async (value: string) => {
    if (value.length > 0) {
      // 在有值时才可以确定， 确定后清空选择的地址、input框数据、禁止使用
      setModifiedValues('');
      // 是否是16进制数
      if (/^[A-Fa-f0-9]{1,}$/.test(value)) {
        // 16进制转10进制
        const HexValue = parseInt(value, 16);
        // 不同模式下的校验
        if (
          HexValue >= 0 &&
          HexValue < Math.pow(2, Number(changeMode(mode))) &&
          mode !== '-'
        ) {
          // selectedAddressList 改成16进制地址
          // const hexSelectedAddressList
          // 提前判断是不是0，如果是'000000'的话会重置为'0'，再进行一下判断
          const editValue =
            parseInt(value, 16) > 0 ? value.replace(/^[0]+/, '') : '0';

          try {
            const res = await myFetch({
              url: `http://${ip}/site/dbm/writer`,
              params: {
                page,
                address: selectedAddressList,
                value: editValue,
              },
              timeout: 20,
              isExceptionHand: true,
            });
            if (res.result === '0') {
              message.success('修改成功');
              setSelectedAddressList([]);
              reset();
              // setRefresh((c) => c + 1);
              const newList = data.map((item: any, index: number) => {
                selectedAddressList.map((t) => {
                  const hexIndex = index.toString(16).toUpperCase();
                  const newCross = t.substring(0, t.length - 1);
                  const newRow = t.substring(t.length - 1, t.length);
                  if (hexIndex === newCross) {
                    return (item[`${getDataKey(newRow)}`] = editValue);
                  }
                  return item;
                });
                return item;
              });
              // 为了实时改变table数据，绑定在table中的 key值中
              // 因为会更新key值，所以table会自动翻到首行
              const firstSelectedCross = selectedAddressList
                .map((item) => item.substring(0, item.length - 1))
                .sort((a, b) => {
                  return Number(a) - Number(b);
                })[0];
              setKey((c) => c + 1);
              setTimeout(() => {
                tableRef.current.scrollTop(
                  parseInt(firstSelectedCross, 16) * 30,
                );
              }, 1000);

              setData(newList);
            } else if (res.result !== '0') {
              message.error(res.msg);
            }
          } catch (error) {
            message.error(`数据写入失败`);
          }
        } else {
          message.error(`值超出范围`);
        }
      } else {
        message.error(`值有非法字符！`);
      }
    } else {
      message.error('值不能为空！');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
      }}
    >
      多选：
      <Search
        disabled={
          (selectedAddressList.length === 0
            ? initSelectedAddress
            : selectedAddressList
          ).length > 0
            ? false
            : true
        }
        style={{ display: 'inline-block', marginLeft: 10, maxWidth: 170 }}
        enterButton="修改"
        value={modifiedValues}
        onChange={handleChange}
        onSearch={handleEnter}
      />
    </div>
  );
};
export default ModifiedValue;
