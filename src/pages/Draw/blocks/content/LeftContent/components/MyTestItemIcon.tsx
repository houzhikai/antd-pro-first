import { Image, Tooltip } from 'antd';
import styles from '../index.less';

interface MyTestItemIconProps {
  src: string;
  onDragStart: any;
  size?: number;
  name?: string;
  Class: string;
}

const MyTestItemIcon = (props: MyTestItemIconProps) => {
  const { src, onDragStart, size, Class } = props;

  return (
    <div style={{ textAlign: 'center' }}>
      <Image
        src={src}
        width={size ?? 24}
        preview={false}
        onDragStart={(event) => onDragStart(event, 'input')}
      />
      <Tooltip title={Class.length > 5 ? Class : null}>
        <div className={styles.classToolTip} style={{ marginTop: 5 }}>
          {Class}
        </div>
      </Tooltip>
    </div>
  );
};

export default MyTestItemIcon;
