import { useModel } from '@umijs/max';
import { Input, InputNumber, Image, Tooltip } from 'antd';
import toolTipSvg from '@/icon/draw/tooltip.svg';

import styles from './index.less';

const TestItem = () => {
  const { nodes, setNodes } = useModel('useTestFlowModel');

  const selectedNodeItem: any = nodes.filter((item) => item.selected)[0];

  // 修改测试项class
  const testItemClass = nodes
    .filter((item) => item.selected)
    .map((item: any) => item?.Class)[0];

  // 修改测试项name
  // const handleChangeName = (e) => {
  //   const newData = nodes.map((item) => {
  //     if (item.selected) {
  //       return { ...item, data: { label: e.target.value } };
  //     }
  //     return item;
  //   });
  //   setNodes(newData);
  // };

  // 修改测试项LoopCount
  const handleChangeLoopCount = (value) => {
    const newData = nodes.map((item) => {
      if (item.selected) {
        return { ...item, LoopCount: value };
      }
      return item;
    });
    setNodes(newData);
  };

  return (
    <div>
      {selectedNodeItem?.selected && selectedNodeItem.type === 'test-method' ? (
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
              value={testItemClass}
              allowClear
              disabled
            />
          </div>
          {/* <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>
              Name
              <Tooltip title="确认/移除光标后修改成功" placement="topLeft">
                <Image src={toolTipSvg} width={14} preview={false} />：
              </Tooltip>
            </label>
            <Input
              placeholder="请输入名称"
              // value={selectedNodeItem.data.label}
              // onChange={handleChangeName}
              defaultValue={selectedNodeItem.data.label}
              onPressEnter={handleChangeName}
              onBlur={handleChangeName}
              allowClear
            />
          </div> */}

          <div className={styles['flow-item']}>
            <label className={styles['flow-label']}>LoopCount：</label>
            <InputNumber
              style={{ width: '100%' }}
              placeholder="请输入名称"
              min={1}
              controls={false}
              value={selectedNodeItem.LoopCount}
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
