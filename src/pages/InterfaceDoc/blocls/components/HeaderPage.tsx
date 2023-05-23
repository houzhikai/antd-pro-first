import { ProDescriptions } from '@ant-design/pro-components';

const HeaderPage = () => {
  return (
    <div>
      <ProDescriptions bordered column={2} title="接口使用文档">
        <ProDescriptions.Item
          span={2}
          valueType="text"
          contentStyle={{
            maxWidth: '80%',
          }}
          renderText={(_) => {
            return _ + _;
          }}
          ellipsis
          label=""
        >
          这是一个用来测试的接口文档
        </ProDescriptions.Item>
      </ProDescriptions>
    </div>
  );
};

export default HeaderPage;
