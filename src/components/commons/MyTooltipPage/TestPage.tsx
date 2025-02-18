// 手写button列表，间距20px
import React from 'react';
import { Button } from 'antd';

const TestPage: React.FC = () => {
  return (
    <div>
      {/* // 行间距20px */}
      <Button type="primary" style={{ marginBottom: '20px' }}>
        Primary Button
      </Button>
      <Button style={{ marginBottom: '20px' }}>Default Button</Button>
      <Button type="dashed" style={{ marginBottom: '20px' }}>
        Dashed Button
      </Button>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  );
};
export default TestPage;
