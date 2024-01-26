import React from 'react';
// import Message from './blocks/Message';
import MyTable from './blocks/Form';
import { columnsObj, data, searchList } from './blocks/Form/data';
import HandWrittenCode from './blocks/HandWrittenCode';
// import AnalyzingExcel from './blocks/AnalyzingExcel';

const ComponentsPages = () => {
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
      <HandWrittenCode />
    </div>
  );
};

export default ComponentsPages;
