import {
  CheckOutlined,
  CloseOutlined,
  Loading3QuartersOutlined,
} from '@ant-design/icons';

export enum TestUnitStatus {
  SUCCESS = '0',
  ERROR = '1',
  PROCESS = '2',
  EMPTY = '3',
}

export const testUnitStatus = (val) => {
  let value;
  switch (val) {
    case TestUnitStatus.SUCCESS:
      value = <CheckOutlined style={{ color: 'green' }} />;
      break;
    case TestUnitStatus.ERROR:
      value = <CloseOutlined style={{ color: 'red' }} />;
      break;
    case TestUnitStatus.PROCESS:
      value = <Loading3QuartersOutlined spin style={{ color: '#1677ff' }} />;
      break;
    case TestUnitStatus.EMPTY:
      value = <div style={{ width: 24 }} />;
      break;
    default:
      value = <div style={{ width: 24 }} />;
      break;
  }
  return value;
};
export const analysisMenuList = (interfaceDataList) => {
  if (!Array.isArray(interfaceDataList)) {
    return;
  }
  const getChildrenList = (list) => {
    const childItemList = list.map((item) => {
      return {
        ...item,
        title: (
          <div style={{ display: 'flex' }}>
            <div style={{ width: '236px' }}>{item.title}</div>
            <div> {testUnitStatus(item.status)}</div>
          </div>
        ),
        // icon: testUnitStatus(item.status),
      };
    });
    return childItemList;
  };
  const getChildList = (list) => {
    const childItemList = list.map((item) => {
      return {
        ...item,
        // icon: testUnitStatus(item.status),
        title: (
          <div style={{ display: 'flex' }}>
            <div style={{ width: '260px' }}>{item.title}</div>
            <div> {testUnitStatus(item.status)}</div>
          </div>
        ),
        children: getChildrenList(item.children),
      };
    });
    return childItemList;
  };
  const newList = interfaceDataList.map((item) => {
    return {
      ...item,
      child: getChildList(item.child),
    };
  });

  return newList;
};
