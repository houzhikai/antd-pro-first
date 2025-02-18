import { Button, Popconfirm, Tag } from 'antd';
import React, { ReactNode, useState } from 'react';

interface MyTooltipPageProps {
  title: ReactNode;
  okText?: string;
  cancelText?: string;
  type?: 'button' | 'tag';
  onConfirm?: any;
  label: string;
}

const MyTooltipPage = ({
  title = 'Please confirm the operation again',
  okText = 'OK',
  cancelText = 'Cancel',
  type,
  onConfirm,
  label = 'Test',
}: MyTooltipPageProps) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleConfirm = () => {
    onConfirm();
    handleClose();
  };
  return (
    <Popconfirm
      open={open}
      title={title}
      onConfirm={handleConfirm}
      okText={okText}
      cancelText={cancelText}
      onCancel={handleClose}
      onOpenChange={handleClose}
      destroyTooltipOnHide
    >
      {type === 'button' ? (
        <Button
          style={{ marginLeft: 10, marginBottom: 22 }}
          className="ins-action-board-item"
          onClick={() => setOpen(true)}
          type="primary"
          size="small"
        >
          {label}
        </Button>
      ) : type === 'tag' ? (
        <Tag
          style={{ marginLeft: 10, marginBottom: 22 }}
          className="ins-action-board-item"
          closeIcon
          onClose={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          {label}
        </Tag>
      ) : null}
    </Popconfirm>
  );
};

export default MyTooltipPage;
