import { InputNumber, Select } from 'antd';
import { useModel } from '@umijs/max';
import styles from './index.less';

const SelectedEdgeItem = () => {
  const { edges, setEdges } = useModel('useTestFlowModel');

  const selectedEdgeItem: any = edges.filter((item) => item.selected)[0]; // 选中的edge样式

  const options = [
    {
      value: 'simplebezier',
      label: 'simplebezier',
    },
    {
      value: 'smoothstep',
      label: 'Smoothstep',
    },
    {
      value: 'step',
      label: 'Step',
    },
    {
      value: 'default',
      label: 'Bezier',
    },
    {
      value: 'straight',
      label: 'Straight',
    },
  ];

  const handleChangeLabel = (value) => {
    const newEdge = edges.map((item) => {
      if (item.selected) {
        return { ...item, label: String(value) };
      }
      return item;
    });
    setEdges(newEdge);
  };

  const handleChangeEdgeType = (value) => {
    const newEdge = edges.map((item) => {
      if (item.selected) {
        return { ...item, type: value };
      }
      return item;
    });
    setEdges(newEdge);
  };

  return (
    <div>
      {selectedEdgeItem?.selected ? (
        <>
          <div className={styles.title}>连线：</div>
          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>Label：</label>
            <InputNumber
              style={{ width: '100%' }}
              placeholder="请输入名称"
              value={selectedEdgeItem.label}
              onChange={handleChangeLabel}
              controls={false}
            />
          </div>

          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>连线方式：</label>
            <Select
              style={{ width: '100%' }}
              onChange={handleChangeEdgeType}
              defaultValue="simplebezier"
              options={options}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SelectedEdgeItem;
