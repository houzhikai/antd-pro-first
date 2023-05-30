import { ProDescriptions } from '@ant-design/pro-components';
import styles from '../../index.less';

const ResponseParams = ({ data }) => {
  console.log(data);
  return (
    <>
      {data ? (
        <ProDescriptions column={1}>
          <ProDescriptions.Item
            style={{ fontStyle: 'initial' }}
            label="200"
            valueType="jsonCode"
          >
            {`${JSON.stringify(data)}`}
          </ProDescriptions.Item>
          <ProDescriptions.Item label="401" valueType="text">
            <div className={styles.errorPrompt}>Unauthorized</div>
          </ProDescriptions.Item>
          <ProDescriptions.Item label="403" valueType="text">
            <div className={styles.errorPrompt}>Forbidden</div>
          </ProDescriptions.Item>
          <ProDescriptions.Item label="404" valueType="text">
            <div className={styles.errorPrompt}>Not Found</div>
          </ProDescriptions.Item>
        </ProDescriptions>
      ) : (
        <div>暂无录入返回结果</div>
      )}
    </>
  );
};

export default ResponseParams;
