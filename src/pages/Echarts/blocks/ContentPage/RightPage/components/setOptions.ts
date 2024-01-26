import { takeMiddleNumber } from '@/components/takeMiddleNumber';
import { useModel } from '@umijs/max';
import { data } from '../../../components/data';

export const Xxx = () => {
  const { axisValue, changeColor } = useModel('useEchartsModel');

  const xAxisValueList = takeMiddleNumber(axisValue.xMin, axisValue.xMax);
  const yAxisValueList = takeMiddleNumber(axisValue.yMin, axisValue.yMax);

  const dataList = data.map((item) => {
    return [
      xAxisValueList.indexOf(item[0]),
      yAxisValueList.indexOf(item[1]),
      item[2],
    ];
  });

  const options = {
    tooltip: {
      position: 'top',
      formatter: (params) => {
        return `X: ${params.data[0]}，<br />Y: ${params.data[1]}，<br />Value: ${params.data[2]}`;
      },
    },
    grid: {
      height: '90%',
      width: '90%',
      left: '5%',
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
      data: xAxisValueList,
    },
    yAxis: {
      type: 'category',
      data: yAxisValueList,
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
        name: 'WaferMap',
        type: 'heatmap',
        data: dataList,
        label: {
          // 格子上是否要加上数字,数据量大的时候会导致加载过慢
          show: false,
        },
        itemStyle: {
          // 格子的边框设置
          borderColor: '#ccc',
          borderWidth: 1,
          borderType: 'solid',
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
  return { options };
};
