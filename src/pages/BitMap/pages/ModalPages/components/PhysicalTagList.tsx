import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Select, Button, Input } from 'antd';
import ShowTagPage from './ShowTagPage';
import { ProviderFunc } from '../../../components/containers';
import CustomFormItemPage from '../../NavPage/CustomFormItemPage';

const PhysicalTagList = () => {
  const {
    scrambleCfgOptionsList,
    setScrambleCfgOptionsList,
    convertModalObj,
    setConvertModalObj,
    setTriggerTiming,
  } = ProviderFunc();
  const [id, setId] = useState(0);

  const handleModifySourceDataLocation = () => {
    setTriggerTiming((obj) => ({
      ...obj,
      sourceDataLocation: obj.sourceDataLocation + 1,
    }));
  };
  const handleModifyPhysicalOutputLocation = () => {
    setTriggerTiming((obj) => ({
      ...obj,
      physicalOutputLocation: obj.physicalOutputLocation + 1,
    }));
  };

  const handleAddFile = () => {
    // TODO， vscode interface
    setId((c) => c + 1);
    const newFileName = {
      value: `new_file_${id}`,
      label: `new_file_${id}`,
      location: `/var/user/test/new_file_${id}`,
      disable: false,
    };
    setScrambleCfgOptionsList((list) => [newFileName, ...list]);
  };
  const handleChangePhysicalOptions = (value) => {
    setConvertModalObj((obj) => {
      const filterValue = scrambleCfgOptionsList.filter(
        (item) => item.value === value,
      )[0];
      return {
        ...obj,
        scrambleCfg: {
          ...obj.scrambleCfg,
          fileName: filterValue.value,
          location: filterValue.location,
        },
      };
    });
  };

  return (
    <>
      {/* 源数据文件夹 */}
      <CustomFormItemPage title="Source Data">
        <Input
          style={{ margin: '0 20px', width: 400 }}
          value={convertModalObj.sourceDataLocation}
          disabled
        />
        <Button type="primary" onClick={handleModifySourceDataLocation}>
          Browse Path
        </Button>
      </CustomFormItemPage>
      {/* 输出物理文件路径 */}
      <CustomFormItemPage title="Physical Output">
        <Input
          style={{ margin: '0 20px', width: 400 }}
          value={convertModalObj.physicalOutputLocation}
          disabled
        />
        <Button type="primary" onClick={handleModifyPhysicalOutputLocation}>
          Browse Path
        </Button>
      </CustomFormItemPage>
      {/* 物理转换文件 */}
      <div>
        <CustomFormItemPage title="ScrambleCfg">
          <Select
            style={{ marginLeft: 20, width: 200 }}
            options={scrambleCfgOptionsList}
            value={convertModalObj.scrambleCfg.fileName}
            onChange={handleChangePhysicalOptions}
          />
        </CustomFormItemPage>
        {scrambleCfgOptionsList.map((tag: any) => {
          return <ShowTagPage key={tag.label} tag={tag} />;
        })}
        <Button
          size="small"
          type="primary"
          onClick={handleAddFile}
          disabled
          icon={
            <PlusOutlined
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          }
        >
          Add a Physical File
        </Button>
      </div>
    </>
  );
};

export default PhysicalTagList;
