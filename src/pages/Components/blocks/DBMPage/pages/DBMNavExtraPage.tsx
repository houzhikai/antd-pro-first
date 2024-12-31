import React from 'react';
import MyLabel from '@/commons/MyLabel';
import { getMaxAddress } from '../components/getMaxAddress';
import { useDBMPageProvider } from '../components/container';
import { converse } from '../components/converse';
import '../index.css';

const DBMNavExtraPage = () => {
  const { mode } = useDBMPageProvider();
  const maxAddress =
    getMaxAddress(mode) === '-' ? '-' : `${getMaxAddress(mode)}F`;
  return (
    <div style={{ display: 'flex' }}>
      <MyLabel
        label="MaxAddress"
        item={<span className="dbm-mode-value">{maxAddress}</span>}
      />
      <MyLabel
        label="Mode"
        item={<span className="dbm-mode-value">{converse(mode)}</span>}
      />
    </div>
  );
};

export default DBMNavExtraPage;
