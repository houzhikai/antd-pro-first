import { Image } from 'antd';
import './index.less';
import { history } from '@umijs/max';

interface MyLogoProps {
  src: string;
}

export default function MyLogo(props: MyLogoProps) {
  const { src } = props;

  const handleJumpHome = () => {
    history.push('/home');
  };
  return (
    <div>
      <Image
        onClick={handleJumpHome}
        src={src}
        preview={false}
        className="myLogo"
      />
    </div>
  );
}
