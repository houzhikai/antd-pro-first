import DraggableModal from './ModalPage';

const App = () => {
  return (
    <>
      <DraggableModal
        buttonText="Open Modal"
        title="DraggableModal"
        okText="Close"
        footer={(_, { OkBtn }) => (
          <>
            {/* <Button>Custom Button</Button>
            <CancelBtn /> */}
            <OkBtn />
          </>
        )}
      >
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
        <div>111</div>
      </DraggableModal>
    </>
  );
};

export default App;
