import { Button } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { useState } from 'react';
import styles from './index.less';

const FoldPage = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleIsExpand = () => {
    setIsExpanded((c) => !c);
  };
  return (
    <>
      <Button
        style={{ left: isExpanded ? 'calc(200px - 16px)' : '-8px' }}
        className={styles.isExpand}
        icon={
          isExpanded ? (
            <CaretLeftOutlined style={{ color: '#555' }} />
          ) : (
            <CaretRightOutlined style={{ color: '#555' }} />
          )
        }
        shape="circle"
        size="small"
        type="text"
        onClick={handleIsExpand}
      />
      {isExpanded ? children : null}
    </>
  );
};

export default FoldPage;
