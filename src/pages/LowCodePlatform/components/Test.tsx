// DragDropContainer.js
import React, { useState } from 'react';
import { Card, Row, Col } from 'antd';

const components = {
  typeA: ({ name }) => <Card title="Type A">{name}</Card>,
  typeB: ({ name }) => <Card title="Type B">{name}</Card>,
};

const DraggableComponent = ({ id, name, type }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ id, name, type }));
  };

  const Component = components[type];

  return (
    <div draggable onDragStart={handleDragStart}>
      <Component name={name} />
    </div>
  );
};

const DroppableArea = ({ onDrop, children }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    const item = JSON.parse(data);
    onDrop(item);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{ padding: 16, backgroundColor: '#f0f0f0', minHeight: '200px' }}
    >
      {children}
    </div>
  );
};

const DragDropContainer = () => {
  const [droppedItems, setDroppedItems] = useState<any>([]);

  const handleDrop = (item) => {
    setDroppedItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Row gutter={16}>
      <Col span={8}>
        <DraggableComponent id="1" name="Item 1" type="typeA" />
        <DraggableComponent id="2" name="Item 2" type="typeB" />
      </Col>
      <Col span={16}>
        <DroppableArea onDrop={handleDrop}>
          {droppedItems.map((item, index) => {
            const Component = components[item.type];
            return <Component key={index} name={item.name} />;
          })}
        </DroppableArea>
      </Col>
    </Row>
  );
};

export default DragDropContainer;
