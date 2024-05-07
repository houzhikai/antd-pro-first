import React from 'react';
import { Tree } from 'antd';
import type { GetProps } from 'antd';
import { treeData1, treeData2 } from '../../mockData/mockTreeData';

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
        treeData={treeData1}
      />
      <Tree.DirectoryTree
        style={{ background: '#f5f5f5', paddingTop: 20 }}
        checkable
        multiple
        defaultExpandAll
        onSelect={onSelect}
        onExpand={onExpand}
        treeData={treeData2}
      />
    </>
  );
};

export default TreePage;
