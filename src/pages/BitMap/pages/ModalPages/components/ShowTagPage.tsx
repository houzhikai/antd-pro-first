import React, { useState } from 'react';
import { Popconfirm, Tag } from 'antd';
import { ProviderFunc } from '../../../components/containers';

interface ShowTagPageProps {
  tag: any;
  key?: string;
}

const ShowTagPage = ({ tag }: ShowTagPageProps) => {
  const { setScrambleCfgOptionsList } = ProviderFunc();
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    setScrambleCfgOptionsList((list) => {
      const newList = list.filter((option) => option.label !== tag.label);
      return newList;
    });
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Popconfirm
      open={open}
      title='Are you sure to delete this task?'
      onConfirm={handleConfirm}
      onCancel={handleCancel}
      okText='Yes'
      cancelText='No'
    >
      <Tag
        style={{ marginBottom: 10 }}
        closable={!tag.disable}
        onClose={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        {tag.label}
      </Tag>
    </Popconfirm>
  );
};
export default ShowTagPage;
