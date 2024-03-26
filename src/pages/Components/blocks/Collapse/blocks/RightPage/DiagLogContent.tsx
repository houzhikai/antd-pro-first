import { useState } from 'react';

import { Input } from 'antd';
const { Search } = Input;

const DiagLogContent = () => {
  const logs = [
    { id: 1, message: 'Log 1' },
    { id: 2, message: 'Log 2' },
    { id: 3, message: 'Log 3' },
  ];
  const [showLogList, setShowLogList] = useState(logs);
  const handleSearch = (value:any) => {
    const filteredLogs = showLogList.filter((log) =>
      log.message.toLowerCase().includes(value.toLowerCase()),
    );
    setShowLogList(filteredLogs);
  };

  return (
    <div>
      <Search
        style={{ width: '100%' }}
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
      />
      <div>
        {showLogList.map((log) => (
          <li key={log.id} style={{ textAlign: 'left' }}>
            {log.message}
          </li>
        ))}
      </div>
    </div>
  );
};

export default DiagLogContent;
