import { FolderOpenOutlined } from '@ant-design/icons';
import { Image, Switch } from 'antd';
import option from '@/icon/bitmap/option.svg';

import otherColor from '@/icon/otherColor.svg';
import '../../index.css';

const NavActionPage = () => {
  return (
    <div className="bit-map-nav-page">
      <FolderOpenOutlined
        className="bit-map-nav-gap"
        style={{ fontSize: 20 }}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
      <div className="bit-map-nav-gap">
        <Image width={20} preview={false} src={option} />
      </div>
      <div className="bit-map-nav-gap">
        <Image width={20} preview={false} src={otherColor} />
      </div>
      <Switch
        className="bit-map-nav-gap"
        checkedChildren="Stack"
        defaultChecked
        unCheckedChildren="Single"
      />
      <Switch
        className="bit-map-nav-gap"
        checkedChildren="Logic"
        defaultChecked
        unCheckedChildren="Physical"
      />
    </div>
  );
};

export default NavActionPage;
