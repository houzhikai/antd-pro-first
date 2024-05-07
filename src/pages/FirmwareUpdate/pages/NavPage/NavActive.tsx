import { Button, Select, Space, Upload, UploadProps, message } from 'antd';
import { useFUProviderModule } from '../../components/containers';
import { options } from '../../components/defaultData';

const NavActive = () => {
  const { getDeviceList } = useFUProviderModule();
  const isDisabled = getDeviceList?.heartbeat || 1;
  // TODO, 需要保存到 vscode 中，避免刷新页面恢复成 自动模式

  const props: UploadProps = {
    disabled: isDisabled,
    showUploadList: false, // 是否展示上传列表
    accept: '.fw',
    multiple: true,
    listType: 'text',
    beforeUpload: (file, fileList) => {
      console.log({ file, fileList });
      return false;
    },
  };
  const handleEffectiveMode = (effectiveMode: string) => {
    message.info(`selected : ${effectiveMode}`);
  };
  return (
    <Space>
      <div className="customNavPage-gap">
        生效模式：
        <Select
          disabled={isDisabled}
          defaultValue="auto"
          style={{ marginLeft: 10 }}
          size="small"
          onChange={handleEffectiveMode}
          options={options}
        />
      </div>
      <Upload
        {...props}
        // directory
      >
        <Button type="primary" disabled={isDisabled}>
          上传文件
        </Button>
      </Upload>
    </Space>
  );
};

export default NavActive;
