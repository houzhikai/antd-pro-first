import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface CustomDragDropPageProps {
  initValue: any;
  rowKey: string;
  children?: any;
}

const CustomDragDropPage = ({
  initValue,
  rowKey,
  children,
}: CustomDragDropPageProps) => {
  const [items, setItems] = useState(initValue);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const newItems: any = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
    setItems(newItems.map((item, index) => ({ ...item, id: String(index) })));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, index) => (
              <Draggable
                key={item[rowKey]}
                draggableId={item[rowKey]}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {children ? (
                      <>{children}</>
                    ) : (
                      <div
                        style={{
                          border: '1px solid #c5c6cc',
                          padding: '10px',
                          margin: '5px 0',
                          cursor: 'move',
                        }}
                      >
                        {item.content}
                      </div>
                    )}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export default CustomDragDropPage;
