import { useCallback, useEffect, useRef, useState } from 'react';
import { Input, message } from 'antd';

import BaseCell from './BaseCell';
import myFetch from '@/components/myFetch';
import { changeMode } from '../../../components/changeMode';
import { takeMiddleRectangleAddress } from '../../../components/takeMiddleAddress';
import { useDBMPageProvider } from '../../../components/container';
import '../../../index.css';

const InputCell = ({
  rowData,
  onChange,
  dataKey,
  column,
  mode,
  ...props
}: any) => {
  const {
    ip,
    page,
    add,
    remove,
    set,
    initSelectedAddress,
    selectedAddressList,
    setSelectedAddressList,
    address,
    reset,
  } = useDBMPageProvider();

  let [value, setValue] = useState(rowData[column]);
  const inputRef = useRef<any>(null);

  // 不要依赖项，是因为当值连续输入超出范围时需要默认选中最后一个地址
  useEffect(() => {
    if (`${rowData.address}${dataKey}` === address) {
      inputRef.current.focus({ cursor: 'all' });
    }
  }, [address]);

  const handleChange = useCallback(
    (event: any) => {
      onChange(rowData.id, event.target.value, column);
      setValue(() => event.target.value);
    },
    [value],
  );
  // 监听value是否变化，没有变化就不触发onclick事件
  const handleClick = useCallback(async () => {
    // const param = search.split('?')[1];
    // const ip = getIp(queryParams().site); // 从 useGetSites 中调用方法
    // 拿到reader接口初始的值，只当writer接口result不为0时，将原来的值返回
    const defaultRowDataIdValue = rowData[column];
    if (value === '') {
      // 未输入值时再次返回原来的值
      value = rowData[column];
      setValue(rowData[column]);
      message.error(`Address ${rowData.address}${dataKey} is empty`);
    }
    // 是否是16进制写法，取消最多9位数的限制，下面还会校验最大值
    if (/^[A-Fa-f0-9]{1,}$/.test(value)) {
      // 16进制转10进制
      const Hex = parseInt(value, 16) || parseInt(rowData[column], 16);
      // 不同模式下的校验
      if (
        Hex >= 0 &&
        Hex < Math.pow(2, Number(changeMode(mode))) &&
        mode !== '-'
      ) {
        // 提前判断是不是0，如果是'000000'的话会重置为'0'，再进行一下判断
        value = parseInt(value, 16) > 0 ? value.replace(/^[0]+/, '') : '0';
        // 校验
        if (value !== rowData[column]) {
          setValue(value);

          try {
            const res = await myFetch({
              url: `http://${ip}/site/dbm/writer`,
              params: {
                page,
                address: [`${rowData.address}${dataKey}`],
                value,
              },
              isExceptionHand: true,
            });
            message.success('修改成功');
            // 在修改之后，rowData[column] 重新赋值
            rowData[column] = value;

            if (res.result !== '0') {
              // 如果result不为0，提示+回退
              setValue(defaultRowDataIdValue);
              message.error(res.msg);
            }
          } catch (error) {
            // 接口报错，提示+回退
            setValue(defaultRowDataIdValue);

            message.error(`Address ${rowData.address}${dataKey} failed`);
          }
        } else {
          setValue(value);
        }
      } else {
        // 超出范围再次返回原来的值
        setValue(rowData[column]);
        message.error(`Address ${rowData.address}${dataKey} out_range`);
      }
    } else {
      // 有非法值再次返回原来的值
      setValue(rowData[column]);
      message.error(`Address ${rowData.address}${dataKey} illegal character`);
    }
  }, [value]);

  let newArr: string[] = [];
  const handleMouseDown = (e: any) => {
    const isIncludesAddress = selectedAddressList.includes(
      `${rowData.address}${dataKey}`,
    );
    // ctrl时 modifyValue可以输入值
    if (e.ctrlKey && e.button === 0) {
      e.preventDefault();
      // 是否包含已选中的地址
      if (isIncludesAddress) {
        const filterList = selectedAddressList.filter(
          (item) => item !== `${rowData.address}${dataKey}`,
        );
        setSelectedAddressList(filterList);
        remove(`${rowData.address}${dataKey}`);
      } else {
        setSelectedAddressList((pre) => [
          ...pre,
          `${rowData.address}${dataKey}`,
        ]);
        add(`${rowData.address}${dataKey}`);
      }
    }
    // shift时， modifyValue可以输入值
    if (e.shiftKey && e.button === 0) {
      e.preventDefault();
      const start = String(Array.from(set)[1]);
      if (isIncludesAddress) {
        const selectedAddress = takeMiddleRectangleAddress(
          start,
          `${rowData.address}${dataKey}`,
        );
        setSelectedAddressList(selectedAddress);
        // remove(`${rowData.address}${dataKey}`);
      } else {
        newArr.push(`${rowData.address}${dataKey}`);
        const end = String(newArr[0]);
        const selectedAddress =
          start === 'undefined'
            ? [`${rowData.address}${dataKey}`]
            : takeMiddleRectangleAddress(start, end);
        setSelectedAddressList(selectedAddress);
        add(`${rowData.address}${dataKey}`);
      }
    }
  };

  const handleFocus = () => {
    // 单独聚焦时
    setSelectedAddressList([]);
    reset();
  };

  return (
    <BaseCell {...props}>
      <Input
        // 选中后滑动不会影响样式选择,使用classname权重不够
        style={
          (selectedAddressList.length === 0
            ? initSelectedAddress
            : selectedAddressList
          ).includes(`${rowData.address}${dataKey}`)
            ? { background: '#0078d4', color: '#fff', borderRadius: '2px' }
            : undefined
        }
        ref={inputRef}
        value={value}
        onChange={handleChange}
        bordered={false}
        onPressEnter={handleClick}
        onBlur={handleClick}
        onMouseDown={handleMouseDown}
        onFocus={handleFocus}
      />
    </BaseCell>
  );
};
export default InputCell;
