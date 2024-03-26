import { Image } from 'antd';
import './index.less';
import { history } from '@umijs/max';

interface MyLogoProps {
  src: string;
  title: string;
}

export default function MyLogo(props: MyLogoProps) {
  const { src, title } = props;

  const handleJumpHome = () => {
    history.push('/home');
  };
  return (
    <div className="myLogo">
      <div>
        <Image width={40} onClick={handleJumpHome} src={src} preview={false} />
      </div>
      <h3 className="logo-title">{title || ''}</h3>
    </div>
  );
}
