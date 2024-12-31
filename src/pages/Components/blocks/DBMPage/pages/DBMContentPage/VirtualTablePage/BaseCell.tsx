import { forwardRef } from 'react';
import { Table } from 'rsuite';
import { useDBMPageProvider } from '../../../components/container';
import { takeMiddleRows } from '../../../components/takeMiddleAddress';
const { Cell } = Table;

const BaseCell = forwardRef((props: any, ref: any) => {
  const { setSelectedAddressList } = useDBMPageProvider();
  const { children, rowData, dataKey, ...rest } = props;
  // 选择整行
  const handleRowsSelect = () => {
    // 单选行
    if (dataKey === 'address') {
      const start = `${rowData.address}0`;
      const maxAddress = `${rowData.address}F`;
      const selectedAddress = takeMiddleRows(start, maxAddress).map((item) =>
        item.length === 1 ? `0${item}` : item,
      );
      setSelectedAddressList(selectedAddress);
    }
  };

  return (
    <Cell
      ref={ref}
      rowData={rowData}
      dataKey={dataKey}
      onClick={handleRowsSelect}
      onDoubleClick={() => {
        console.log(rowData);
      }}
      {...rest}
    >
      {children}
    </Cell>
  );
});
export default BaseCell;
