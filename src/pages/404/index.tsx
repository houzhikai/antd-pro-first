import React from 'react';
import { Result } from 'antd';
import { NavLink } from 'react-router-dom';

const ErrResult: React.FC = () => (
  <Result
    status="404"
    title="404"
    subTitle="对不起，您访问的页面不存在，请正确输入地址！"
    extra={<NavLink to="/">返回到首页</NavLink>}
  />
);
export default ErrResult;
