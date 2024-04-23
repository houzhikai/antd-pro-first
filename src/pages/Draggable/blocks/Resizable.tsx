import React, { useState } from 'react';
import { Resizable } from 'react-resizable';
import styles from '../index.less';
import 'react-resizable/css/styles.css';
// 官方网站： https://www.npmjs.com/package/react-resizable
const ResizablePage = () => {
  const [width, setWidth] = useState(200);
  const [height, setHight] = useState(100);

  return (
    <div style={{ display: 'flex' }}>
      <Resizable
        width={width}
        height={100}
        axis="x"
        minConstraints={[100, 100]}
        maxConstraints={[300, 300]}
        onResize={(e, { size }) => setWidth(size.width)}
        handle={<div className={styles.x} />}
        resizeHandles={['e']}
      >
        <div>
          <Resizable
            width={width}
            height={height}
            axis="y"
            minConstraints={[100, 100]}
            maxConstraints={[300, 300]}
            onResize={(e, { size }) => setHight(size.height)}
            handle={<div className={styles.y} />}
            resizeHandles={['s']}
          >
            <div style={{ width, height, border: '1px solid #d3e3ff' }}>
              Resizable Div
            </div>
          </Resizable>
          <div style={{ width, height: 100, border: '1px solid #d3e3ff' }}>
            Resizable Div
          </div>
          <div style={{ width, height: 100, border: '1px solid #d3e3ff' }}>
            Resizable Div
          </div>
        </div>
      </Resizable>
      <div style={{ flexGrow: 1, border: '1px solid #d3e3ff' }}>Other Div</div>
    </div>
  );
};

export default ResizablePage;
