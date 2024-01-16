import { Button, message } from 'antd';
import React, { ReactNode } from 'react';
interface MyMessageProps {
  children: ReactNode | string;
  text?: string | undefined;
  buttonType?: 'primary' | 'dashed' | 'text' | 'link';
  type?: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
  disabled?: boolean;
}

const MyMessage = ({
  children,
  text,
  type,
  buttonType,
  duration,
  disabled,
}: MyMessageProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const myMessageValue = text || children;
  const myMessageType = type || 'info';
  const myDuration = duration || 5;

  const handleClick = () => {
    messageApi[myMessageType](myMessageValue, myDuration);
  };
  return (
    <>
      {contextHolder}
      <Button type={buttonType} onClick={handleClick} disabled={disabled}>
        {children}
      </Button>
    </>
  );
};

export default MyMessage;
