import {
  PageContainer,
  ProCard,
  ProDescriptions,
  WaterMark,
} from '@ant-design/pro-components';
import InterfaceStyle from './blocls/InterfaceStyle';

const InterfaceDoc = () => {
  return (
    <WaterMark content="接口使用文档">
      <PageContainer
        header={{
          title: '',
        }}
      >
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
        <ProCard
          title="DBM"
          style={{ marginBlockStart: 16 }}
          headerBordered
          collapsible
        >
          <InterfaceStyle />
        </ProCard>
      </PageContainer>
    </WaterMark>
  );
};
export default InterfaceDoc;
