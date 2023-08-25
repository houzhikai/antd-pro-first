// import TestFlow from './blocks/TestFlow';
// import Demo2 from './blocks/Demo2';
// import CustomNode from './blocks/CustomNode';
import ReactFlowProviderPage from './blocks/ReactFlowProviderPage';
import Nav from './blocks/components/ReactFlowProvider/NavAction/Nav';

import 'reactflow/dist/style.css';
import './index.less';

const TestFlowPage = () => {
  return (
    <div>
      <Nav />

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
