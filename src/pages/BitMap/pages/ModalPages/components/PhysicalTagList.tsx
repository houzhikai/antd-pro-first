import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Select, Button, Input, Typography } from 'antd';
import ShowTagPage from './ShowTagPage';
import { ProviderFunc } from '../../../components/containers';

const PhysicalTagList = () => {
  const {
    scrambleCfgOptionsList,
    setScrambleCfgOptionsList,
    convertModalObj,
    setConvertModalObj,
  } = ProviderFunc();
  const [id, setId] = useState(0);

  const handleModifySourceDataLocation = () => {
    // TODO，
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
    setConvertModalObj((obj) => ({ ...obj, scrambleCfg: value }));
  };
  const CustomFormItem = ({ children, title }) => {
    return (
      <div>
        <Typography.Title level={4}>
          <div style={{ width: 150, display: 'inline-block' }}>{title}</div>
          {children}
        </Typography.Title>
      </div>
    );
  };
  return (
    <>
      {/* 源数据文件夹 */}
      <CustomFormItem title="Source Data">
        <Input
          style={{ margin: '0 20px', width: 400 }}
          value={convertModalObj.sourceDataLocation}
          disabled
        />
        <Button type="primary" onClick={handleModifySourceDataLocation}>
          Browse Path
        </Button>
      </CustomFormItem>
      {/* 物理转换文件 */}
      <div>
        <CustomFormItem title="ScrambleCfg">
          <Select
            style={{ marginLeft: 20, width: 200 }}
            options={scrambleCfgOptionsList}
            value={convertModalObj.scrambleCfg}
            onChange={handleChangePhysicalOptions}
          />
        </CustomFormItem>
        {scrambleCfgOptionsList.map((tag: any) => {
          return <ShowTagPage key={tag} tag={tag} />;
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
      {/* 输出物理文件路径 */}
      <CustomFormItem title="Physical Output">
        <Input
          style={{ margin: '0 20px', width: 400 }}
          value={convertModalObj.physicalOutputLocation}
          disabled
        />
        <Button type="primary" onClick={handleAddFile}>
          Browse Path
        </Button>
      </CustomFormItem>
    </>
  );
};

export default PhysicalTagList;
