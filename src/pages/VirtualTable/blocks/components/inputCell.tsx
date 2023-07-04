import { useModel } from '@umijs/max';
import { useCallback, useState } from 'react';

import BaseCell from './BaseCell';

import styles from '../../index.less';

const InputCell = ({
  rowData,
  data,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  val,
  //   onChange,
  dataKey,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  column,
  //   mode,
  //   setList,
  ...props
}: any) => {
  const { add, remove } = useModel('useGetDBMDataList');
  let [selectedDiv, setSelectedDiv] = useState('');

  const handleClick = useCallback(() => {
    console.log(rowData.id, dataKey, data[rowData.id]);
    // css添加边框样式
    setSelectedDiv((c: string) => {
      return c ? '' : 'selected';
    });
    if (selectedDiv) {
      remove(`${rowData.id}${dataKey}`);
      console.log('remove', `${rowData.id}${dataKey}`);
    } else {
      console.log('add');
      add(`${rowData.id}${dataKey}`);
    }
  }, [`${rowData.id}${dataKey}`, selectedDiv]);

  return (
    <BaseCell {...props}>
      {/* <Input
        value={data[rowData.id]}
        onChange={handleChange}
        bordered={false}
        onPressEnter={handleClick}
        onBlur={handleClick}
      /> */}
      <div
        className={`${
          selectedDiv === 'selected' ? styles.selected : styles.default
        }`}
        onClick={handleClick}
      >
        {data[rowData.id]}
      </div>
    </BaseCell>
  );
};
export default InputCell;
