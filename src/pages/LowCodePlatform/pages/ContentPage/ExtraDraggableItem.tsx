import React from 'react';
import { Button, Image } from 'antd';
import { useLowCodePlatformProvider } from '../../components/container';
import deleteSvg from '@/icon/lowCode/delete.svg';
import copySvg from '@/icon/lowCode/copy.svg';

const ExtraDraggableItem = ({ index }) => {
  const { pageNodes, setPageNodes } = useLowCodePlatformProvider();

  const handleDelete = (index) => {
    console.log({ pageNodes, index });
    const newItems = pageNodes.filter((_, i) => i !== index);
    setPageNodes(newItems);
  };

  const handleCopy = (index) => {
    const newItems = [...pageNodes];
    const copiedItem = { ...newItems[index] };
    newItems.push(copiedItem);
    setPageNodes(newItems);
  };
  return (
    <div style={{ float: 'right', lineHeight: '21px' }}>
      <Button
        size="small"
        icon={<Image preview={false} src={copySvg} width={14} height={14} />}
        type="text"
        onClick={() => handleCopy(index)}
      />
      <Button
        size="small"
        icon={<Image preview={false} src={deleteSvg} width={14} height={14} />}
        type="text"
        onClick={() => handleDelete(index)}
      />
    </div>
  );
};

export default ExtraDraggableItem;
