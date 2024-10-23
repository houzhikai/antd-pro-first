import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { ProviderFunc } from '../../../components/containers';
import { getWaferMapOptions } from './components/getWaferMapOptions';
import myFetch from '../../../components/myFetch';
import '../../../index.css';
import { message } from 'antd';

const WaferMapDataPage = () => {
  const wafermapChartRef = useRef<any>(null);
  const {
    theme,
    setSingleIsModalOpen,
    wafermapLayout,
    wafermapData,
    vscodeParams,
    bitMapPort,
    setSingleModeData,
    setConfigInfo,
  } = ProviderFunc();
  const [wafermapEchartsSize, setWafermapEchartsSize] = useState({
    width: 0,
    height: 0,
    fullHeight: 0, // 为了计算半圆弧的半径，对其他没有作用
  });

  // 计算缩略图的高度
  useEffect(() => {
    // 更新视窗大小
    const updateSize = () => {
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      const width = Math.round(vw - 60 - 300);
      const height = Math.round(vh - 60 - 10);
      setWafermapEchartsSize(
        width > height ? { width: height, height, fullHeight: height } : { width, height: width, fullHeight: height }
      );
    };

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const data = wafermapData.data.map((item) => {
    const newList = [item[0] - wafermapLayout.xMin, item[1] - wafermapLayout.yMin, item[2], item[3]];
    return newList.slice(0, 3);
  });
  const options = getWaferMapOptions(data, theme, wafermapLayout, wafermapEchartsSize);
  useEffect(() => {
    if (wafermapData.data.length > 0) {
      const myWafermapChart = echarts.init(wafermapChartRef.current);

      myWafermapChart.setOption(options);

      myWafermapChart.on('click', function (params: any) {
        // click not support async function
        (async function () {
          const fileName =
            wafermapData.data.filter(
              (item) =>
                item[0] === params.data[0] + wafermapLayout.xMin &&
                item[1] === params.data[1] + wafermapLayout.yMin &&
                item[2] === params.data[2]
            )[0][3] || '';
          // open sinfleUI when pass dut is not equal to 0
          if (params.data[2] !== 0) {
            try {
              const res = await myFetch({
                url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/getbitmapdata`,
                params: {
                  mode: 1, // 0: Stack 1: single
                  physicalDataPath: [{ fileName, location: wafermapData.info['location'] || '' }],
                },
                isExceptionHand: true,
                timeout: 100,
              });
              if (res.result === 0) {
                const result = JSON.parse(res.data[0].value);
                const layoutConfig = result.layoutConfig;
                // get bitmap layout
                setConfigInfo({
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
                });

                const ratio = await myFetch({
                  url: `http://${vscodeParams.initIp}:${bitMapPort}/bitmap/getcompressdata?ratio=256`,
                  isExceptionHand: true,
                  timeout: 100,
                });
                if (ratio.result === 0) {
                  setSingleIsModalOpen(true);
                  setSingleModeData({ data: JSON.parse(ratio.data[0].value || []), info: result.dutInfo });
                } else {
                  message.error(ratio.msg);
                }
              } else {
                message.error(res.msg);
              }
            } catch (error) {
              message.error('Error: Get scale failed');
            }
          }
        })();
      });

      // 处理窗口大小变化
      const resizeChart = () => myWafermapChart.resize();
      // 监听浏览器视图变化
      window.addEventListener('resize', resizeChart);

      return () => {
        myWafermapChart.dispose();
        window.removeEventListener('resize', resizeChart);
      };
    }
  }, [options]);

  return (
    <div className='wafermap-echarts-page'>
      <div
        ref={wafermapChartRef}
        style={{
          width: wafermapEchartsSize.width,
          height: wafermapEchartsSize.height,
          margin: 'auto',
        }}
      />
    </div>
  );
};

export default WaferMapDataPage;
