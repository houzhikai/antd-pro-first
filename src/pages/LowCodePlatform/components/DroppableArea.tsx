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
      style={{
        backgroundColor: 'transparent',
        minHeight: 'calc(100vh - 73px)',
      }}
    >
      {children}
    </div>
  );
};
export default DroppableArea;
