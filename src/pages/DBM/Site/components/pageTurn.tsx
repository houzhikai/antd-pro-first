import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useModel } from 'umi';
import { Button, InputNumber } from 'antd';

const PageTurn = () => {
  const { page, setPage } = useModel('useGetDBMDataList');
  const handlePre = () => {
    setPage((c) => c - 1);
  };
  const handleNext = () => {
    setPage((c) => c + 1);
  };
  const handleOk = (e: any) => {
    if (e.target.value >= 0 && e.target.value <= 4095) {
      setPage(Number(e.target.value));
    } else if (e.target.value > 4095) {
      setPage(4095);
    } else if (e.target.value < 0) {
      setPage(0);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: 30 }}>
      Page:
      <Button
        style={{ marginLeft: 10 }}
        type="link"
        onClick={handlePre}
        disabled={page <= 0 ? true : false}
        icon={<LeftOutlined />}
      />
      <InputNumber
        defaultValue={page}
        controls={false}
        min={0}
        max={4095}
        size="small"
        onPressEnter={handleOk}
        onBlur={handleOk}
        style={{ width: 49, margin: '0 10px' }}
      />
      / 4095
      <Button
        style={{ marginLeft: 10 }}
        type="link"
        onClick={handleNext}
        disabled={page >= 4095 ? true : false}
        icon={<RightOutlined />}
      />
    </div>
  );
};
export default PageTurn;
