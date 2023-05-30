import { ProCard } from '@ant-design/pro-components';
import LeftConent from './LeftConent';
import InputParams from './InputParams';
import ResponseParams from './ResponseParams';

const DetailsData = (props: any) => {
  const data = props.data;
  return (
    <ProCard split="vertical" bordered>
      <ProCard title="左侧详情" colSpan="30%">
        <LeftConent data={data.interfaceDataDetail} />
      </ProCard>
      <ProCard title="Params" headerBordered>
        <InputParams data={data.inputParams} />
      </ProCard>
      <ProCard title="Responses" headerBordered>
        <ResponseParams data={data.response} />
      </ProCard>
    </ProCard>
  );
};

export default DetailsData;
