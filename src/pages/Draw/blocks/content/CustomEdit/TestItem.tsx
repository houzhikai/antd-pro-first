import { useModel } from '@umijs/max';
import { Input, InputNumber, Image, Tooltip } from 'antd';
import toolTipSvg from '@/icon/draw/tooltip.svg';

import styles from './index.less';

const TestItem = () => {
  const { selectedNode, setSelectedNode } = useModel('useDrawModel');
  // 修改测试项class
  const handleChange = (e) => {
    setSelectedNode((obj) => {
      return {
        ...obj,
        Class: e.target.value,
      };
    });
  };
  // 修改测试项name
  const handleChangeName = (e) => {
    setSelectedNode((obj) => {
      return {
        ...obj,
        Name: e.target.value,
      };
    });
  };
  // 修改测试项LoopCount
  const handleChangeLoopCount = (value) => {
    setSelectedNode((obj) => {
      return {
        ...obj,
        LoopCount: value,
      };
    });
  };

  return (
    <div>
      {selectedNode.Name ? (
        <>
          <div className={styles.title}>测试项：</div>
          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>
              <span>Class </span>
              <Tooltip title="此处不可编辑Class" placement="topLeft">
                <Image src={toolTipSvg} width={14} preview={false} />：
              </Tooltip>
            </label>
            <Input
              placeholder="请输入 Class"
              value={selectedNode.Class}
              onChange={handleChange}
              allowClear
              disabled
            />
          </div>
          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>测试项name：</label>
            <Input
              placeholder="请输入名称"
              value={selectedNode.Name}
              onChange={handleChangeName}
              allowClear
            />
          </div>

          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>LoopCount：</label>
            <InputNumber
              style={{ width: '100%' }}
              placeholder="请输入名称"
              defaultValue={1}
              min={1}
              controls={false}
              value={selectedNode.LoopCount}
              onChange={handleChangeLoopCount}
            />
          </div>
          {/* 修改背景颜色，暂无该功能 */}
          {/* <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>Background：</label>
            <Input
              defaultValue={selectedNode.style ?? null}
              onPressEnter={handleChangeBg}
              onBlur={handleChangeBg}
            />
          </div> */}
        </>
      ) : null}
    </div>
  );
};

export default TestItem;
