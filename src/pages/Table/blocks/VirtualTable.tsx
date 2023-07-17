import { useCallback, useMemo, useState } from 'react';
import { Table } from 'rsuite';
import BaseCell from './components/BaseCell';
import InputCell from './components/InputCell';
import { LoadingOutlined } from '@ant-design/icons';
import { columnsList, data } from '@/components/dataList/TablePage/index';

import '../index.less';

const { Column, HeaderCell } = Table;

const App = () => {
  let [list, setList] = useState(data);

  const itemList = useMemo(
    () => (column) => list.map((item) => item[column]),
    [list],
  );

  const handleChange = useCallback(
    (id: number, value: string, column: string) => {
      setTimeout(async () => {
        const yyy = await list.map((item, index) => {
          if (index === id) {
            return {
              ...item,
              [column]: value,
            };
          }
          return item;
        });
        setList(yyy);
      }, 100);
    },
    [list],
  );
  const [columnWidths] = useState({ zero: 90 });

  return (
    <>
      {data.length > 0 ? (
        <div style={{ width: 1536, height: `76vh`, marginRight: 20 }}>
          <Table
            // ref={tableRef}
            fillHeight
            shouldUpdateScroll={false}
            height={400}
            data={data}
            headerHeight={46}
            virtualized
            rowHeight={() => 30}
            loading={data.length > 0 ? false : true}
          >
            <Column width={columnWidths.zero} align="center">
              <HeaderCell style={{ background: '#ccc' }}>address</HeaderCell>
              <BaseCell style={{ paddingTop: 10 }} dataKey="address" />
            </Column>
            {columnsList.map((item) => (
              <Column key={item.dataKey} width={columnWidths.zero}>
                <HeaderCell style={{ background: '#ccc' }}>
                  {item.dataKey}
                </HeaderCell>
                <InputCell
                  column={item.column}
                  dataKey={item.dataKey}
                  data={itemList(item.column)}
                  onChange={handleChange}
                  setList={setList}
                />
              </Column>
            ))}
          </Table>
        </div>
      ) : (
        <div className="rs-table-body-info">
          <LoadingOutlined /> loading...
        </div>
      )}
    </>
  );
};

export default App;
