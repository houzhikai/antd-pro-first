// import DraggableModal from './blocks/DraggableModal';
// import Message from './blocks/Message';
// import MyTable from './blocks/Form';
// import { columnsObj, data, searchList } from './blocks/Form/data';
// import HandWrittenCode from './blocks/HandWrittenCode';
// import TestCode from './blocks/TestCode';
// import AnalyzingExcel from './blocks/AnalyzingExcel';

import CrossPageTabCommunication from './blocks/CrossPageTabCommunication';

const ComponentsPages = () => {
  return (
    <div>
      {/* <Message /> */}
      {/* <MyTable
        title="111"
        columns={columnsObj}
        dataSource={data}
        searchList={searchList}
      /> */}
      {/* <AnalyzingExcel /> */}
      {/* <HandWrittenCode /> */}
      {/* <TestCode /> */}
      {/* <TreePage /> */}
      {/* <CollapsePage /> */}
      {/* <DraggableModal /> */}
      <CrossPageTabCommunication />
    </div>
  );
};

export default ComponentsPages;
