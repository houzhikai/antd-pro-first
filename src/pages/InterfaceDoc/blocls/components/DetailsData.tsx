import { ProCard } from '@ant-design/pro-components';
import LeftConent from './LeftConent';
import InputParams from './InputParams';

const DetailsData = (props: any) => {
  const data = props.data;
  return (
    <ProCard split="vertical" bordered>
      <ProCard title="左侧详情" colSpan="30%">
        <LeftConent data={data.interfaceDataDetail} />
      </ProCard>
      <ProCard
        title="Params"
        headerBordered
        bodyStyle={{ background: '#ebf3fb', minHeight: 123 }}
      >
        <InputParams data={data.inputParams} />
      </ProCard>
      <ProCard title="出参" headerBordered>
        <div>出参内容</div>
      </ProCard>
    </ProCard>
  );
};

export default DetailsData;
