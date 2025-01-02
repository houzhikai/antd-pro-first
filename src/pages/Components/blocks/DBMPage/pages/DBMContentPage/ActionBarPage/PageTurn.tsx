import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useCallback } from 'react';
import { useDBMPageProvider } from '../../../components/container';

const PageTurn = () => {
  const { page, setPage, pageVal, setPageVal, setData } = useDBMPageProvider();

  const handlePre = () => {
    setData([]);
    setPage((c) => c - 1);
    setPageVal((c) => String(Number(c) - 1));
  };
  const handleNext = () => {
    setData([]);
    setPage((c) => c + 1);
    setPageVal((c) => String(Number(c) + 1));
  };
  const handleOk = useCallback(
    (e: any) => {
      const numPage = Number(e.target.value);
      if (e.target.value === '') {
        return;
      }

      if (numPage >= 0 && numPage <= 4095) {
        setPage(Number(e.target.value));
        setPageVal(e.target.value);
      } else if (e.target.value > 4095) {
        setPage(4095);
        setPageVal('4095');
      } else if (e.target.value < 0) {
        setPage(0);
        setPageVal('0');
      }
    },
    [pageVal],
  );

  const handleChange = (e: any) => {
    const inputValue = e.target.value;
    const subPageVal = inputValue.replace(/^[0]+/, ''); // 去除前面多余的0
    if (!Number.isNaN(Number(inputValue))) {
      setPageVal(subPageVal);
    }
    if (e.target.input === '') {
      setPageVal('0');
    }
    // inputValue !== '' value 为空时的判断
    if (Number(inputValue) === 0) {
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
        icon={
          <LeftOutlined
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        }
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
        icon={
          <RightOutlined
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        }
      />
    </div>
  );
};
export default PageTurn;
