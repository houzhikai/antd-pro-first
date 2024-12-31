import { useDBMPageProvider } from '../../components/container';
import JumpAddress from './JumpAddress';
import ModifiedValue from './ModifiedValue';
import PageTurn from './pageTurn';

const ActionBarPage = () => {
  const { data } = useDBMPageProvider();

  return (
    <>
      {data.length > 0 ? (
        <div
          style={{
            marginTop: 20,
            display: 'flex',
            justifyContent: 'flex-end',
            marginRight: 20, // 兼容浏览器的滚动条
          }}
        >
          <ModifiedValue />
          <JumpAddress />
          <PageTurn />
        </div>
      ) : null}
    </>
  );
};
export default ActionBarPage;
