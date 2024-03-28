import { useState } from 'react';
import ModalPage from './components/testModal';
import { Button } from 'antd';

const App = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleOk = () => {
    console.log(111);
  };

  return (
    <>
      <Button onClick={showModal}>Open Draggable Modal</Button>

      <ModalPage
        open={open}
        setOpen={setOpen}
        title="Draggable Modal"
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
          <Button key="link" type="primary" onClick={handleOk}>
            Search on Google
          </Button>,
        ]}
      />
    </>
  );
};

export default App;
