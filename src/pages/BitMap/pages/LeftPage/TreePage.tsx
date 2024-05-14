import React from 'react';
import { Tree } from 'antd';
import type { GetProps } from 'antd';
import { treeDataList } from '../../mockData/mockTreeData';

type DirectoryTreeProps = GetProps<typeof Tree.DirectoryTree>;

const TreePage: React.FC = () => {
  const onSelect: DirectoryTreeProps['onSelect'] = (keys, info) => {
    console.log('Trigger Select', keys, info);
  };

  const onExpand: DirectoryTreeProps['onExpand'] = (keys, info) => {
    console.log('Trigger Expand', keys, info);
  };

  return (
    <>
      <Tree.DirectoryTree
        style={{ background: '#f5f5f5' }}
        checkable
        multiple
        defaultExpandAll
        onSelect={onSelect}
        onExpand={onExpand}
        treeData={treeDataList}
      />
    </>
  );
};

export default TreePage;
