import React, { useState } from 'react';
import { Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { ProviderFunc } from '../../../../components/containers';
import { scaleFactor } from '../../../../components/initValues';

const DropDownPage = () => {
  const [selected, setSelected] = useState('100%');
  const { setScaleNumber } = ProviderFunc();

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    const selected = scaleFactor.filter((item) => item.key === Number(e.key))[0];
    setSelected(selected.label);
    setScaleNumber(() => Math.round(100 / selected.key));
  };

  const menuProps = {
    items: scaleFactor,
    onClick: handleMenuClick,
  };

  return (
    <div style={{ marginRight: 10 }}>
      <Dropdown menu={menuProps}>
        <Button>{selected}</Button>
      </Dropdown>
    </div>
  );
};

export default DropDownPage;
