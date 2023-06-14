import Save from './Save';
import TestFlowName from './TestFlowName';

const Nav = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <TestFlowName />
      <Save />
    </div>
  );
};

export default Nav;
