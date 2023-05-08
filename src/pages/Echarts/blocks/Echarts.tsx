import * as echarts from 'echarts';
import { useEffect } from 'react';
import { xAxisData } from '@/components/dataList/Echarts/xAxis';
import { yAxisData } from '@/components/dataList/Echarts/yAxis';
import { data } from '@/components/dataList/Echarts/data';
import { useModel } from '@umijs/max';

const Echarts = () => {
  const { axis, isAxisInverse } = useModel('useEchartsModel');
  useEffect(() => {
    const myChart = echarts.init(document.getElementById('echart') as any);

    myChart.setOption({
      tooltip: {
        position: 'top',
      },
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
        data: xAxisData,
        position: axis.x,
        inverse: isAxisInverse.x,
        splitArea: {
          show: true,
        },
      },
      yAxis: {
        type: 'category',
        data: yAxisData,
        position: axis.y,
        inverse: isAxisInverse.y,
        splitArea: {
          show: true,
        },
      },
      visualMap: {
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '0%',
      },
      series: [
        {
          name: 'Punch Card',
          type: 'heatmap',
          data: data,
          label: {
            show: true,
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
