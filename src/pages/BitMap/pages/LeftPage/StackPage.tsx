import React from 'react';
import { Button, Checkbox, message } from 'antd';
import { ProviderFunc } from '../../components/containers';
import myFetch from '../../components/myFetch';

const StackPage = () => {
  const {
    setIsStack,
    physicalFileList,
    selectedTreeDataList,
    setSelectedTreeDataList,
    vscodeParams,
    bitMapPort,
    setData,
  } = ProviderFunc();
  const handleChange = (e) => {
    const checked = e.target.checked;
    if (!checked) {
      setSelectedTreeDataList([]);
    }
    setIsStack(checked);
  };

  const handleConfirm = async () => {
    try {
      const physicalDataPath = selectedTreeDataList.map((item) => {
        return {
          fileName: item.dut,
          location: item.location,
        };
      });
      console.log({ physicalDataPath });
      const res = await myFetch({
        url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/getbitmapdata`,
        params: {
          mode: 0,
          physicalDataPath,
        },
        isExceptionHand: true,
      });
      if (res.result === 0) {
        // 接口调用成功后的操作
        setData(JSON.parse(res.data[0].value) || []);
      } else {
        message.error(res.msg);
      }
    } catch (error) {
      // setIsErrorPage(true);
      message.error('Get bitmap data fail');
    }
  };

  return (
    <div style={{ marginLeft: 10 }}>
      <div>
        <span>Composite</span>
        <Checkbox
          style={{ marginLeft: 0, margin: 10 }}
          disabled={physicalFileList.length === 0}
          onChange={handleChange}
        />
      </div>
      <Button
        size="small"
        type="primary"
        disabled={physicalFileList.length === 0}
        onClick={handleConfirm}
      >
        Confirm
      </Button>
    </div>
  );
};

export default StackPage;
