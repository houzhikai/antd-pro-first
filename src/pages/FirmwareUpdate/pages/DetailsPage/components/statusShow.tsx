import React from 'react';
import { Image } from 'antd';
import {
  CheckOutlined,
  LoadingOutlined,
  MinusCircleOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import { upgrading } from '../../../icons/base64/uograding';
import powerOff from '@/icon/fu/下电.svg';
import offLine from '@/icon/fu/offline.svg';
import '../../../index.css';

export const statusShow = (status: number | string, height: number) => {
  const ShowStatusPage = ({ background, label, icon }) => {
    return (
      <div
        style={{ background, color: '#fff', height, lineHeight: `${height}px` }}
        className="status-show-layout"
      >
        <div>{icon}</div>
        <div style={{ marginLeft: 15 }}>{label}</div>
      </div>
    );
  };

  const SvgFunction = (color?: string, className?: string) => {
    return (
      <svg
        width="10"
        height="10"
        fill="currentColor"
        viewBox="0 0 16 16"
        color={color}
        className={className}
      >
        <circle cx="8" cy="8" r="8" />
      </svg>
    );
  };
  if (status === 0) {
    return;
  } else if (status === 1) {
    return (
      <ShowStatusPage
        background="#1273ba"
        label="Upgrading"
        icon={
          <Image
            className="upgrading"
            preview={false}
            src={upgrading}
            width={14}
            height={14}
          />
        }
      />
    );
  } else if (status === 2) {
    return (
      <ShowStatusPage
        background="#838a90"
        label="Waitting"
        icon={
          <LoadingOutlined
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        }
      />
    );
  } else if (status === 3) {
    return (
      <ShowStatusPage
        background="#0eb154"
        label="Finish"
        icon={
          <CheckOutlined
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        }
      />
    );
  } else if (status === 4) {
    return (
      <ShowStatusPage
        background="#db272a"
        label="Error"
        icon={
          <WarningOutlined
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        }
      />
    );
  } else if (status === 5) {
    return (
      <ShowStatusPage
        background="#838a90"
        label="Offline"
        icon={
          <Image
            className="offline-status"
            preview={false}
            src={offLine}
            width={14}
            height={16}
          />
        }
      />
    );
  } else if (status === 6) {
    return (
      <ShowStatusPage
        background="#838a90"
        label="Power Off"
        icon={
          <Image
            className="power-off-status"
            preview={false}
            src={powerOff}
            width={14}
            height={16}
          />
        }
      />
    );
  } else if (status === 7) {
    return (
      <ShowStatusPage
        background="#838a90"
        label="Starting"
        icon={SvgFunction('#52c41a', 'highlight')}
      />
    );
  } else if (status === 8) {
    return (
      <ShowStatusPage
        background="#838a90"
        label="Busy"
        icon={
          <MinusCircleOutlined
            style={{ color: 'red' }}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
        }
      />
    );
  } else if (status === '-') {
    <ShowStatusPage background="#838a90" label="-" icon={null} />;
  }
};
