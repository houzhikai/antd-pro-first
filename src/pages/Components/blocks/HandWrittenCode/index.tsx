import DebounceFun from './DebounceFun';
import styles from './index.less';
import ReduceFunc from './MDN/ReduceFunc';
import MyDelay from './MyDelay';
import MyPromiseAll from './MyPromiseAll';
import MyPromiseRace from './MyPromiseRace';

const HandWrittenCode = () => {
  return (
    <div className={styles.wrapper}>
      <MyPromiseAll className={styles.item} />
      <MyPromiseRace className={styles.item} />
      <MyDelay className={styles.item} />
      <ReduceFunc />
      <DebounceFun />
    </div>
  );
};

export default HandWrittenCode;
