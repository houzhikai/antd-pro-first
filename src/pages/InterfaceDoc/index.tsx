import { PageContainer, ProCard, WaterMark } from '@ant-design/pro-components';
import InterfaceData from './blocls/InterfaceData';
import HeaderPage from './blocls/components/HeaderPage';
import { interfaceDocDataList } from '@/components/dataList/InterfaceDoc';

const InterfaceDoc = () => {
  return (
    <WaterMark content="接口使用文档">
      <PageContainer
        header={{
          title: '',
        }}
      >
        <HeaderPage />
        {interfaceDocDataList.map((item) => (
          <ProCard
            key={item.title}
            style={{ marginBlockStart: 16 }}
            title={item.title}
            defaultCollapsed
            headerBordered
            collapsible
          >
            {item.content.map((p) => (
              <InterfaceData
                interfaceDataDetail={p.interfaceDataDetail}
                id={p.id}
                key={p.id}
                type={p.type}
                url={p.url}
              />
            ))}
          </ProCard>
        ))}
      </PageContainer>
    </WaterMark>
  );
};
export default InterfaceDoc;
