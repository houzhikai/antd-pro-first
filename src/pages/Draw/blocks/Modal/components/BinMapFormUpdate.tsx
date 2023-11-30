import {
  Button,
  Switch,
  Table,
  Input,
  InputNumber,
  Popconfirm,
  ColorPicker,
} from 'antd';
import styles from '../../index.less';
import { useModel } from '@umijs/max';
import type { ColumnsType } from 'antd/es/table';
import { PlusOutlined } from '@ant-design/icons';
import { newData, colorList, DataType } from './BinMapFunc/binMapDataList';
import { useEffect } from 'react';

const BinMapFormUpdate = () => {
  const { dataSource, setDataSource, setVerifyBinMapObj } =
    useModel('useDrawModel');

  useEffect(() => {
    const verifyDataSourceFunc = (
      value: 'SoftBinNum' | 'SoftBin' | 'HardBinNum' | 'HardBin',
    ) => {
      // 数据是否重复
      const res = new Map();
      const uniqueProperty =
        value === 'SoftBinNum' || value === 'SoftBin'
          ? dataSource.filter(
              (item) => !res.has(item[value]) && res.set(item[value], 1),
            )
          : dataSource;
      // 数据是否为空
      const emptyProperty = dataSource
        .map((item) => item[value])
        .filter((item) => item);
      //  SoftBinNum 是否超出范围
      const propertyValue = value === 'SoftBinNum' ? 32767 : 999;
      const outRange =
        dataSource.filter(
          (item) => item[value] < 0 || item[value] > propertyValue,
        ).length > 0;
      // HardBinNum 是否超出范围
      return (
        uniqueProperty.length < dataSource.length ||
        emptyProperty.length < dataSource.length ||
        outRange
      );
    };

    setVerifyBinMapObj((obj) => {
      return {
        ...obj,
        SoftBinNum: verifyDataSourceFunc('SoftBinNum'),
        SoftBin: verifyDataSourceFunc('SoftBin'),
        HardBinNum: verifyDataSourceFunc('HardBinNum'),
        HardBin: verifyDataSourceFunc('HardBin'),
      };
    });
  }, [dataSource]);

  const columns: ColumnsType<DataType> = [
    {
      key: 'SoftBinNum',
      title: <div style={{ padding: '5px 0' }}> SoftBinNum</div>,
      dataIndex: 'SoftBinNum',
      render: (text, record, idx) => {
        const isRepeat =
          dataSource.filter((item) => item.SoftBinNum === text).length > 1;
        const outRange = text < 0 || text > 32767;
        const handleChange = (value) => {
          const newHardBinData = dataSource.map((item, index) => {
            if (idx === index) {
              return { ...item, SoftBinNum: value };
            }
            return item;
          });
          setDataSource(newHardBinData);
        };

        return (
          <>
            <InputNumber
              className="custom-input-number"
              value={text}
              onChange={handleChange}
              // min={0}
              // max={32767}
              precision={0} // 保留整数
              controls={false}
              bordered={false}
            />
            {!record.SoftBinNum && (
              <div style={{ color: 'red' }}>* Data can&apos;t empty</div>
            )}
            {isRepeat && record.SoftBinNum && (
              <div style={{ color: 'red' }}>*Data repeat</div>
            )}
            {outRange && record.SoftBinNum && (
              <div style={{ color: 'red' }}>*Data outRange</div>
            )}
          </>
        );
      },
    },
    {
      key: 'SoftBin',
      title: <div style={{ padding: '5px 0' }}> SoftBin</div>,
      dataIndex: 'SoftBin',
      render: (text, record, idx) => {
        const isRepeat =
          dataSource.filter((item) => item.SoftBin === text).length > 1;
        const handleChange = (e) => {
          const newHardBinData = dataSource.map((item, index) => {
            if (idx === index) {
              return { ...item, SoftBin: e.target.value };
            }
            return item;
          });
          setDataSource(newHardBinData);
        };
        return (
          <>
            <Input value={text} onChange={handleChange} bordered={false} />
            {text === '' && (
              <div style={{ color: 'red' }}>* Data can&apos;t empty</div>
            )}
            {isRepeat && text && (
              <div style={{ color: 'red' }}>*Data repeat</div>
            )}
          </>
        );
      },
    },
    {
      key: 'HardBinNum',
      title: <div style={{ padding: '5px 0' }}> HardBinNum</div>,
      dataIndex: 'HardBinNum',
      render: (text, record, idx) => {
        const outRange = text < 0 || text > 999;
        // onChange 变更数据
        const handleChange = (value) => {
          const newHardBinData = dataSource.map((item, index) => {
            if (idx === index) {
              return {
                ...item,
                HardBinNum: value,
              };
            }
            return item;
          });
          setDataSource(newHardBinData);
        };

        const handleClick = (e) => {
          const inputVal = e.target.value;

          // 拿到其他相同number的 hardBin 属性
          const updateHardBinAttribute = dataSource
            .filter(
              (item) =>
                item.HardBinNum === Number(inputVal) &&
                item.SoftBinNum !== record.SoftBinNum,
            )
            .map((item) => {
              return {
                HardBin: item.HardBin,
                Type: item.Type,
              };
            })[0] || {
            HardBin: '',
            Type: 'Pass',
          };
          const newHardBinData = dataSource.map((item, index) => {
            if (idx === index) {
              return {
                ...item,
                HardBinNum: Number(inputVal),
                HardBin: updateHardBinAttribute.HardBin,
                Type: updateHardBinAttribute.Type,
              };
            }
            return item;
          });
          setDataSource(newHardBinData);
        };
        return (
          <>
            <InputNumber
              value={text}
              onChange={handleChange}
              // min={0}
              // max={999}
              precision={0} // 保留整数
              controls={false}
              bordered={false}
              onPressEnter={handleClick}
              onBlur={handleClick}
            />
            {!text && (
              <div style={{ color: 'red' }}>* Data can&apos;t empty</div>
            )}
            {outRange && record.HardBinNum && (
              <div style={{ color: 'red' }}>*Data outRange</div>
            )}
          </>
        );
      },
    },
    {
      key: 'HardBin',
      title: <div style={{ padding: '5px 0' }}> HardBin</div>,
      dataIndex: 'HardBin',
      render: (text, record) => {
        const isRepeat =
          dataSource.filter(
            (item) =>
              item.HardBin === text && item.HardBinNum !== record.HardBinNum,
          ).length > 0;
        const handleChange = (e) => {
          const newHardBinData = dataSource.map((item) => {
            if (item.HardBinNum === record.HardBinNum) {
              return { ...item, HardBin: e.target.value };
            }
            return item;
          });
          setDataSource(newHardBinData);
        };
        return (
          <>
            <Input
              style={{ width: '100%' }}
              value={text}
              onChange={handleChange}
              bordered={false}
            />
            {!text && (
              <div style={{ color: 'red' }}>* Data can&apos;t empty</div>
            )}
            {isRepeat && text && (
              <div style={{ color: 'red' }}>*Data repeat</div>
            )}
          </>
        );
      },
    },

    {
      key: 'Type',
      title: <div style={{ padding: '5px 0' }}> Type</div>,
      dataIndex: 'Type',
      render: (text, record) => {
        const handleDoubleClick = () => {
          const newHardBinData = dataSource.map((item) => {
            if (item.HardBinNum === record.HardBinNum) {
              return { ...item, Type: text === 'Pass' ? 'Fail' : 'Pass' };
            }
            return item;
          });
          setDataSource(newHardBinData);
        };
        return (
          <div className={styles.binMapItem} onDoubleClick={handleDoubleClick}>
            {text}
          </div>
        );
      },
    },
    {
      key: 'MaxCount',
      title: <div style={{ padding: '5px 0' }}> MaxCount</div>,
      dataIndex: 'MaxCount',
      render: (text, _, idx) => {
        const handleClick = (e) => {
          const newHardBinData = dataSource.map((item, index) => {
            if (idx === index) {
              return { ...item, MaxCount: e.target.value };
            }
            return item;
          });
          setDataSource(newHardBinData);
        };
        return (
          <InputNumber
            value={text}
            controls={false}
            bordered={false}
            onPressEnter={handleClick}
            onBlur={handleClick}
          />
        );
      },
    },
    {
      key: 'CheckOverflow',
      title: <div style={{ padding: '5px 0' }}> CheckOverflow</div>,
      dataIndex: 'CheckOverflow',
      align: 'center',
      render: (text, _, idx) => {
        const handleChange = (check) => {
          const newHardBinData = dataSource.map((item, index) => {
            if (idx === index) {
              return { ...item, CheckOverflow: check };
            }
            return item;
          });
          setDataSource(newHardBinData);
        };
        return <Switch defaultChecked={text} onChange={handleChange} />;
      },
    },
    {
      key: 'Color',
      title: <div style={{ padding: '5px 0' }}> Color</div>,
      dataIndex: 'Color',
      width: '6%',
      render: (text, _, idx) => {
        const handleChangeColor = (color, hex) => {
          const newData = dataSource.map((item, index) => {
            if (index === idx) {
              return {
                ...item,
                Color: hex,
              };
            }
            return item;
          });
          setDataSource(newData);
        };
        return (
          <>
            <ColorPicker
              value={text}
              onChange={handleChangeColor}
              presets={colorList}
            />
          </>
        );
      },
    },
    {
      key: 'Comment',
      title: <div style={{ padding: '5px 0' }}> Comment</div>,
      dataIndex: 'Comment',
      render: (text, _, idx) => {
        const handleChange = (e) => {
          const newHardBinData = dataSource.map((item, index) => {
            if (idx === index) {
              return { ...item, Comment: e.target.value };
            }
            return item;
          });
          setDataSource(newHardBinData);
        };
        return (
          <Input
            style={{ width: '100%' }}
            value={text}
            bordered={false}
            onChange={handleChange}
          />
        );
      },
    },
    {
      key: 'Options',
      title: <div style={{ padding: '5px 0' }}> Options</div>,
      dataIndex: 'Options',
      width: '6%',
      align: 'center',
      render: (_, record) => {
        const handleRemoveRow = (record) => {
          const newData = dataSource.filter((item) => item.key !== record.key);
          setDataSource(newData);
        };
        return (
          <Popconfirm
            title="Are you sure to delete item?"
            onConfirm={() => handleRemoveRow(record)}
            okText="OK"
            cancelText="Cancel"
          >
            <Button style={{ margin: '5px 0' }} type="link">
              Delete
            </Button>
          </Popconfirm>
        );
      },
    },
  ];
  const handleAddSoftBinRows = () => {
    setDataSource([...dataSource, newData]);
  };
  return (
    <>
      <div>
        <Table
          style={{ maxHeight: '70vh', overflowX: 'hidden', overflowY: 'auto' }}
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          sticky
          bordered
        />
      </div>
      <Button
        className={styles['table']}
        icon={<PlusOutlined />}
        style={{ width: '100%' }}
        type="dashed"
        size="middle"
        onClick={handleAddSoftBinRows}
      >
        Add a row
      </Button>
    </>
  );
};

export default BinMapFormUpdate;
