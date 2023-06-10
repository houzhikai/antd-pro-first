import { useRef } from 'react';
import CustomNode from './CustomNode';
import { ReactFlowProvider } from 'reactflow';
import Sidebar from './components/ReactFlowProvider/Sidebar';
import './components/ReactFlowProvider/indx.less';

const ReactFlowProviderPage = () => {
  const reactFlowWrapper = useRef(null);
  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <Sidebar />
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <CustomNode />
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default ReactFlowProviderPage;
