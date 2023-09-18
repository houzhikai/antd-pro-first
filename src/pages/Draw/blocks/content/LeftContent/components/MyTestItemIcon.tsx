import { Image } from 'antd';

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
      <div style={{ marginTop: 5 }}>{Class}</div>
    </div>
  );
};

export default MyTestItemIcon;
