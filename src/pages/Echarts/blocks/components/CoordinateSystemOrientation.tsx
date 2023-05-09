import { useModel } from '@umijs/max';
import { Dropdown, Button } from 'antd';
import type { MenuProps } from 'antd';

const CoordinateSystemOrientation = () => {
  const { setAxis, setIsAxisInverse } = useModel('useEchartsModel');
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '第一象限',
      onClick: () => {
        setAxis({ x: 'bottom', y: 'left' });
        setIsAxisInverse({ x: false, y: false });
      },
    },
    {
      key: '2',
      label: '第二象限',
      onClick: () => {
        setAxis({ x: 'bottom', y: 'right' });
        setIsAxisInverse({ x: true, y: false });
      },
    },
    {
      key: '3',
      label: '第三象限',
      onClick: () => {
        setAxis({ x: 'top', y: 'right' });
        setIsAxisInverse({ x: true, y: true });
      },
    },
    {
      key: '4',
      label: '第四象限',
      onClick: () => {
        setAxis({ x: 'top', y: 'left' });
        setIsAxisInverse({ x: false, y: true });
      },
    },
  ];
  return (
    <Dropdown
      menu={{ items }}
      placement="bottom"
      arrow={{ pointAtCenter: true }}
    >
      <Button size="large" type="primary">
        坐标系方向
      </Button>
    </Dropdown>
  );
};
export default CoordinateSystemOrientation;
