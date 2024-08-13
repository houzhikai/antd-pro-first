import { Modal } from 'antd';
import { useEffect } from 'react';
import { useFUProviderModule } from '../../components/containers';

const AfterUpgradeModal = () => {
  const [modal, contextHolder] = Modal.useModal();
  const { promptUser, setPromptUser } = useFUProviderModule();

  const handleOk = () => {
    setPromptUser((obj) => {
      return { ...obj, status: false };
    });

    // setSelectedRowKeys(() => []);
  };

  const config = {
    width: '50vw',
    title: (
      <div style={{ fontWeight: 800 }}>
        {promptUser.isError ? '升级异常' : '升级完成'}
      </div>
    ),
    centered: true,
    content: <>{promptUser.message}</>,
    maskClosable: false,
    okText: '确定',
    onOk: handleOk,
  };
  useEffect(() => {
    if (promptUser.status) {
      if (promptUser.isError) {
        modal.error(config);
      } else {
        modal.success(config);
      }
    }
  }, [promptUser.status]);
  return (
    <>
      <div>{contextHolder}</div>
    </>
  );
};
export default AfterUpgradeModal;
