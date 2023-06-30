import React from 'react';

import '../home.less';

const LeftNews = () => {
  const list = [
    '2023中国国际半导体展',
    '2021中国国际半导体展',
    '2020中国国际半导体展',
    '2019 世界半导体大会（南京）',
  ];
  return (
    <div style={{ width: '25%', marginRight: 30 }}>
      <div className="title">最新消息</div>
      {list.map((item) => (
        <div key={item} className="list-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default LeftNews;
