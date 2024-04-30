import DropDownPage from './DropDownPage';
import JumpPage from './JumpPage';
import NavAction from './NavAction';

const DetailDataPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <DropDownPage />
      <JumpPage />
      <NavAction />
    </div>
  );
};

export default DetailDataPage;
