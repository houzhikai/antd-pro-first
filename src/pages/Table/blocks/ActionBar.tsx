import JumpAddress from './components/JumpAddress';
import ModifiedValue from './components/ModifiedValue';
import PageTurn from '@/pages/DBM/Site/components/pageTurn';

const ActionBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        marginTop: 20,
        justifyContent: 'end',
      }}
    >
      <ModifiedValue />
      <JumpAddress />
      <PageTurn />
    </div>
  );
};
export default ActionBar;
