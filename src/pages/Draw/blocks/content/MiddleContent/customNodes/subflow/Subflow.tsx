import { useModel } from '@umijs/max';
import { useEffect } from 'react';
import { Handle, Position } from 'reactflow';

import styles from './index.less';
import {
  customNode,
  customEdge,
} from '@/pages/Draw/blocks/CustomFlow/customFlow';
import { Popover } from 'antd';
import PopoverButtonList from '../../PopoverButtonList';
import InputToolTip from '@/components/InputToolTip';

const Subflow = ({ data }) => {
  let { nodes, setNodes, edges, setEdges, handleList } =
    useModel('useTestFlowModel');
  let newNodes: any = [];
  let newEdges: any = [];
  useEffect(() => {
    if (nodes.length === 0 || edges.length === 0) {
      newNodes = nodes.concat(customNode);
      newEdges = edges.concat(customEdge);
      // console.log({ nodes, subflowNode, subflowEdge, newNodes });
      setNodes(newNodes);
      setEdges(newEdges);
    }
  }, []);

  return (
    <Popover
      placement="right"
      title=""
      content={PopoverButtonList}
      trigger="hover"
    >
      <div style={{ height: '100%' }}>
        <InputToolTip defaultValue={data.label} className={styles.name1} />
        {handleList.map((item, index) => (
          <Handle
            key={item.id}
            type={item.type}
            className={styles[item.className]}
            position={Position[item.position]}
            id={item.id}
            //@ts-ignore
            test={index}
            style={item?.style}
          />
        ))}
      </div>
    </Popover>
  );
};

export default Subflow;
