import { forwardRef } from 'react';
import { Table } from 'rsuite';
const { Cell } = Table;

const BaseCell = forwardRef((props: any, ref: any) => {
  const { children, rowData, ...rest } = props;
  return (
    <Cell
      ref={ref}
      rowData={rowData}
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
