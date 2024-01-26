import * as echarts from 'echarts';
import { useEffect } from 'react';
import { useModel } from '@umijs/max';

import { data } from '@/components/dataList/Echarts/data';
import { takeMiddleNumber } from '@/components/takeMiddleNumber';

const EchartsPage = () => {
  const { axis, isAxisInverse, axisValue, changeColor, changeAxisName } =
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

    // 点击事件
    myChart.on('click', (e) => {
      console.log(11, e);
    });

    myChart.setOption({
      title: {
        text: 'Example',
        subtext: 'Sub Title',
        left: 'center', // left/center/right
        top: 'top', // top/middle/bottom
        textStyle: {
          fontSize: 26,
          textShadowColor: 'rgba(238, 13, 13, 1)',
          textShadowBlur: 3.5,
        },
        subtextStyle: {
          fontSize: 16,
          textShadowColor: 'rgba(238, 13, 13, 1)',
          textShadowBlur: 3.5,
        },
      },
      tooltip: {
        position: 'top',
        formatter: (params) => {
          return `横轴：${params.data[0]}，<br />纵轴：${params.data[1]}，<br />value：${params.data[2]}`;
        },
      },
      animation: false,
      //   其实不是一个圆，暂时先不加
      // graphic: [
      //   {
      //     type: 'circle',
      //     scale: [1, 1], // 缩放，默认值为 [1, 1]。表示缩放的倍数。
      //     z: -1, // 层级
      //     origin: [25, 25], // 旋转和缩放的中心点，默认值为 [0, 0]。
      //     shape: {
      //       cx: 300,
      //       cy: 300,
      //       r: 235,
      //     },
      //     style: {
      //       fill: 'transparent',
      //       stroke: '#6e7079',
      //     },
      //   },
      // ],
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
        name: changeAxisName.x, // name名称，默认 ''
        nameLocation: 'middle', // 位置 start/middle/end 默认end
        nameGap: 30, // 离轴线的距离 默认15
        nameTextStyle: {
          // name 样式
          fontSize: 16,
          fontWeight: 800,
        },
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
        name: changeAxisName.y, // name名称，默认 ''
        nameLocation: 'middle', // 位置 start/middle/end 默认end
        nameGap: 30, // 离轴线的距离 默认15
        // nameRotate: 0, // name 转的角度，默认90
        nameTextStyle: {
          // name 样式
          fontSize: 16,
          fontWeight: 800,
        },
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
          // symbolSize: [200, 600], // 图元大小
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
  }, [axis, isAxisInverse, axisValue, changeColor, changeAxisName]);
  return (
    <>
      <div
        id="echart"
        style={{
          width: '800px',
          height: '800px',
          marginTop: 30,
          marginLeft: 30,
        }}
      ></div>
    </>
  );
};

export default EchartsPage;
