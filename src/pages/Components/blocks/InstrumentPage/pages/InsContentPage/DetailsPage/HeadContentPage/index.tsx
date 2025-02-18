import React from 'react';
import HeadDetailsPage from './HeadDetailsPage';
import WholeControlBoardPage from './WholeControlBoardPage';
import SMUActionBoardPage from './SMUActionBoardPage';

const HeaderContentPage = () => {
  return (
    <div className="content-root">
      <HeadDetailsPage />
      <WholeControlBoardPage />
      <SMUActionBoardPage />
    </div>
  );
};

export default HeaderContentPage;
