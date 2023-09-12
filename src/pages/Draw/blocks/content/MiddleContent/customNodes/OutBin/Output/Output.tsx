import styles from './index.less';

const OutputNode = ({ data }) => {
  console.log({ data });
  return (
    <div>
      <div className={styles.wrapper}>FB1</div>
    </div>
  );
};

export default OutputNode;
