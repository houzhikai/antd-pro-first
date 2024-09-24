import { Collapse, CollapseProps } from 'antd';
import ComponentsPage from './ComponentsPage';
import AreasPage from './AreasPage';
import '../../index.less';

const SiderPage = () => {
  const items: CollapseProps['items'] = [
    {
      key: 'components',
      label: '组件库',
      children: <ComponentsPage />,
    },
    {
      key: 'areas',
      label: '区域组件',
      children: <AreasPage />,
    },
  ];
  return (
    <div className="sider-page">
      <Collapse
        items={items}
        bordered={false}
        defaultActiveKey={['components']}
        ghost
      />
    </div>
  );
};

export default SiderPage;
