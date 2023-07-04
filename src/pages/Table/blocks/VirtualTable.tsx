import { useState, useCallback, useEffect } from 'react';
import { Table } from 'rsuite';
import BaseCell from './components/BaseCell';
import InputCell from './components/InputCell';
import { LoadingOutlined } from '@ant-design/icons';
import { data } from '@/components/dataList/TablePage/index';

import '../index.less';

const { Column, HeaderCell } = Table;

const App = () => {
  let [zeroList, setZeroList] = useState(
    data.map((item: { zero: string }) => item.zero),
  );
  const [oneList, setOneList] = useState(
    data.map((item: { one: string }) => item.one),
  );
  const [twoList, setTwoList] = useState(
    data.map((item: { two: string }) => item.two),
  );
  const [threeList, setThreeList] = useState(
    data.map((item: { three: string }) => item.three),
  );
  const [fourList, setFourList] = useState(
    data.map((item: { four: string }) => item.four),
  );
  const [fiveList, setFiveList] = useState(
    data.map((item: { five: string }) => item.five),
  );
  const [sixList, setSixList] = useState(
    data.map((item: { six: string }) => item.six),
  );
  const [sevenList, setSevenList] = useState(
    data.map((item: { seven: string }) => item.seven),
  );
  const [eightList, setEightList] = useState(
    data.map((item: { eight: string }) => item.eight),
  );
  const [nineList, setNineList] = useState(
    data.map((item: { nine: string }) => item.nine),
  );
  const [aList, setAList] = useState(data.map((item: { A: string }) => item.A));
  const [bList, setBList] = useState(data.map((item: { B: string }) => item.B));
  const [cList, setCList] = useState(data.map((item: { C: string }) => item.C));
  const [dList, setDList] = useState(data.map((item: { D: string }) => item.D));
  const [eList, setEList] = useState(data.map((item: { E: string }) => item.E));
  const [fList, setFList] = useState(data.map((item: { F: string }) => item.F));

  //数据刷新执行
  useEffect(() => {
    if (data.length > 0) {
      setZeroList(data.map((item: any) => item.zero));
      setOneList(data.map((item: any) => item.one));
      setTwoList(data.map((item: any) => item.two));
      setThreeList(data.map((item: any) => item.three));
      setFourList(data.map((item: any) => item.four));
      setFiveList(data.map((item: any) => item.five));
      setSixList(data.map((item: any) => item.six));
      setSevenList(data.map((item: any) => item.seven));
      setEightList(data.map((item: any) => item.eight));
      setNineList(data.map((item: any) => item.nine));
      setAList(data.map((item: any) => item.A));
      setBList(data.map((item: any) => item.B));
      setCList(data.map((item: any) => item.C));
      setDList(data.map((item: any) => item.D));
      setEList(data.map((item: any) => item.E));
      setFList(data.map((item: any) => item.F));
    }
  }, [data]);

  const handleZeroChange = useCallback((id: number, value: string) => {
    setZeroList((preList: any) => {
      const nextList = [...preList];
      nextList[id] = value;
      return nextList;
    });
  }, []);
  const handleOneChange = useCallback((id: number, value: string) => {
    setOneList((preList: any) => {
      const nextList = [...preList];
      nextList[id] = value;
      return nextList;
    });
  }, []);
  const handleTwoChange = useCallback((id: number, value: string) => {
    setTwoList((preList: any) => {
      const nextList = [...preList];
      nextList[id] = value;
      return nextList;
    });
  }, []);
  const handleThreeChange = useCallback((id: number, value: string) => {
    setThreeList((preList: any) => {
      const nextList = [...preList];
      nextList[id] = value;
      return nextList;
    });
  }, []);
  const handleFourChange = useCallback((id: number, value: string) => {
    setFourList((preList: any) => {
      const nextList = [...preList];
      nextList[id] = value;
      return nextList;
    });
  }, []);
  const handleFiveChange = useCallback((id: number, value: string) => {
    setFiveList((preList: any) => {
      const nextList = [...preList];
      nextList[id] = value;
      return nextList;
    });
  }, []);
  const handleSixChange = useCallback((id: number, value: string) => {
    setSixList((preList: any) => {
      const nextList = [...preList];
      nextList[id] = value;
      return nextList;
    });
  }, []);
  const handleSevenChange = useCallback((id: number, value: string) => {
    setSevenList((preList: any) => {
      const nextList = [...preList];
      nextList[id] = value;
      return nextList;
    });
  }, []);
  const handleEightChange = useCallback((id: number, value: string) => {
    setEightList((preList: any) => {
      const nextList = [...preList];
      nextList[id] = value;
      return nextList;
    });
  }, []);
  const handleNineChange = useCallback((id: number, value: string) => {
    setNineList((preList: any) => {
      const nextList = [...preList];
      nextList[id] = value;
      return nextList;
    });
  }, []);
  const handleAChange = useCallback((id: number, value: string) => {
    setAList((preList: any) => {
      const nextList = [...preList];
      nextList[id] = value;
      return nextList;
    });
  }, []);
  const handleBChange = useCallback((id: number, value: string) => {
    setBList((preList: any) => {
      const nextList = [...preList];
      nextList[id] = value;
      return nextList;
    });
  }, []);
  const handleCChange = useCallback((id: number, value: string) => {
    setCList((preList: any) => {
      const nextList = [...preList];
      nextList[id] = value;
      return nextList;
    });
  }, []);
  const handleDChange = useCallback((id: number, value: string) => {
    setDList((preList: any) => {
      const nextList = [...preList];
      nextList[id] = value;
      return nextList;
    });
  }, []);
  const handleEChange = useCallback((id: number, value: string) => {
    setEList((preList: any) => {
      const nextList = [...preList];
      nextList[id] = value;
      return nextList;
    });
  }, []);
  const handleFChange = useCallback((id: number, value: string) => {
    setFList((preList: any) => {
      const nextList = [...preList];
      nextList[id] = value;
      return nextList;
    });
  }, []);

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
            <Column width={columnWidths.zero}>
              <HeaderCell style={{ background: '#ccc' }}>0</HeaderCell>
              <InputCell
                column="zero"
                dataKey="0"
                data={zeroList}
                onChange={handleZeroChange}
                setList={setZeroList}
              />
            </Column>
            <Column width={columnWidths.zero}>
              <HeaderCell style={{ background: '#ccc' }}>1</HeaderCell>
              <InputCell
                column="one"
                dataKey="1"
                data={oneList}
                onChange={handleOneChange}
                setList={setOneList}
              />
            </Column>
            <Column width={columnWidths.zero}>
              <HeaderCell style={{ background: '#ccc' }}>2</HeaderCell>
              <InputCell
                column="two"
                dataKey="2"
                data={twoList}
                onChange={handleTwoChange}
                setList={setTwoList}
              />
            </Column>
            <Column width={columnWidths.zero}>
              <HeaderCell style={{ background: '#ccc' }}>3</HeaderCell>
              <InputCell
                column="three"
                dataKey="3"
                data={threeList}
                onChange={handleThreeChange}
                setList={setThreeList}
              />
            </Column>
            <Column width={columnWidths.zero}>
              <HeaderCell style={{ background: '#ccc' }}>4</HeaderCell>
              <InputCell
                column="four"
                dataKey="4"
                data={fourList}
                onChange={handleFourChange}
                setList={setFourList}
              />
            </Column>
            <Column width={columnWidths.zero}>
              <HeaderCell style={{ background: '#ccc' }}>5</HeaderCell>
              <InputCell
                column="five"
                dataKey="5"
                data={fiveList}
                onChange={handleFiveChange}
                setList={setFiveList}
              />
            </Column>
            <Column width={columnWidths.zero}>
              <HeaderCell style={{ background: '#ccc' }}>6</HeaderCell>
              <InputCell
                column="six"
                dataKey="6"
                data={sixList}
                onChange={handleSixChange}
                setList={setSixList}
              />
            </Column>
            <Column width={columnWidths.zero}>
              <HeaderCell style={{ background: '#ccc' }}>7</HeaderCell>
              <InputCell
                column="seven"
                dataKey="7"
                data={sevenList}
                onChange={handleSevenChange}
                setList={setSevenList}
              />
            </Column>
            <Column width={columnWidths.zero}>
              <HeaderCell style={{ background: '#ccc' }}>8</HeaderCell>
              <InputCell
                column="eight"
                dataKey="8"
                data={eightList}
                onChange={handleEightChange}
                setList={setEightList}
              />
            </Column>
            <Column width={columnWidths.zero}>
              <HeaderCell style={{ background: '#ccc' }}>9</HeaderCell>
              <InputCell
                column="nine"
                dataKey="9"
                data={nineList}
                onChange={handleNineChange}
                setList={setNineList}
              />
            </Column>
            <Column width={columnWidths.zero}>
              <HeaderCell style={{ background: '#ccc' }}>A</HeaderCell>
              <InputCell
                column="A"
                dataKey="A"
                data={aList}
                onChange={handleAChange}
                setList={setAList}
              />
            </Column>
            <Column width={columnWidths.zero}>
              <HeaderCell style={{ background: '#ccc' }}>B</HeaderCell>
              <InputCell
                column="B"
                dataKey="B"
                data={bList}
                onChange={handleBChange}
                setList={setBList}
              />
            </Column>
            <Column width={columnWidths.zero}>
              <HeaderCell style={{ background: '#ccc' }}>C</HeaderCell>
              <InputCell
                column="C"
                dataKey="C"
                data={cList}
                onChange={handleCChange}
                setList={setCList}
              />
            </Column>
            <Column width={columnWidths.zero}>
              <HeaderCell style={{ background: '#ccc' }}>D</HeaderCell>
              <InputCell
                column="D"
                dataKey="D"
                data={dList}
                onChange={handleDChange}
                setList={setDList}
              />
            </Column>
            <Column width={columnWidths.zero}>
              <HeaderCell style={{ background: '#ccc' }}>E</HeaderCell>
              <InputCell
                column="E"
                dataKey="E"
                data={eList}
                onChange={handleEChange}
                setList={setEList}
              />
            </Column>
            <Column width={columnWidths.zero}>
              <HeaderCell style={{ background: '#ccc' }}>F</HeaderCell>
              <InputCell
                column="F"
                dataKey="F"
                data={fList}
                onChange={handleFChange}
                setList={setFList}
              />
            </Column>
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
