export const statusShow = (status: number | string) => {
  if (status === 0) {
    return;
  } else if (status === 1) {
    return <div style={{ background: '#1273ba', color: '#fff' }}>正在升级</div>;
  } else if (status === 2) {
    return <div style={{ background: '#838a90', color: '#fff' }}>等待升级</div>;
  } else if (status === 3) {
    return <div style={{ background: '#0eb154', color: '#fff' }}>升级完成</div>;
  } else if (status === 4) {
    return <div style={{ background: '#db272a', color: '#fff' }}>升级异常</div>;
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
