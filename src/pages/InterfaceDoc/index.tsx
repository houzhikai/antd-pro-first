import {
  PageContainer,
  ProCard,
  ProDescriptions,
  WaterMark,
} from '@ant-design/pro-components';

const InterfaceDoc = () => {
  return (
    <WaterMark content="接口使用文档">
      <PageContainer
        header={{
          title: '',
        }}
      >
        <ProDescriptions bordered column={2} title="接口使用文档" />
        <ProCard
          title="API"
          style={{ marginBlockStart: 16 }}
          headerBordered
          collapsible
          //   defaultCollapsed
        >
          内容
        </ProCard>
      </PageContainer>
    </WaterMark>
  );
};
export default InterfaceDoc;
