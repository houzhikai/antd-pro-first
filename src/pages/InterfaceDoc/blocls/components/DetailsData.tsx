import { ProCard } from '@ant-design/pro-components';
import LeftConent from './LeftConent';

const DetailsData = (props: any) => {
  const { data } = props;
  return (
    <ProCard split="vertical" bordered>
      <ProCard title="左侧详情" colSpan="30%">
        <LeftConent data={data} />
      </ProCard>
      <ProCard title="入参" headerBordered>
        <div>入参内容</div>
      </ProCard>
      <ProCard title="出参" headerBordered>
        <div>出参内容</div>
      </ProCard>
    </ProCard>
  );
};

export default DetailsData;
