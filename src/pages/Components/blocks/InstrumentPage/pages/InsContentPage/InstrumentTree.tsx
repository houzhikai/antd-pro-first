import React, { useEffect, useState } from 'react';
import { message, Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { DataNode } from 'antd/es/tree';
import myFetch from '@/components/myFetch';
import { matchIcon } from '../MatchIcon';
import { useInstrumentPageProvider } from '../../components/container';
import { mockTreeData } from '../../mockData/interfaceData';

const App: React.FC = () => {
  const {
    setMenuList,
    menuList,
    initIp,
    // setIsErrorPage,
    setDetailRefresh,
    setSelectKey,
    selectKey,
    setIsShowSpin,
    setInstrumentParm,
    setWebType,
    instrumentParm,
    detailRefresh,
  } = useInstrumentPageProvider();

  const [key, setKey] = useState(1);

  const getDevicesData = async () => {
    try {
      const res = await myFetch({
        url: `http://${initIp}:28700/instrument/devices`,
        isExceptionHand: true,
      });
      if (res.result === '0') {
        setMenuList(res.data); //树形列表数据
        setDetailRefresh((c: number) => c + 1);
        setIsShowSpin(false);
      } else {
        message.error(res.msg);
      }
    } catch (error) {
      // setIsShowSpin(true);
      setMenuList(mockTreeData);
      setDetailRefresh((c: number) => c + 1);
      // errTimes++;
    }
  };

  useEffect(() => {
    getDevicesData();
  }, []);

  //获取设备列表接口轮询
  useEffect(() => {
    // let errTimes = 0;
    const time = setInterval(async () => {
      // 后端接口偶尔会出现返回数据超出1s（1.2s左右），后端没时间解决，前端设置超时时间2s->1s
      getDevicesData();
    }, 5000);
    return () => {
      clearInterval(time);
    };
  }, [instrumentParm, detailRefresh]);

  const treeData: DataNode[] = menuList.map((item: any) => {
    return {
      title: `${item.title}${item.type === undefined ? '' : ` - ${item.type}`}`,
      key: item.key,
      icon: matchIcon(item.status),
      // icon: item.class === 'Head' ? matchIcon('1') : null,
      children: item?.children?.map((child: any) => {
        return {
          key: child.key,
          title: `${child.title}${
            child.type === undefined ? '' : ` - ${child.type}`
          }`,
          icon: child.class === 'Slot' ? matchIcon(child.status) : null,
        };
      }),
    };
  });
  const getInsSelectKeyParam = (value: string) => {
    let res = '';
    let classData = '';
    menuList.map((child: any) => {
      if (child.key === value) {
        res =
          child.class === 'Slot'
            ? `?ip=${child.ip}&slot=${child.title.substr(
                5,
                child.title.length - 5,
              )}`
            : `?ip=${child.ip}`;
        classData = child.class;
        return res;
      } else {
        child.children?.filter((c: any) => {
          if (c.key === value) {
            res =
              c.class === 'Slot'
                ? `?ip=${c.ip}&slot=${c.title.substr(5, c.title.length - 5)}`
                : `?ip=${c.ip}`;
            classData = c.class;
          }
          return res;
        });
        return res;
      }
    });
    setInstrumentParm(res);
    setWebType(classData);
  };

  //点击事件
  const handClick = (selectedKeys: any) => {
    if (selectedKeys.length > 0) {
      setSelectKey(selectedKeys[0]);
      getInsSelectKeyParam(selectedKeys[0]);
    }
  };

  const treeStyle = {
    borderRight: '1px solid #d9d9d9',
    paddingRight: 10,
  };

  useEffect(() => {
    setKey((c) => c + 1);
  }, [selectKey, menuList]);

  return (
    <>
      {treeData.length > 0 && (
        <Tree
          key={key}
          showIcon
          // showLine={true}
          defaultExpandAll={true}
          defaultSelectedKeys={[selectKey]}
          selectedKeys={[selectKey]}
          switcherIcon={
            <DownOutlined
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          }
          treeData={treeData}
          onSelect={handClick}
          rootStyle={treeStyle}
          blockNode
        />
      )}
    </>
  );
};

export default App;
