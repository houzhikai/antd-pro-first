import LeftPage from './pages/LeftPage';
import RightPage from './pages/RightPage';
import FoldPage from './FoldPage';
import styles from './index.less';

const FoldPages = () => {
  return (
    <div className={styles.wrapper}>
      <FoldPage>
        <LeftPage />
      </FoldPage>
      <RightPage />
    </div>
  );
};

export default FoldPages;
