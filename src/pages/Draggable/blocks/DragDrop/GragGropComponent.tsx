import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const CustomDragDropPage = ({ initValue }) => {
  const [items, setItems] = useState(initValue);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newItems: any = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setItems(newItems.map((item, index) => ({ ...item, id: String(index) })));
  };
  console.log({ items });
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, index) => (
              <Draggable
                key={item.id || item.key}
                draggableId={item.id || item.key}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div
                      style={{
                        border: '1px solid red',
                        padding: '10px',
                        margin: '5px 0',
                      }}
                    >
                      {item.content}
                    </div>
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
