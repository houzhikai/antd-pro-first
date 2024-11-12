import { QuestionCircleOutlined } from '@ant-design/icons';
import { Select, Tooltip } from 'antd';

const TooltipPage = ({ title }: any) => {
  return (
    <Tooltip title={title}>
      <QuestionCircleOutlined
        style={{ fontSize: 12 }}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    </Tooltip>
  );
};
const RotatePage = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '0 10px' }}>
      <div>
        Rotate: <TooltipPage title="顺时针旋转" />
      </div>
      <Select style={{ width: 80, marginLeft: 8 }} />
    </div>
  );
};

export default RotatePage;
