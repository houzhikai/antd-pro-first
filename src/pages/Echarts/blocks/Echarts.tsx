import * as echarts from 'echarts';
import { useEffect } from 'react';
import { useModel } from '@umijs/max';

import { data } from '@/components/dataList/Echarts/data';
import { takeMiddleNumber } from '@/components/takeMiddleNumber';

const Echarts = () => {
  const { axis, isAxisInverse, axisValue, changeColor } =
    useModel('useEchartsModel');
  useEffect(() => {
    const myChart = echarts.init(document.getElementById('echart') as any);

    const xAxisValueList = takeMiddleNumber(axisValue.xMin, axisValue.xMax);
    const yAxisValueList = takeMiddleNumber(axisValue.yMin, axisValue.yMax);
    const dataList = data.map((item) => {
      return [
        xAxisValueList.indexOf(item[0]),
        yAxisValueList.indexOf(item[1]),
        item[2],
      ];
    });

    myChart.setOption({
      tooltip: {
        position: 'top',
        formatter: (params) => {
          return `横轴：${params.data[0]}，<br />纵轴：${params.data[1]}，<br />value：${params.data[2]}`;
        },
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
        data: xAxisValueList,
        position: axis.x,
        inverse: isAxisInverse.x,
        splitArea: {
          show: true,
        },
        splitLine: {
          show: true, // 是否展示网格线
          lineStyle: {
            color: ['#ccc'],
            width: 2,
          },
        },
      },
      yAxis: {
        type: 'category',
        data: yAxisValueList,
        position: axis.y,
        inverse: isAxisInverse.y,
        splitArea: {
          show: true,
        },
        splitLine: {
          show: true, // 是否展示网格线
          z: 100,
          lineStyle: {
            color: ['#ccc'],
            width: 2,
          },
        },
      },
      visualMap: {
        min: 1,
        max: 7,
        calculable: false,
        orient: 'horizontal',
        left: 'center',
        bottom: '0%',
        show: false,
        inRange: {
          color: changeColor,
        },
      },
      series: [
        {
          name: 'Punch Card',
          type: 'heatmap',
          data: dataList,
          label: {
            show: false, // 格子上是否要加上数字
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
  }, [axis, isAxisInverse, axisValue, changeColor]);
  return (
    <>
      <div id="echart" style={{ width: '600px', height: '600px' }}></div>
    </>
  );
};

export default Echarts;
