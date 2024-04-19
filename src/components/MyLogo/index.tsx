import { Image } from 'antd';
import styles from './index.less';
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
    <div className={styles.myLogo}>
      <div>
        <Image width={40} onClick={handleJumpHome} src={src} preview={false} />
      </div>
      <div className={styles['logo-title']}>{title || ''}</div>
    </div>
  );
}
