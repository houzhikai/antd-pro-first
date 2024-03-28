import React, { useRef, useState } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';
import { Modal, Button } from 'antd';

interface DraggableModalProps {
  children?: React.ReactNode;
  title: string;
  buttonText?: string;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  footer?: any;
}

const DraggableModal = ({
  children,
  title,
  buttonText,
  okText,
  cancelText,
  footer,
}: DraggableModalProps) => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = useRef<HTMLDivElement>(null);

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  const showModal = () => {
    setOpen(true);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        {buttonText || 'test-button'}
      </Button>
      <Modal
        maskClosable={false}
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
          >
            {title}
          </div>
        }
        open={open}
        okText={okText}
        cancelText={cancelText}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={footer}
        modalRender={(modal) => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            nodeRef={draggleRef}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <Draggable
          disabled={disabled}
          bounds={bounds}
          onStart={(event, uiData) => onStart(event, uiData)}
        >
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
          >
            {children}
          </div>
        </Draggable>
      </Modal>
    </>
  );
};

export default DraggableModal;
