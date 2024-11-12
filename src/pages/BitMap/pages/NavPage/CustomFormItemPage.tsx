import React from 'react';

const CustomFormItemPage = ({ children, title, width }: any) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <div style={{ width: width || 155, display: 'inline-block' }}>
        {title}:
      </div>
      {children}
    </div>
  );
};
export default CustomFormItemPage;
