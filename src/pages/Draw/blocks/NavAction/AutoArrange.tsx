import { Button, Image, Popconfirm, Tooltip } from 'antd';
import autoSvg from '@/icon/draw/toolbarIconList/autoFormat4.svg';
import { useModel } from '@umijs/max';
import autoFormatPosition from './components/autoFormatPosition';
import { useCallback } from 'react';

const AutoArrange = () => {
  const { nodes, edges, setNodes, setKey } = useModel('useTestFlowModel');
  const handleClick = useCallback(() => {
    const xxx = autoFormatPosition(nodes);
    setNodes(xxx.newNodes);
    setKey((c) => c + 1);
    console.log(222, xxx, edges);
  }, [nodes]);
  return (
    <div style={{ marginLeft: 10 }}>
      {/* 测试阶段不需要二次确认 */}
      <Popconfirm
        placement="rightTop"
        title="Are you sure to formatting flows?"
        okText="Ok"
        cancelText="Cancel"
        onConfirm={handleClick}
      >
        <Tooltip title="Auto Format" placement="bottom">
          <Button
            icon={<Image src={autoSvg} width={20} preview={false} />}
            type="link"
            size="small"
            onClick={handleClick}
          />
        </Tooltip>
      </Popconfirm>
    </div>
  );
};

export default AutoArrange;
