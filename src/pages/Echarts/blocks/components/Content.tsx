import { Form, InputNumber, Button } from 'antd';
import { useState } from 'react';

import styles from '../../index.less';

const Content = () => {
  const [value, setValue] = useState(0);

  const handleChange = (value) => {
    console.log(value);
    setValue(value);
  };

  return (
    <Form>
      <Form.Item label="横轴" name="layout">
        <div className={styles.content}>
          <InputNumber value={value} onChange={handleChange} controls={false} />
          ---
          <InputNumber value={value} onChange={handleChange} controls={false} />
          <Button
            danger
            type="primary"
            className={styles.submit}
            // onClick={handleClick}
          >
            确定
          </Button>
        </div>
      </Form.Item>
      <Form.Item label="纵轴">
        <div className={styles.content}>
          <InputNumber value={value} onChange={handleChange} controls={false} />
          ---
          <InputNumber value={value} onChange={handleChange} controls={false} />
          <Button danger type="primary" className={styles.submit}>
            确定
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
export default Content;
