import React, { useEffect, useState } from 'react';
import { Button, Select, Space, Upload, UploadProps, message } from 'antd';
import myFetch from '@/components/myFetch';
import { useFUProviderModule } from '../../components/containers';
import { options } from '../../components/defaultData';
const NavActive = () => {
  const { getDeviceListAndHeartObj, startParams, setIsAutoMode } =
    useFUProviderModule();
  const [base64List, setBase64List] = useState<any>([]);
  const [uploading, setUploading] = useState(false);
  const [filesLength, setFilesLength] = useState(0);
  const isDisabled = getDeviceListAndHeartObj?.allow !== 0;

  // upload接口
  useEffect(() => {
    // uploading 为 true 时，调用 上传文件夹 接口
    if (!uploading) return;
    if (filesLength === base64List.length) {
      base64List.forEach(async (item) => {
        try {
          const res = await myFetch({
            url: `http://${startParams.initIp}:8000/upload`,
            params: item,
            timeout: 100,
            isExceptionHand: true,
          });
          if (res.result !== '0') {
            message.error(res.msg);
          }
        } catch (error) {
          message.error(`Fail to upload`, 5);
        }
      });

      if (filesLength === base64List.length) {
        setUploading(false);
        setBase64List([]);
        setFilesLength(0);
      }
    }
  }, [uploading, base64List, filesLength]);

  const props: UploadProps = {
    disabled: isDisabled || uploading,
    showUploadList: false, // 是否展示上传列表
    accept: '.fw',
    directory: false,
    multiple: true,
    beforeUpload: (file, fileList) => {
      const reader: any = new FileReader();
      reader.onloadend = () => {
        setBase64List((base64List) => [
          ...base64List,
          { name: file.name, data: reader.result.split('base64,')[1] }, //  reader.result.split('base64,')[1]
        ]);
      };

      reader.readAsDataURL(file);
      setUploading(true);
      setFilesLength(fileList.length);
      // 阻止自动上传
      return false;
    },
  };

  const handleEffectiveMode = (effectiveMode: string) => {
    setIsAutoMode(effectiveMode === 'auto');
  };

  return (
    <Space>
      {/*  TODO, 需要保存到 vscode 中，避免刷新页面恢复成 自动模式 */}
      <div className="customNavPage-gap">
        Activation Mode:
        <Select
          disabled={isDisabled}
          defaultValue="auto"
          style={{ marginLeft: 10, width: 90 }}
          onChange={handleEffectiveMode}
          options={options}
        />
      </div>
      <Upload {...props}>
        <Button
          loading={uploading}
          type="primary"
          disabled={isDisabled || uploading}
        >
          Upload Files
        </Button>
      </Upload>
    </Space>
  );
};

export default NavActive;
