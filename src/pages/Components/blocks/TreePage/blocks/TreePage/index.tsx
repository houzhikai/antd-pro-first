import React, { useState } from 'react';
import { Tree } from 'antd';
import type { TreeProps } from 'antd';
import { treeData } from './components/data';
import styles from './index.less';
const TreePage: React.FC = () => {
  const [selectKey, setSelectKey] = useState<string>('0-0');
  const onSelect: TreeProps['onSelect'] = (selectedKeys: any, info) => {
    console.log('selected', selectedKeys, selectedKeys[0], info);
    if (selectedKeys.length > 0) {
      setSelectKey(selectedKeys[0] || '');
    }
  };

  //   const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
  //     console.log('onCheck', checkedKeys, info);
  //   };

  return (
    <Tree
      style={{ padding: '0' }}
      className={styles.tree}
      defaultSelectedKeys={[selectKey]}
      selectedKeys={[selectKey]}
      onSelect={onSelect}
      treeData={treeData}
      blockNode
      showIcon
      checkable
    />
  );
};

export default TreePage;
