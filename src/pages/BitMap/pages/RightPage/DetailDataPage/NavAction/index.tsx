import DropDownPage from './DropDownPage';
import JumpPage from './JumpPage';
import NavAction from './NavAction';

const DetailNavActionPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 6,
        marginLeft: '5%',
      }}
    >
      <DropDownPage />
      <JumpPage />
      <NavAction />
    </div>
  );
};

export default DetailNavActionPage;
