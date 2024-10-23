import React, { useState } from 'react';
import { Popconfirm, Tag, Tooltip } from 'antd';
import { ProviderFunc } from '../../../components/containers';

interface ShowTagPageProps {
  tag: any;
  key?: string;
}

const ShowTagPage = ({ tag }: ShowTagPageProps) => {
  const { setScrambleCfgOptionsList, setTriggerTiming } = ProviderFunc();
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    //delete scramble file
    setTriggerTiming((obj) => ({
      ...obj,
      deleteScrambleFile: tag.label,
    }));
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
        <Tooltip title={tag.location} overlayStyle={{ maxWidth: 800 }}>
          {tag.label}
        </Tooltip>
      </Tag>
    </Popconfirm>
  );
};
export default ShowTagPage;
