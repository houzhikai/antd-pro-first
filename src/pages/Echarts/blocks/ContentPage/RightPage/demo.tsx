import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { useModel } from '@umijs/max';

import { data } from '@/components/dataList/Echarts/data';
import { takeMiddleNumber } from '@/components/takeMiddleNumber';

import styles from '../../../index.less';

const EchartsPage = () => {
  const { axisValue, changeColor } = useModel('useEchartsModel');
  const chartRef = useRef(null);
  // const [chartData, setChartData] = useState(data);
  useEffect(() => {
    const myChart = echarts.init(chartRef.current as any);

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
    // myChart.on('click', (e) => {
    //   console.log(11, e);
    // });

    myChart.setOption({
      tooltip: {},
      grid: {
        right: 140,
        left: 40,
      },
      xAxis: {
        type: 'category',
        data: xAxisValueList,
      },
      yAxis: {
        type: 'category',
        data: yAxisValueList,
      },
      visualMap: {
        type: 'piecewise',
        min: 0,
        max: 1,
        left: 'right',
        top: 'center',
        calculable: true,
        realtime: false,
        splitNumber: 8,
        inRange: {
          color: [
            '#313695',
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026',
          ],
        },
      },
      series: [
        {
          name: 'Gaussian',
          type: 'heatmap',
          data: dataList,
          emphasis: {
            itemStyle: {
              borderColor: '#333',
              borderWidth: 1,
            },
          },
          progressive: 1000,
          animation: false,
        },
      ],
    });
  }, [axisValue, changeColor, data]);
  return <div ref={chartRef} className={styles['echarts-canvas']} />;
};

export default EchartsPage;
