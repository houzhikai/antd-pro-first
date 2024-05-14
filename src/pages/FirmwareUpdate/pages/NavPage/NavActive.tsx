import { Button, Select, Space, Upload, UploadProps, message } from 'antd';
import { useFUProviderModule } from '../../components/containers';
import { options } from '../../components/defaultData';
import { useState } from 'react';
import { useAsyncEffect } from 'ahooks';

const NavActive = () => {
  const { getDeviceList, startParams } = useFUProviderModule();
  const [base64List, setBase64List] = useState<any>([]);
  const [uploading, setUploading] = useState(false);
  const isDisabled = getDeviceList?.allow;
  // upload接口
  useAsyncEffect(async () => {
    // uploading 为 true 时，调用 上传文件夹 接口

    if (uploading && base64List.length !== 0) {
      await fetch(`http://${startParams.initIp}:8000/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: JSON.stringify(base64List),
      })
        .then((res) => res.json())
        .catch(() => {
          message.error(`上传失败`, 5);
        })
        .finally(() => {
          setBase64List([]);
        });
    }
  }, [uploading, base64List]);

  const props: UploadProps = {
    disabled: isDisabled,
    showUploadList: false, // 是否展示上传列表
    // accept: '.fw',
    multiple: true,
    listType: 'text',
    beforeUpload: (file) => {
      const reader: any = new FileReader();

      reader.onloadend = () => {
        setBase64List((base64List) => [
          ...base64List,
          { name: file.name, data: reader.result.split('base64,')[1] }, //  reader.result.split('base64,')[1]
        ]);
      };

      reader.readAsDataURL(file);
      setUploading(true);
      // 阻止自动上传
      return false;
    },
  };
  const handleEffectiveMode = (effectiveMode: string) => {
    message.info(`selected : ${effectiveMode}`);
  };
  return (
    <Space>
      {/*  TODO, 需要保存到 vscode 中，避免刷新页面恢复成 自动模式 */}
      <div className="customNavPage-gap">
        生效模式：
        <Select
          disabled={isDisabled !== 0}
          defaultValue="auto"
          style={{ marginLeft: 10 }}
          size="small"
          onChange={handleEffectiveMode}
          options={options}
        />
      </div>
      <Upload {...props}>
        <Button type="primary" disabled={isDisabled !== 0}>
          上传文件
        </Button>
      </Upload>
    </Space>
  );
};

export default NavActive;
