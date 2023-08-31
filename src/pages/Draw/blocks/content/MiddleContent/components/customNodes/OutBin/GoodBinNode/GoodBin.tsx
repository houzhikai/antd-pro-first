import { useState } from 'react';
import styles from './index.less';
import { Handle, Position } from 'reactflow';
// import { options as binMap } from '../options';
import { Popover } from 'antd';
// import PopoverButtonList from '../../CustomInput/PopoverButtonList';
import { useModel } from '@umijs/max';
import PopoverButtonList from '../../../PopoverButtonList';

interface GoodBinProp {
  maxWidth?: number;
  margin?: string;
}

const GoodBin = (prop: GoodBinProp) => {
  const { binMap } = useModel('useTestFlowModel');
  const { maxWidth, margin } = prop;
  const defaultBg = binMap.HardBin[0].Color; // HardBin
  const [bgColor, setBgColor] = useState(defaultBg);

  const handleChange = (e) => {
    e.preventDefault();
    const bgColor = binMap.HardBin.filter(
      (item) => item.Name === e.target.value,
    )
      .map((item) => item.Color)
      .join('');
    setBgColor(bgColor);
  };
  return (
    <div style={{ maxWidth, margin }} className={styles.wrapper}>
      <Popover
        placement="right"
        title=""
        content={PopoverButtonList}
        trigger="hover"
      >
        <div
          style={{ '--background': bgColor } as React.CSSProperties}
          className={styles.name1}
        >
          <select className={styles['select-style']} onChange={handleChange}>
            {binMap.HardBin.map((item) => (
              <option key={item.Name} value={item.Name}>
                {item.Name}
              </option>
            ))}
          </select>
        </div>
        <Handle
          className={styles.top}
          type="target"
          position={Position.Top}
          id="a"
        />
        <Handle
          className={styles.left}
          type="target"
          position={Position.Left}
          id="b"
        />
        <Handle
          className={styles.right}
          type="target"
          position={Position.Right}
          id="c"
        />
        <Handle
          className={styles.bottom}
          type="target"
          position={Position.Bottom}
          id="d"
        />
      </Popover>
    </div>
  );
};

export default GoodBin;
