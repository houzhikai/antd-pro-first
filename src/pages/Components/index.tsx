import React from 'react';
// import Message from './blocks/Message';
import MyTable from './blocks/Form';
import { columnsObj, data } from './blocks/Form/data';
// import AnalyzingExcel from './blocks/AnalyzingExcel';

const ComponentsPages = () => {
  const searchList = ['name', 'age', 'address', 'number', 'test'];
  return (
    <div>
      {/* <Message /> */}
      <MyTable
        title="111"
        columns={columnsObj}
        dataSource={data}
        searchList={searchList}
      />
      {/* <AnalyzingExcel /> */}
    </div>
  );
};

export default ComponentsPages;
