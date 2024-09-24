import React from 'react';
import ExtraDraggableItem from './ExtraDraggableItem';
import { useLowCodePlatformProvider } from '../../components/container';
import { nodeType } from '../NodeType';
import DroppableArea from '../../components/DroppableArea';
import '../../index.less';

const ContentPage = () => {
  const { pageNodes, setPageNodes, setSelectedItem } =
    useLowCodePlatformProvider();

  const handleDrop = (item) => {
    setPageNodes((prevItems) => [...prevItems, item]);
    setSelectedItem(item);
  };

  return (
    <div className="content-page">
      <DroppableArea onDrop={handleDrop}>
        {pageNodes.map((item, index) => {
          const Component = nodeType[item.type];
          return (
            <div key={index} className="element-item">
              <Component key={index} name={item.name} />
              <ExtraDraggableItem index={index} />
            </div>
          );
        })}
      </DroppableArea>
    </div>
  );
};

export default ContentPage;
