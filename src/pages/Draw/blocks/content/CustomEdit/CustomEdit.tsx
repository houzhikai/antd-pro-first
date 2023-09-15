import { useModel } from '@umijs/max';
import { Input } from 'antd';
import styles from './CustomNode.less';

const CustomEdit = () => {
  const {
    // nodeBg,
    setNodeBg,
    // nodeHidden,
    // setNodeHidden,
  } = useModel('useTestFlowModel');
  const { selectedNode, setSelectedNode } = useModel('useDrawModel');

  const handleChangeBg = (e) => {
    setNodeBg(e.target.value);
  };
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
    <div className={styles.wrapper}>
      {Object.keys(selectedNode).length > 0 ? (
        <>
          <div className={styles['detail-item']}>
            <Input
              addonBefore="测试流name："
              placeholder="请输入名称"
              defaultValue={selectedNode.data.label}
              value={selectedNode.data.label}
              onChange={handleChange}
            />
          </div>
          <div className={styles['detail-item']}>
            <Input
              defaultValue={selectedNode.style ?? null}
              addonBefore="background："
              onPressEnter={handleChangeBg}
              onBlur={handleChangeBg}
            />
          </div>
        </>
      ) : null}

      {/* <label>label:</label>
      <input
        value={nodeName}
        onChange={(evt) => setNodeName(evt.target.value)}
      /> */}
      {/* <label className="updatenode__bglabel">background:</label>
      <input value={nodeBg} onChange={(evt) => setNodeBg(evt.target.value)} /> */}

      {/* <div className="updatenode__checkboxwrapper">
        <label>hidden:</label>
        <input
          type="checkbox"
          checked={nodeHidden}
          onChange={(evt) => setNodeHidden(evt.target.checked)}
        />
      </div> */}
    </div>
  );
};

export default CustomEdit;
