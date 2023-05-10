import { Form, InputNumber, Button } from 'antd';
import { useModel } from '@umijs/max';

import styles from '../../index.less';
import { useState } from 'react';

const Content = () => {
  const { axisValue, setAsisValue } = useModel('useEchartsModel');
  const [axis, setAxis] = useState({ xMin: 0, xMax: 50, yMin: 0, yMax: 50 });

  const handleChangeXMin = (value) => {
    setAxis((obj) => {
      return {
        ...obj,
        xMin: value,
      };
    });
  };
  const handleChangeXMax = (value) => {
    setAxis((obj) => {
      return {
        ...obj,
        xMax: value,
      };
    });
  };
  const handleChangeYMin = (value) => {
    setAxis((obj) => {
      return {
        ...obj,
        yMin: value,
      };
    });
  };
  const handleChangeYMax = (value) => {
    setAxis((obj) => {
      return {
        ...obj,
        yMax: value,
      };
    });
  };
  const handleClickX = () => {
    console.log(axis.xMin, axis.xMax);
    setAsisValue((obj) => {
      return {
        ...obj,
        xMin: axis.xMin,
        xMax: axis.xMax,
      };
    });
  };
  const handleClickY = () => {
    setAsisValue((obj) => {
      return {
        ...obj,
        yMin: axis.yMin,
        yMax: axis.yMax,
      };
    });
  };

  return (
    <Form>
      <Form.Item label="横轴" name="layout">
        <div className={styles.content}>
          <InputNumber
            defaultValue={axisValue.xMin}
            onChange={handleChangeXMin}
            controls={false}
          />
          ---
          <InputNumber
            defaultValue={axisValue.xMax}
            onChange={handleChangeXMax}
            controls={false}
          />
          <Button
            danger
            type="primary"
            className={styles.submit}
            onClick={handleClickX}
          >
            确定
          </Button>
        </div>
      </Form.Item>
      <Form.Item label="纵轴">
        <div className={styles.content}>
          <InputNumber
            defaultValue={axisValue.yMin}
            onChange={handleChangeYMin}
            controls={false}
          />
          ---
          <InputNumber
            defaultValue={axisValue.yMax}
            onChange={handleChangeYMax}
            controls={false}
          />
          <Button
            danger
            type="primary"
            className={styles.submit}
            onClick={handleClickY}
          >
            确定
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
export default Content;
