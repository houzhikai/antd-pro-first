import type { ProColumns } from '@ant-design/pro-components';
import { EditableProTable, ProForm } from '@ant-design/pro-components';
import { Input } from 'antd';
import React, { useState } from 'react';

type DataSourceType = {
  id: React.Key;
  title?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    title: '活动名称一',
    decs: '这个活动真好玩',
    state: 'open',
    created_at: 1590486176000,
  },
  {
    id: 624691229,
    title: '活动名称二',
    decs: '这个活动真好玩',
    state: 'closed',
    created_at: 1590481162000,
  },
];

const columns: ProColumns<DataSourceType>[] = [
  {
    title: '活动名称',
    dataIndex: 'title',
    width: '30%',
  },
  {
    title: '状态',
    key: 'state',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: {
        text: '未解决',
        status: 'Error',
      },
      closed: {
        text: '已解决',
        status: 'Success',
      },
    },
  },
  {
    title: '描述',
    dataIndex: 'decs',
    renderFormItem: (_, { record }) => {
      console.log('----===>', record);
      return <Input addonBefore={(record as any)?.addonBefore} />;
    },
  },
  {
    title: '操作',
    valueType: 'option',
  },
];

const FormModal = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
    defaultData.map((item) => item.id),
  );
  return (
    <ProForm<{
      name: string;
      company: string;
    }>
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
        label={<h2>HardBin</h2>}
        name="dataSource"
        initialValue={defaultData}
        trigger="onValuesChange"
      >
        <EditableProTable<DataSourceType>
          rowKey="id"
          toolBarRender={false}
          columns={columns}
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
        label={<h2>SoftBin</h2>}
        name="dataSource"
        initialValue={defaultData}
        trigger="onValuesChange"
      >
        <EditableProTable<DataSourceType>
          rowKey="id"
          toolBarRender={false}
          columns={columns}
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
    </ProForm>
  );
};
export default FormModal;
