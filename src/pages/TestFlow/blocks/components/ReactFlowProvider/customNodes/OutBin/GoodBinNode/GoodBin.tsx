import { useState } from 'react';
import styles from './index.less';
import { Handle, Position } from 'reactflow';
import { options } from '../BadBinNode/options';

interface GoodBinProp {
  maxWidth?: number;
  margin?: string;
}

const GoodBin = (prop: GoodBinProp) => {
  const { maxWidth, margin } = prop;
  const defaultBg = options.HardBin[0].Color; // HardBin
  const [bgColor, setBgColor] = useState(defaultBg);

  const handleChange = (e) => {
    const bgColor = options.HardBin.filter(
      (item) => item.Name === e.target.value,
    )
      .map((item) => item.Color)
      .join('');
    setBgColor(bgColor);
  };
  return (
    <div style={{ maxWidth, margin }} className={styles.wrapper}>
      <div
        style={{ '--background': bgColor } as React.CSSProperties}
        className={styles.name1}
      >
        <select className={styles['select-style']} onChange={handleChange}>
          {options.HardBin.map((item) => (
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
    </div>
  );
};

export default GoodBin;
