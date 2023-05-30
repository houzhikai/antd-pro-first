import { ProDescriptions } from '@ant-design/pro-components';

const InputParams = (props) => {
  const { data } = props;
  return (
    <ProDescriptions>
      {Object.keys(data).length !== 0 ? (
        <ProDescriptions.Item label="入参" valueType="jsonCode">
          {`${JSON.stringify(data)}`}
        </ProDescriptions.Item>
      ) : (
        <div>No Parameters</div>
      )}
    </ProDescriptions>
  );
};

export default InputParams;
