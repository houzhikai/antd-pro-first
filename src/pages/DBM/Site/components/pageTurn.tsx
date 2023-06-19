import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useModel } from 'umi';
import { Button, Input } from 'antd';
import { useState } from 'react';

const PageTurn = () => {
  const { page, setPage } = useModel('useGetDBMDataList');
  const [pageVal, setPageVal] = useState('0');
  const handlePre = () => {
    setPage((c) => c - 1);
  };
  const handleNext = () => {
    setPage((c) => c + 1);
  };
  const handleOk = (e: any) => {
    console.log({ pageVal });

    if (e.target.value >= 0 && e.target.value <= 4095) {
      setPage(Number(e.target.value));
    } else if (e.target.value > 4095) {
      setPage(4095);
    } else if (e.target.value < 0) {
      setPage(0);
    }
  };
  const handleChange = (e) => {
    const inputValue = e.target.value;

    const subPageVal = inputValue.replace(/^[0]+/, ''); // 去除前面多余的0
    if (!Number.isNaN(Number(inputValue))) {
      setPageVal(subPageVal);
    }
    // inputValue !== '' value 为空时的判断
    if (Number(inputValue) === 0 && inputValue !== '') {
      setPageVal('0');
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
      <Input
        style={{ width: 49, margin: '0 10px' }}
        defaultValue={page}
        value={pageVal}
        size="small"
        onChange={handleChange}
        onPressEnter={handleOk}
        onBlur={handleOk}
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
