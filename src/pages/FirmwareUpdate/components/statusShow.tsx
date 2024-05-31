import { Tag } from 'antd';

export const statusShow = (status: number | string) => {
  if (status === 0) {
    return;
  } else if (status === 1) {
    return <div>正在升级</div>;
  } else if (status === 2) {
    return <Tag>等待升级</Tag>;
  } else if (status === 3) {
    return <Tag color="#52c41a">升级完成</Tag>;
  } else if (status === 4) {
    return <Tag color="#ff7875">升级异常</Tag>;
  } else if (status === 5) {
    return <div>在位下线</div>;
  } else if (status === 6) {
    return <div>在位下电</div>;
  } else if (status === 7) {
    return <div>启动中</div>;
  } else if (status === 8) {
    return <div>繁忙</div>;
  } else if (status === '-') {
    return '-';
  }
};
