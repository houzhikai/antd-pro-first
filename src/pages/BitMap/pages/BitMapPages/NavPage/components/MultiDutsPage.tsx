import React, { useEffect, useState } from 'react'
import { Button, Cascader, CascaderProps, Divider, Form, FormProps, GetProp, Input, Modal, Tag, Tooltip, message } from 'antd'
import { ProviderFunc } from '../../../../components/containers';
import CustomFormItemPage from '../../../ModalPages/components/CustomFormItemPage';
import { useAsyncEffect } from 'ahooks';
import myFetch from '../../../../components/myFetch';
import { GetDetailsViewSize } from '../../DetailsEcharts/components/GetDetailsViewSize';
interface Option {
  value: string;
  label: string;
  children?: Option[];
  disabled?: boolean;
}

const { SHOW_CHILD } = Cascader;

const maxTagCount = 16

const MultiDuts = () => {
  const defaultTagValues = []
  const { setSelectDutsModal, selectDutsModal, vscodeParams, bitMapPort, setTriggerTiming, waferIDPath, setConfigInfo, setBitmapData,
    setSelectSize, setEchartsIndex } = ProviderFunc();
  const [options, setOptions] = useState([]); // 测试项 下拉列表
  const [selectedTagValues, setSelectedTagValues] = useState<any[]>(defaultTagValues); // 选择的tag value 值

  useAsyncEffect(async () => {
    // waferId path 有值 且 打开 select dut 时调接口
    if (waferIDPath && selectDutsModal.open) {
      try {
        const res = await myFetch({
          url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/gettestunitanddutinfofromdir?location=${waferIDPath}`,
          isExceptionHand: true,
        });
        const resOptions = JSON.parse(res.data[0].value)
        setOptions(resOptions)
      } catch (error) {
        message.error('获取 duts 列表失败')
      }
    }
  }, [waferIDPath, selectDutsModal.open])

  const filter = (inputValue: string, path: any) =>
    path.some(
      (option) =>
        (option.label as string)
          .toLowerCase()
          .indexOf(inputValue.toLowerCase()) > -1,
    );


  const handleOpenModal = () => setSelectDutsModal((obj) => ({ ...obj, open: true }));
  const handleCancel = () => setSelectDutsModal((obj) => ({ ...obj, open: false }));

  const handleImportWaferIDPath = () => {
    setTriggerTiming((obj) => ({ ...obj, importWaferIDPath: true }));
  }

  const handleChange = (value) => {
    if (value.length <= maxTagCount) {
      setSelectedTagValues(value);
      // 最多勾选16个dut
      const toggleDisable = (options) => {
        return options.map((option) => {
          const newOption = { ...option };
          if (newOption.children) {
            newOption.children = toggleDisable(newOption.children);
          }
          return newOption;
        });
      };
      setOptions(toggleDisable(options));
    } else {
      message.error('最多只能选择16个标签');
    }
  };
  const tagRender: any = ({ label, _, closable, onClose }) => {
    return (
      <Tag closable={closable} onClose={onClose} style={{ margin: '4px 6px' }}>
        {label}
      </Tag>
    );
  };

  const handleImport = async () => {
    const physicalDataPath = [
      {
        fileName: 'lotid_waferid_20240802120450991_x0y0.phy',
        location: '/home/kkuser/public/projects/datas2/32M/AFM1_0999/physical'
      }
    ]
    try {
      const res = await myFetch({
        url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/getbitmapdata`,
        // 0: Stack 1: single
        params: { mode: physicalDataPath.length > 1 ? 0 : 1, physicalDataPath, dataAxis: [[0, 0, 0, 0]] }, // StartX，StartY，EndX，EndY
        isExceptionHand: true,
      });
      if (res.result !== 0) {
        // 请求失败时提示信息
        message.error(res.msg)
      } else {
        // 请求成功后的逻辑处理
        const result = JSON.parse(res.data[0].value);
        const layoutConfig = result.layoutConfig;
        const config = {
          // dq
          dq: layoutConfig.dq,
          dq_arrange: layoutConfig.dq_arrange,
          // 1M配置，默认D0-D7
          need_dq_direction_reserve: layoutConfig.need_dq_direction_reserve.page_index,
          // block 原点和伸展方向
          continuous_block_arrange: layoutConfig.per_dut_layout.continuous_block_arrange,
          // page 原点和伸展方向
          continuous_page_arrange: layoutConfig.per_dut_layout.per_block_layout.continuous_page_arrange,
          // 目前没有用到该属性， 预留
          is_block_continuous: layoutConfig.per_dut_layout.is_block_continuous,
          // 目前没有用到该属性， 预留
          is_page_continuous: layoutConfig.per_dut_layout.per_block_layout.is_page_continuous,
          // echarts 的 xMax yMax 和 原点位置
          layoutConfig: {
            xMax: layoutConfig.per_dut_layout.x_max,
            yMax: layoutConfig.per_dut_layout.y_max,
            dots: layoutConfig.coordinate_origin,
          },
          // duts 行列个数
          duts: { row: layoutConfig.per_dut_layout.block_row, col: layoutConfig.per_dut_layout.block_col },
          // blocks 行列个数
          blocks: {
            row: layoutConfig.per_dut_layout.per_block_layout.page_row,
            col: layoutConfig.per_dut_layout.per_block_layout.page_col,
          },
          // pages 行列个数
          pages: {
            row: layoutConfig.per_dut_layout.per_block_layout.per_page_layout.wl_row,
            col: layoutConfig.per_dut_layout.per_block_layout.per_page_layout.bl_col,
          },
        }
        // 关闭 Select Duts 弹窗
        setSelectDutsModal((obj) => ({ ...obj, open: false }));
        // get bitmap layout
        setConfigInfo(config);
        // 获取 bitmapdata 数据
        setBitmapData({ data: result['256xdata'], info: result.dutInfo });
        const scrollableDiv: any = document.getElementById('wholeEcharts');
        if (scrollableDiv) {
          GetDetailsViewSize(false, config, 256, setSelectSize, setEchartsIndex);
        }
      }
    } catch (error) {
      message.error('获取当前bitmap数据失败')
    }
  }

  return (
    <div>
      <Button type='primary' size='small' onClick={handleOpenModal}>
        Select Duts
      </Button>
      <Modal
        title='Select Duts'
        width={1200}
        open={selectDutsModal.open}
        onCancel={handleCancel}
        okText='Import'
        cancelText='Cancel'
        onOk={handleImport}
        maskClosable={false}
      >
        <Divider />
        <>
          <CustomFormItemPage title="WaferID Path">
            <Input style={{ margin: '0 20px', width: 800 }} value={waferIDPath} disabled />
            <Button type="primary" onClick={handleImportWaferIDPath}>Browse Path</Button>
          </CustomFormItemPage>

          <CustomFormItemPage title="Test Unit">
            <Cascader
              style={{ margin: '0 20px', width: 930 }}
              placement="bottomLeft"
              // defaultValue={['AFM1_0999', 'dut_x1y0']}
              popupClassName="custom-cascader"
              multiple
              maxTagCount={maxTagCount}
              value={selectedTagValues}
              options={options}
              changeOnSelect
              onChange={handleChange}
              showCheckedStrategy={SHOW_CHILD}
              placeholder="Please select"
              showSearch={{ filter }}
              dropdownRender={(menu) => <div style={{ width: 930 }}>{menu}</div>}
              tagRender={tagRender}
              optionRender={(option: any) => {
                return (
                  <Tooltip placement="bottomLeft" title={option?.value}>
                    <div>{option?.label}</div>
                  </Tooltip>
                );
              }}
            />
          </CustomFormItemPage>
        </>
      </Modal>
    </div>
  )
}

export default MultiDuts