import { useLocation } from '@umijs/max';
import { message, Input } from 'antd';
import { useState, useCallback } from 'react';
import { changeMode } from './changeMode';
import BaseCell from './BaseCell';

const InputCell = ({
  rowData,
  data,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  val,
  onChange,
  dataKey,
  column,
  mode,
  //   setList,
  ...props
}: any) => {
  const { search } = useLocation();
  let [value, setValue] = useState(rowData[column]);
  function handleChange(event: any) {
    onChange(rowData.id, event.target.value);
    setValue(event.target.value);
  }
  const handleClick = useCallback(() => {
    // const param = search.split('?')[1];
    // const ip = getIp(queryParams().site); // 从 useGetSites 中调用方法
    if (value === '') {
      // 未输入值时再次返回原来的值
      //   setList((preList: any) => {
      //     const nextList = [...preList];
      //     nextList[rowData.id] = rowData[column];
      //     return nextList;
      //   });
      value = rowData[column];
      // 暂时不加message提示，因为在不改值的前提下，光标移进再移出，value也为''，一样会有message提示，但此时rowData[column]不为空，不应该给出提示
      // message.error(`地址0x${rowData.address}${dataKey}的值不能为空`);
    }
    // 是否是16进制写法，取消最多9位数的限制，下面还会校验最大值
    if (/^[A-Fa-f0-9]{1,}$/.test(value) || value === '') {
      // 16进制转10进制
      const Hex = parseInt(value, 16) || parseInt(rowData[column], 16);
      // 不通模式下的校验
      if (
        Hex >= 0 &&
        Hex < Math.pow(2, Number(changeMode(mode))) &&
        mode !== '-'
      ) {
        // 校验
        // if (value !== rowData[column] && value !== '') {
        //   // if (value !== rowData[column]) {
        //   fetch(`http://${ip}/site/dbm/writer`, {
        //     method: 'Post',
        //     body: JSON.stringify({
        //       page,
        //       address: [`${rowData.address}${dataKey}`],
        //       value,
        //     }),
        //   })
        //     .then((response) => response.json())
        //     .then((res) => {
        //       if (res.result !== '0') {
        //         message.error(res.msg);
        //       }
        //     })
        //     .catch((res) => {
        //       message.error(res.msg || 'writer 接口调用失败');
        //     });
        //   setValue('');
        //   rowData[column] = value;
        // }
      } else {
        // 超出范围再次返回原来的值
        // setList((preList: any) => {
        //   const nextList = [...preList];
        //   nextList[rowData.id] = rowData[column];
        //   return nextList;
        // });
        value = rowData[column];
        message.error(`地址0x${rowData.address}${dataKey}的值超出范围`);
      }
    } else {
      // 有非法值再次返回原来的值
      //   setList((preList: any) => {
      //     const nextList = [...preList];
      //     nextList[rowData.id] = rowData[column];
      //     return nextList;
      //   });
      value = rowData[column];
      message.error(`地址0x${rowData.address}${dataKey}的值有非法字符！`);
    }
  }, [search, value]);
  return (
    <BaseCell {...props}>
      <Input
        value={data[rowData.id]}
        onChange={handleChange}
        bordered={false}
        onPressEnter={handleClick}
        onBlur={handleClick}
      />
    </BaseCell>
  );
};
export default InputCell;
