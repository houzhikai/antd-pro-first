import { useCallback, useState } from 'react';
import { useThrottleEffect } from 'ahooks';
import { message } from 'antd';
import { Table } from 'rsuite';
import BaseCell from './BaseCell';
import InputCell from './InputCell';
import { columnsList } from './columnsList';
import { LoadingOutlined } from '@ant-design/icons';

import '../../../index.css';
import { useDBMPageProvider } from '../../../components/container';
import { getMaxAddress } from '../../../components/getMaxAddress';
import {
  takeMiddleAddress,
  takeMiddleRows,
} from '../../../components/takeMiddleAddress';

const { Column, HeaderCell } = Table;

const VirtualTable = () => {
  const {
    page,
    mode,
    setIsTablePage,
    ip,
    tableRef,
    data,
    setData,
    key,
    setSelectedAddressList,
  } = useDBMPageProvider();

  // const { search } = useLocation();

  let [list, setList] = useState<any>(data);
  // const ip = useMemo(() => getIp(queryParams().site), [search]);

  //翻页执行
  useThrottleEffect(
    () => {
      setData([]);
      // ip 为空时不加载接口
      if (ip) {
        fetch(`http://${ip}/site/dbm/reader`, {
          method: 'POST',
          body: JSON.stringify({ page }),
        })
          .then((response) => response.json())
          .then((res) => {
            if (res.result === '0') {
              // 后端表示不可能返回空数组
              setData(res.data);
            } else {
              message.error(res.msg);
            }
          })
          .catch(() => {
            // message.error(res.msg || 'reader 接口调用失败');
            setIsTablePage(true);
          });
      }
    },
    [ip, page], // 取消监听search触发reader接口，在点击menu时触发，为了解决切换site时page从0开始，且只调用一次reader接口
    { wait: 1000, leading: false, trailing: true },
  );

  const handleChange = useCallback(
    (id: number, value: string, column: string) => {
      setTimeout(() => {
        const newList = list.map((item: any, index: number) => {
          if (index === id) {
            return {
              ...item,
              [column]: value,
            };
          }
          return item;
        });
        setList(newList);
      }, 100);
    },
    [list],
  );
  const columnWidth = 90;

  // 全选
  const handleAllSelect = () => {
    const start = '00';
    const maxAddress = `${getMaxAddress(mode).toUpperCase()}F`;
    const selectedAddress = takeMiddleAddress(start, maxAddress);
    setSelectedAddressList(selectedAddress);
  };

  // 选择整列
  const handleCrossSelect = (dataKey: string) => {
    const start = `0`;
    const maxAddress = `${getMaxAddress(mode).toUpperCase()}`;
    const selectedRows = takeMiddleRows(start, maxAddress);
    const selectedAddress = selectedRows.map((item) => `${item}${dataKey}`);
    setSelectedAddressList(selectedAddress);
  };

  return (
    <>
      {data.length > 0 ? (
        <div style={{ width: 1536, height: `76vh`, marginRight: 20 }}>
          <Table
            ref={tableRef}
            key={key}
            fillHeight
            shouldUpdateScroll
            height={400}
            data={data}
            headerHeight={46}
            virtualized
            rowHeight={() => 30}
            loading={data.length > 0 ? false : true}
          >
            <Column width={columnWidth} align="center">
              <HeaderCell style={{ background: '#ccc', cursor: 'cell' }}>
                <div onClick={handleAllSelect}>Address</div>
              </HeaderCell>
              <BaseCell
                style={{ paddingTop: 10, cursor: 'ew-resize' }}
                dataKey="address"
              />
            </Column>
            {columnsList.map((item) => (
              <Column key={item.dataKey} width={columnWidth}>
                <HeaderCell
                  style={{
                    background: '#ccc',
                    cursor: 's-resize',
                    padding: '0',
                  }}
                >
                  <div
                    style={{ lineHeight: '46px', padding: '0 10px' }}
                    onClick={() => handleCrossSelect(item.dataKey)}
                  >
                    {item.dataKey}
                  </div>
                </HeaderCell>
                <InputCell
                  column={item.column}
                  dataKey={item.dataKey}
                  mode={mode}
                  onChange={handleChange}
                />
              </Column>
            ))}
          </Table>
        </div>
      ) : (
        <div className="rs-table-body-info">
          <LoadingOutlined
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
          Loading...
        </div>
      )}
    </>
  );
};

export default VirtualTable;
