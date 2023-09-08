import rectangle from '@/icon/draw/items/rectangle.svg';
import ellipse from '@/icon/draw/items/ellipse.svg';
import round from '@/icon/draw/items/round.svg';
// import filletCorner from '@/icon/draw/items/filletCorner.svg';
interface TestItemIconListProps {
  icon: string;
  size?: number;
  name: string;
  type: string;
}
export const testItemIconList: TestItemIconListProps[] = [
  // { icon: filletCorner, type: 'custom-input', size: 54, name: '圆角矩形' },
  { icon: rectangle, type: 'input', name: '矩形' },
  { icon: ellipse, type: 'default', name: '椭圆' },
  { icon: round, type: 'output', name: '圆形' },
  { icon: rectangle, type: 'custom-middleNode', name: 'basic' },
];
