import type { ProColumns, ActionType } from '@ant-design/pro-components';
import { EditableProTable, ProForm } from '@ant-design/pro-components';
import { Button } from 'antd';
import React, { useRef, useState } from 'react';

type HardBinDataSourceType = {
  id: React.Key;
  name?: string;
  number?: string;
  type?: string;
  color?: string;
  children?: HardBinDataSourceType[];
};

const defaultHardBinData: HardBinDataSourceType[] = [
  {
    id: 0,
    name: 'HB1',
    number: '0',
    type: 'pass',
    color: '#bfa',
  },
  {
    id: 1,
    name: 'HB2',
    number: '1',
    type: 'fail',
    color: '#fba',
  },
  {
    id: 2,
    name: 'HB1',
    number: '1',
    type: 'fail',
    color: '#fba',
  },
];

const HardBinColumns: ProColumns<HardBinDataSourceType>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Number',
    dataIndex: 'number',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    valueType: 'select',
    valueEnum: {
      pass: { text: 'Pass', status: 'pass' },
      fail: { text: 'Fail', status: 'fail' },
    },
  },
  {
    title: 'Color',
    dataIndex: 'color',
  },
  {
    title: '操作',
    valueType: 'option',
    align: 'center',
    width: '12.5%',
  },
];

type SoftBinDataSourceType = {
  id: React.Key;
  name?: string;
  number?: string;
  hardBin?: string;
  maxCount?: string;
  checkOverflow?: string;
  color?: string;
  comment?: string;
};

const defaultSoftBinData: SoftBinDataSourceType[] = [
  {
    id: 0,
    name: 'FB1',
    number: '1001',
    hardBin: 'HB1',
    maxCount: '65536',
    checkOverflow: 'pass',
    color: '#bfa',
    comment: '',
  },
  {
    id: 1,
    name: 'FB2',
    number: '1002',
    hardBin: 'HB2',
    maxCount: '65536',
    checkOverflow: 'fail',
    color: '#fba',
    comment: '',
  },
  {
    id: 2,
    name: 'FB1',
    number: '1003',
    hardBin: 'HB1',
    maxCount: '65536',
    checkOverflow: 'fail',
    color: '#abf',
    comment: '',
  },
];

const SoftBinColumns: ProColumns<SoftBinDataSourceType>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Number',
    dataIndex: 'number',
  },
  {
    title: 'HardBin',
    dataIndex: 'hardBin',
    valueType: 'select',
    valueEnum: {
      HB1: { text: 'HB1', status: 'HB1' },
      HB2: { text: 'HB2', status: 'HB2' },
    },
  },
  {
    title: 'MaxCount',
    dataIndex: 'maxCount',
  },
  {
    title: 'CheckOverflow',
    dataIndex: 'checkOverflow',
    valueType: 'select',
    valueEnum: {
      pass: { text: 'true', status: 'true' },
      fail: { text: 'false', status: 'false' },
    },
  },
  {
    title: 'Color',
    dataIndex: 'color',
  },
  {
    title: 'Comment',
    dataIndex: 'comment',
  },
  {
    title: '操作',
    valueType: 'option',
    align: 'center',
  },
];

const FormModal = () => {
  const softBinRef = useRef<ActionType>();

  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() => {
    return defaultHardBinData.map((item) => item.id);
  });
  const [keys, setKeys] = useState<React.Key[]>(() => {
    return defaultSoftBinData.map((item) => item.id);
  });

  const handleAddSoftBinRows = () => {
    softBinRef.current?.addEditRecord({
      id: Date.now(),
    });
  };
  return (
    <ProForm<{
      name: string;
      company: string;
    }>
      style={{ maxHeight: '70vh', overflowY: 'auto' }}
      submitter={{
        resetButtonProps: {
          style: {
            display: 'none', // 隐藏重置按钮
          },
        },
        submitButtonProps: {
          style: {
            display: 'none', // 隐藏重置按钮
          },
        },
      }}
    >
      <ProForm.Item
        label={<div style={{ fontSize: 16, fontWeight: 600 }}>HardBin</div>}
        name="hardBin"
        initialValue={defaultHardBinData}
        trigger="onValuesChange"
      >
        <EditableProTable<HardBinDataSourceType>
          rowKey="id"
          toolBarRender={false}
          columns={HardBinColumns}
          recordCreatorProps={{
            newRecordType: 'dataSource',
            position: 'bottom',
            record: () => ({
              id: Date.now(),
              addonBefore: 'ccccccc',
              decs: 'testdesc',
            }),
          }}
          editable={{
            type: 'multiple',
            editableKeys,
            onChange: setEditableRowKeys,
            actionRender: (row, _, dom) => {
              return [dom.delete];
            },
          }}
        />
      </ProForm.Item>
      <ProForm.Item
        label={
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: 'calc(1200px - 60px)',
            }}
          >
            <div style={{ fontSize: 16, fontWeight: 600 }}>SoftBin</div>
            <Button type="primary" size="middle" onClick={handleAddSoftBinRows}>
              add row
            </Button>
          </div>
        }
        name="softBin"
        initialValue={defaultSoftBinData}
        trigger="onValuesChange"
      >
        <EditableProTable<HardBinDataSourceType>
          rowKey="id"
          actionRef={softBinRef}
          toolBarRender={false}
          columns={SoftBinColumns}
          recordCreatorProps={{
            newRecordType: 'dataSource',
            position: 'bottom',
            record: () => ({
              id: Date.now(),
            }),
          }}
          editable={{
            type: 'multiple',
            editableKeys: keys,
            onChange: setKeys,
            actionRender: (row, _, dom) => {
              return [dom.delete];
            },
          }}
        />
      </ProForm.Item>
    </ProForm>
  );
};
export default FormModal;
