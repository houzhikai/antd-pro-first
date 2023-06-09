import { useModel } from '@umijs/max';

const CustomEdit = () => {
  const {
    nodeName,
    setNodeName,
    nodeBg,
    setNodeBg,
    nodeHidden,
    setNodeHidden,
  } = useModel('useTestFlowModel');
  return (
    <div className="updatenode__controls">
      <label>label:</label>
      <input
        value={nodeName}
        onChange={(evt) => setNodeName(evt.target.value)}
      />

      <label className="updatenode__bglabel">background:</label>
      <input value={nodeBg} onChange={(evt) => setNodeBg(evt.target.value)} />

      <div className="updatenode__checkboxwrapper">
        <label>hidden:</label>
        <input
          type="checkbox"
          checked={nodeHidden}
          onChange={(evt) => setNodeHidden(evt.target.checked)}
        />
      </div>
    </div>
  );
};

export default CustomEdit;
