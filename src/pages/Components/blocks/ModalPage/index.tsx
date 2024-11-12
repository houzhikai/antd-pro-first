import React from 'react';
import ColorModalPage from './ColorModalPage';
import SelectDutsModalPage from './SelectDutsModalPage';
import FailDutTablesPage from './FailDutTablesPage';
import RotatePage from './RotatePage';

const ModalPage = () => {
  return (
    <>
      <RotatePage />
      <ColorModalPage />
      <SelectDutsModalPage />
      <FailDutTablesPage />
    </>
  );
};

export default ModalPage;
