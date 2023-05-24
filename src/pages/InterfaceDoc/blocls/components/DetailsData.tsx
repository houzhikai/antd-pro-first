import styles from '../../index.less';

const DetailsData = (props: any) => {
  const { data } = props;
  return (
    <div className={styles.detailsWrapper}>
      <div className={styles.content}>
        <div className={styles.label}>进程:</div>
        <div className={styles.right}>{data.process}</div>
      </div>

      <div className={styles.content}>
        <div className={styles.label}>模块:</div>
        <div className={styles.right}>{data.module}</div>
      </div>

      <div className={styles.content}>
        <div className={styles.label}>责任人:</div>
        <div className={styles.right}>{data.person}</div>
      </div>

      <div className={styles.content}>
        <div className={styles.label}>前置接口:</div>
        <div className={styles.right}>{data.beforeInterface}</div>
      </div>
    </div>
  );
};

export default DetailsData;
