import { Popconfirm, Tag } from 'antd';
import { useState } from 'react';

const ShowTagPage = ({ tag, setOptions }) => {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    setOptions((list) => list.filter((option) => option.label !== tag.label));
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Popconfirm
      open={open}
      title="Are you sure to delete this task?"
      onConfirm={handleConfirm}
      onCancel={handleCancel}
      okText="Yes"
      cancelText="No"
    >
      <Tag
        closable
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
