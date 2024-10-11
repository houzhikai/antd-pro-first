import React, { useEffect, useState } from 'react';
import type { CollapseProps } from 'antd';
import { Checkbox, Collapse } from 'antd';
import FirmwareChildrenPage from './FirmwareChildrenPage';
import { statusShow } from './components/statusShow';
import { StatusENUM } from './components/enum';
import { useFUProviderModule } from '../../components/containers';
import '../../index.css';
import { getDeviceOptionalAllKeys } from '../../components/getDeviceOptionalAllKeys';

const DetailsTablePage = ({ setIndeterminate, allKeys }) => {
  const {
    getDeviceListAndHeartObj,
    activeKey,
    setActiveKey,
    selectedKeysList,
    setSelectedKeysList,
    setIndeterminateKeys,
  } = useFUProviderModule();

  const handleChange = (selectedKeys) => {
    setIndeterminate(
      selectedKeys.length > 0 && selectedKeys.length < allKeys.length,
    );
    setActiveKey(selectedKeys);
  };

  const [indeterminateItemTableKeys, setIndeterminateItemTableKeys] =
    useState<any>([]);
  const allSelectedKeysList = getDeviceOptionalAllKeys(
    getDeviceListAndHeartObj.tableList,
  );
  useEffect(() => {
    if (getDeviceListAndHeartObj?.tableList) {
      const newIndeterminateItemTableKeys = (
        getDeviceListAndHeartObj?.tableList || []
      ).map((item: any) => {
        return {
          slot: item.slot,
          indeterminate:
            selectedKeysList.length > 0 &&
            selectedKeysList.length < allSelectedKeysList.length,
        };
      });
      setIndeterminateItemTableKeys(newIndeterminateItemTableKeys);
    }
  }, [getDeviceListAndHeartObj?.tableList.length]);

  const items: CollapseProps['items'] =
    getDeviceListAndHeartObj?.tableList?.map((item) => {
      const isDisabled =
        item.slotStatus === StatusENUM.Offline ||
        item.slotStatus === StatusENUM.PowerOff ||
        item.slotStatus === StatusENUM.Starting ||
        item.slotStatus === StatusENUM.Busy;
      const selectItemTablesKeys = Array.from(
        new Set(selectedKeysList.filter((t) => t.includes(`${item.slot}-`))),
      );
      const itemTablesKeys = item.children
        .filter((item) => item.newVersion)
        .map((item) => {
          if (item.children) {
            return item.children.map((t) => t.key).concat(item.key);
          } else {
            return item.key;
          }
        })
        .flat();
      // panel 勾选框功能
      const handleChangeCheckedAll = (e) => {
        const checked = e.target.checked;
        setSelectedKeysList((list) => {
          if (checked) {
            const newList = Array.from(new Set(list.concat(itemTablesKeys)));
            setIndeterminateKeys(
              newList.length > 0 && newList.length < allSelectedKeysList.length,
            );
            return newList;
          } else {
            const newList = list.filter((t) => !t.includes(`${item.slot}-`));
            // 全选 半选判断
            setIndeterminateKeys(
              newList.length > 0 && newList.length < allSelectedKeysList.length,
            );
            return newList;
          }
        });
        setIndeterminateItemTableKeys(
          (list) => {
            const newList = list.map((slotObj) => {
              if (slotObj.slot === item.slot) {
                return {
                  ...slotObj,
                  indeterminate:
                    selectItemTablesKeys.length > 0 &&
                    selectItemTablesKeys.length < itemTablesKeys.length,
                };
              } else {
                return slotObj;
              }
            });
            return newList;
          },
          // selectItemTablesKeys.length > 0 &&
          //   selectItemTablesKeys.length < itemTablesKeys.length,
        );
      };

      const indeterminate =
        indeterminateItemTableKeys.filter((obj) => obj.slot === item.slot)?.[0]
          ?.indeterminate || false;

      const handleChangeActive = (e) => {
        console.log(e);
      };
      return {
        key: item.slot,
        label: (
          <div
            className={isDisabled ? 'board-status' : ''}
            onClick={handleChangeActive}
          >
            <Checkbox
              onClick={(e) => e.preventDefault()}
              style={{ margin: '0 10px' }}
              indeterminate={indeterminate}
              onChange={handleChangeCheckedAll}
              checked={
                selectItemTablesKeys.length > 0 &&
                selectItemTablesKeys.length === itemTablesKeys.length
              }
            />
            <span>
              Slot {item.slot} - {item.type}
            </span>
          </div>
        ),
        extra: (
          <div className={isDisabled ? 'board-status' : ''}>
            <div style={{ width: 142, marginRight: 3 }}>
              {statusShow(item.slotStatus, 22)}
            </div>
          </div>
        ),
        children: (
          <div style={{ marginLeft: 20 }}>
            <FirmwareChildrenPage
              dataSource={item.children}
              slot={item.slot}
              isDisabled={isDisabled}
              itemTablesKeys={itemTablesKeys}
              setIndeterminateItemTableKeys={setIndeterminateItemTableKeys}
            />
          </div>
        ),
      };
    });

  return (
    <div className="fu-details-page">
      <Collapse
        activeKey={activeKey}
        onChange={handleChange}
        items={items}
        bordered={false}
        collapsible="icon"
      />
    </div>
  );
};

export default DetailsTablePage;
