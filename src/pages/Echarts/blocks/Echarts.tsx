import * as echarts from 'echarts';
import { useEffect } from 'react';
import { useModel } from '@umijs/max';

import { data } from '@/components/dataList/Echarts/data';
import { takeMiddleNumber } from '@/components/takeMiddleNumber';

const Echarts = () => {
  const { axis, isAxisInverse } = useModel('useEchartsModel');
  useEffect(() => {
    const myChart = echarts.init(document.getElementById('echart') as any);

    myChart.setOption({
      tooltip: {
        position: 'top',
      },
      animation: false,
      //   其实不是一个圆，暂时先不加
      //   graphic: [
      //     {
      //       type: 'circle',
      //       z: 100,
      //       style: {
      //         fill: 'transparent',
      //         stroke: '#74746c',
      //       },
      //       shape: {
      //         cx: 300,
      //         cy: 300,
      //         r: 235,
      //       },
      //     },
      //   ],
      grid: {
        height: '80%',
        top: '10%',
      },
      //   支持放大缩小， inside在内部放大缩小
      dataZoom: [
        {
          id: 'dataZoomX',
          type: 'inside',
          xAxisIndex: [0],
          filterMode: 'filter',
        },
        {
          id: 'dataZoomY',
          type: 'inside',
          yAxisIndex: [0],
          filterMode: 'empty',
        },
      ],
      xAxis: {
        type: 'category',
        splitNumber: 1,
        interval: 10,
        data: takeMiddleNumber(-50, 50),
        position: axis.x,
        inverse: isAxisInverse.x,
        splitArea: {
          show: true,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#ccc'],
            width: 2,
          },
        },
      },
      yAxis: {
        type: 'category',
        data: takeMiddleNumber(-50, 50),
        position: axis.y,
        inverse: isAxisInverse.y,
        splitArea: {
          show: true,
        },
        splitLine: {
          show: true,
          z: 100,
          lineStyle: {
            color: ['#ccc'],
            width: 2,
          },
        },
      },
      visualMap: {
        min: 0,
        max: 10,
        calculable: false,
        orient: 'horizontal',
        left: 'center',
        bottom: '0%',
        show: false,
        inRange: {
          color: ['#fba', '#f60', '#bfa'],
        },
      },
      series: [
        {
          name: 'Punch Card',
          type: 'heatmap',
          data: data,
          label: {
            show: true, // 格子上是否要加上数字
          },
          itemStyle: {
            // 格子的边框设置
            borderColor: '#ccc',
            borderWidth: 2,
            borderType: 'solid',
            // borderRadius: 6
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    });
  }, [axis, isAxisInverse]);
  return (
    <>
      <div id="echart" style={{ width: '600px', height: '600px' }}></div>
    </>
  );
};

export default Echarts;
