import { Handle, Position } from 'reactflow';
import styles from './index.less';
import { useState } from 'react';
import { options } from './options';

const BadBin = () => {
  const defaultBg = options.SoftBin[0].Color; // SoftBin
  const [bgColor, setBgColor] = useState(defaultBg);

  const handleChange = (e) => {
    const bgColor = options.SoftBin.filter(
      (item) => item.Name === e.target.value,
    )
      .map((item) => item.Color)
      .join('');
    setBgColor(bgColor);
  };
  return (
    <div>
      <div
        style={{ '--background': bgColor } as React.CSSProperties}
        className={styles.test1}
      />
      <div className={styles.name}>
        <select className={styles['select-style']} onChange={handleChange}>
          {options.SoftBin.map((item) => (
            <option key={item.Name} value={item.Name}>
              {item.Name}
            </option>
          ))}
        </select>
      </div>
      <Handle
        type="target"
        className={styles.top}
        position={Position.Top}
        id="a"
      />
      <Handle
        type="target"
        className={styles.left}
        position={Position.Left}
        id="b"
      />
      <Handle
        type="target"
        className={styles.bottom}
        position={Position.Bottom}
        id="c"
      />
      <Handle
        type="target"
        className={styles.right}
        position={Position.Right}
        id="d"
      />
    </div>
  );
};

export default BadBin;
