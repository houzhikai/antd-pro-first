import React, { useEffect } from 'react';
import { Modal } from 'antd';
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
    title: <div style={{ fontWeight: 800 }}>
      {promptUser.isError
        ? 'Firmware upgrade failed'
        : 'Firmware update completed, awaiting effectiveness'}
    </div>,
    centered: true,
    content: <>{promptUser.message}</>,
    maskClosable: false,
    okText: 'OK',
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
