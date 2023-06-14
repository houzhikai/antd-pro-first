// import TestFlow from './blocks/TestFlow';
// import Demo2 from './blocks/Demo2';
// import CustomNode from './blocks/CustomNode';
import ReactFlowProviderPage from './blocks/ReactFlowProviderPage';

import 'reactflow/dist/style.css';
import Save from './blocks/components/ReactFlowProvider/Save';
const TestFlowPage = () => {
  return (
    <div>
      <Save />

      <div style={{ height: '80vh', border: '1px solid #ccc' }}>
        {/* <TestFlow /> */}
        {/* <Demo2 /> */}
        {/* <CustomNode /> */}
        <ReactFlowProviderPage />
      </div>
    </div>
  );
};

export default TestFlowPage;
