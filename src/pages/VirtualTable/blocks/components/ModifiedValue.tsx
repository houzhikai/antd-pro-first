import { Input } from 'antd';
import styles from '../../index.less';
import { useState } from 'react';

const ModifiedValue = () => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleEnter = (e) => {
    console.log(1, e.target.value);
  };
  return (
    <div className={styles.modified_wrapper}>
      ModifiedValue：
      <Input
        style={{ maxWidth: 200 }}
        placeholder="111"
        value={value}
        onChange={handleChange}
        onPressEnter={handleEnter}
      />
    </div>
  );
};
export default ModifiedValue;
