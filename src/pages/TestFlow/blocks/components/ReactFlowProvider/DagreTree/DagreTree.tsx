import { Panel } from 'reactflow';

import ChangeBackground from '../ChangeBackground';
import ToggleTheme from './ToggleTheme';

const DagreTree = () => {
  return (
    <div>
      <Panel position="bottom-right">
        <ChangeBackground />
        <ToggleTheme />
      </Panel>
    </div>
  );
};

export default DagreTree;
