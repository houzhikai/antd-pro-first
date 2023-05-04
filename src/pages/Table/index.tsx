import { Table } from 'rsuite';
import BaseCell from './components/BaseCell';
import InputCell from './components/InputCell';
import { useCallback, useState } from 'react';
import './index.less';
import { data } from '@/components/dataList/TablePage';
const { Column, HeaderCell } = Table;

const App = () => {
  const [emailList, setEmailList] = useState(data.map((item) => item.zero));

  const handleEmailChange = useCallback((id, value) => {
    setEmailList((prevEmailList) => {
      const nextMailList = [...prevEmailList];
      nextMailList[id] = value;
      return nextMailList;
    });
  }, []);

  const columnWidths = 90;

  return (
    <Table
      cellBordered
      shouldUpdateScroll={false}
      height={705}
      data={data}
      headerHeight={46}
      virtualized
      rowHeight={() => 30}
      loading={data.length > 0 ? false : true}
    >
      <Column width={columnWidths} align="center">
        <HeaderCell>address</HeaderCell>
        <BaseCell style={{ paddingTop: 10 }} dataKey="id" />
      </Column>

      <Column width={columnWidths} align="center">
        <HeaderCell>0</HeaderCell>
        <InputCell
          column="zero0"
          dataKey="0"
          data={emailList}
          onChange={handleEmailChange}
        />
      </Column>

      <Column width={columnWidths} align="center">
        <HeaderCell>1</HeaderCell>
        <InputCell
          column="one"
          dataKey="1"
          data={emailList}
          onChange={handleEmailChange}
        />
      </Column>

      <Column width={columnWidths} align="center">
        <HeaderCell>2</HeaderCell>
        <InputCell
          column="two"
          dataKey="2"
          data={emailList}
          onChange={handleEmailChange}
        />
      </Column>

      <Column width={columnWidths} align="center">
        <HeaderCell>3</HeaderCell>
        <InputCell
          column="three"
          dataKey="3"
          data={emailList}
          onChange={handleEmailChange}
        />
      </Column>

      <Column width={columnWidths} align="center">
        <HeaderCell>4</HeaderCell>
        <InputCell
          column="four"
          dataKey="4"
          data={emailList}
          onChange={handleEmailChange}
        />
      </Column>

      <Column width={columnWidths} align="center">
        <HeaderCell>5</HeaderCell>
        <InputCell
          column="five"
          dataKey="5"
          data={emailList}
          onChange={handleEmailChange}
        />
      </Column>

      <Column width={columnWidths} align="center">
        <HeaderCell>6</HeaderCell>
        <InputCell
          column="six"
          dataKey="6"
          data={emailList}
          onChange={handleEmailChange}
        />
      </Column>

      <Column width={columnWidths} align="center">
        <HeaderCell>7</HeaderCell>
        <InputCell
          column="seven"
          dataKey="7"
          data={emailList}
          onChange={handleEmailChange}
        />
      </Column>

      <Column width={columnWidths} align="center">
        <HeaderCell>8</HeaderCell>
        <InputCell
          column="eight"
          dataKey="8"
          data={emailList}
          onChange={handleEmailChange}
        />
      </Column>

      <Column width={columnWidths} align="center">
        <HeaderCell>9</HeaderCell>
        <InputCell
          column="nine"
          dataKey="9"
          data={emailList}
          onChange={handleEmailChange}
        />
      </Column>

      <Column width={columnWidths} align="center">
        <HeaderCell>A</HeaderCell>
        <InputCell
          column="A"
          dataKey="A"
          data={emailList}
          onChange={handleEmailChange}
        />
      </Column>

      <Column width={columnWidths}>
        <HeaderCell>B</HeaderCell>
        <InputCell
          dataKey="email"
          data={emailList}
          onChange={handleEmailChange}
        />
      </Column>
      <Column width={columnWidths}>
        <HeaderCell>C</HeaderCell>
        <InputCell
          dataKey="email"
          data={emailList}
          onChange={handleEmailChange}
        />
      </Column>

      <Column width={columnWidths}>
        <HeaderCell>D</HeaderCell>
        <InputCell
          dataKey="email"
          data={emailList}
          onChange={handleEmailChange}
        />
      </Column>

      <Column width={columnWidths}>
        <HeaderCell>E</HeaderCell>
        <InputCell
          dataKey="email"
          data={emailList}
          onChange={handleEmailChange}
        />
      </Column>

      <Column width={columnWidths}>
        <HeaderCell>F</HeaderCell>
        <InputCell
          dataKey="email"
          data={emailList}
          onChange={handleEmailChange}
        />
      </Column>
    </Table>
  );
};

export default App;
