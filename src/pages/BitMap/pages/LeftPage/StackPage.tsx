import React from 'react';
import { Button, Checkbox, message } from 'antd';
import { ProviderFunc } from '../../components/containers';
import myFetch from '../../components/myFetch';

const StackPage = () => {
  const {
    setIsStack,
    physicalFileList,
    setSelectedTreeDataList,
    selectedTreeDataList,
    setData,
    vscodeParams,
    bitMapPort,
    setScaleNumber,
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
          title: item.name,
          location: item.location,
        };
      });
      const res = await myFetch({
        url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/getbitmapdata`,
        params: {
          mode: 0,
          physicalDataPath,
        },
        isExceptionHand: true,
        timeout: 100,
      });
      if (res.result === 0) {
        // get echarts data
        setScaleNumber(1);
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
      <Button size='small' type='primary' disabled={physicalFileList.length === 0} onClick={handleConfirm}>
        Confirm
      </Button>
    </div>
  );
};

export default StackPage;
