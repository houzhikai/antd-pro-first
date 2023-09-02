import { Image } from 'antd';

interface MyTestItemIconProps {
  src: string;
  onDragStart: any;
  size?: number;
}

const MyTestItemIcon = (props: MyTestItemIconProps) => {
  const { src, onDragStart, size } = props;

  return (
    <Image
      src={src}
      width={size ?? 24}
      style={{ margin: '0 10px' }}
      preview={false}
      onDragStart={(event) => onDragStart(event, 'input')}
    />
  );
};

export default MyTestItemIcon;
