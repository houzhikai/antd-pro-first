import DUTS from './components/DUTS';
import HardBin from './components/HardBin';
import SoftBin from './components/SoftBin';
import TestResult from './components/TestResult';
import styles from './index.less';

const index = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.child}>
        <DUTS />
      </div>
      <div className={styles.child}>
        <SoftBin />
      </div>
      <div className={styles.child}>
        <HardBin />
      </div>
      <div className={styles.child}>
        <TestResult />
      </div>
    </div>
  );
};

export default index;
