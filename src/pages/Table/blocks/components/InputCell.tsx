import { useModel } from '@umijs/max';
import { useCallback, useState } from 'react';

import BaseCell from './BaseCell';

// import styles from '../../index.less';
import { Input } from 'antd';

const InputCell = ({
  rowData,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  val,
  onChange,
  dataKey,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  column,
  //   mode,
  //   setList,
  ...props
}: any) => {
  const { add, remove } = useModel('useGetDBMDataList');
  let [selectedDiv, setSelectedDiv] = useState('');
  let [value, setValue] = useState(rowData[column]);

  const handleChange = useCallback(
    (event: any) => {
      onChange(rowData.id, event.target.value, column);
      setValue(() => event.target.value);
    },
    [value],
  );
  const handleClick = useCallback(
    (e) => {
      // console.log(value, rowData.id, dataKey, data[rowData.id]);
      // css添加边框样式
      setSelectedDiv((c: string) => {
        return c ? '' : 'selected';
      });
      if (selectedDiv) {
        remove(`${rowData.id}${dataKey}`);
      } else {
        add(`${rowData.id}${dataKey}`);
      }
      e.preventDefault();
    },
    [`${rowData.id}${dataKey}`, selectedDiv],
  );
  const handleMouseDown = (e: any) => {
    // ctrl时 modifyValue可以输入值
    if (e.ctrlKey && e.button === 0) {
      e.preventDefault();
      // css添加边框样式
      setSelectedDiv((c: string) => {
        return c ? '' : 'selected';
      });
      if (selectedDiv) {
        remove(`${rowData.id}${dataKey}`);
      } else {
        add(`${rowData.id}${dataKey}`);
      }
    }
  };

  return (
    <BaseCell {...props}>
      <Input
        value={value}
        onChange={handleChange}
        bordered={false}
        onPressEnter={handleClick}
        onBlur={handleClick}
        onMouseDown={handleMouseDown}
      />
    </BaseCell>
  );
};
export default InputCell;
