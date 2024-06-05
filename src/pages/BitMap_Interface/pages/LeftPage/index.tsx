import React from 'react';
import TreePage from './TreePage';
import StackPage from './StackPage';
import '../../index.css';

const LeftPage = () => {
  return (
    <div className="bit-map-left-page">
      <TreePage />
      <StackPage />
    </div>
  );
};

export default LeftPage;
