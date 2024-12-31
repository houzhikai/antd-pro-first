import React, { ReactNode } from 'react';

interface MyLabelProps {
  label: string;
  item: ReactNode;
}

const MyLabel = ({ label, item }: MyLabelProps) => {
  return (
    <div style={{ margin: '0 10px' }}>
      {label}: {item}
    </div>
  );
};

export default MyLabel;
