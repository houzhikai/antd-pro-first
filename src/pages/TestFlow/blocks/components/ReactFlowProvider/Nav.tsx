import Save from './Save';
import SelectFlow from './SelectFlow';
import TestFlowName from './TestFlowName';

const Nav = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <TestFlowName />
      <SelectFlow />
      <Save />
    </div>
  );
};

export default Nav;
