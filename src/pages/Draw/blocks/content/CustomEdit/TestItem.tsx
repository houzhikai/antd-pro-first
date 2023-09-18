import { useModel } from '@umijs/max';
import { Input, InputNumber } from 'antd';
import styles from './index.less';

const TestItem = () => {
  const { selectedNode, setSelectedNode } = useModel('useDrawModel');

  const handleChange = (e) => {
    selectedNode.data.label = e.target.value;

    setSelectedNode((obj) => {
      return {
        ...obj,
        data: {
          label: e.target.value,
        },
      };
    });
  };

  return (
    <div>
      {Object.keys(selectedNode).length > 0 ? (
        <>
          <div className={styles.title}>测试项：</div>
          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>Class：</label>
            <Input
              placeholder="请输入 Class"
              defaultValue={selectedNode.data.label}
              value={selectedNode.data.label}
              onChange={handleChange}
            />
          </div>
          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>测试项name：</label>
            <Input
              placeholder="请输入名称"
              defaultValue={selectedNode.data.label}
              value={selectedNode.data.label}
              onChange={handleChange}
            />
          </div>

          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>LoopCount：</label>
            <InputNumber
              style={{ width: '100%' }}
              placeholder="请输入名称"
              defaultValue={1}
              min={1}
              controls={false}
              //   value={nodeName}
              //   onChange={(evt) => setNodeName(evt.target.value)}
            />
          </div>
          {/* 修改背景颜色，暂无该功能 */}
          {/* <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>Background：</label>
            <Input
              defaultValue={selectedNode.style ?? null}
              onPressEnter={handleChangeBg}
              onBlur={handleChangeBg}
            />
          </div> */}
        </>
      ) : null}
    </div>
  );
};

export default TestItem;
