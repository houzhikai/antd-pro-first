import * as echarts from 'echarts';
import { useEffect, useRef, useState } from 'react';
import { useModel } from '@umijs/max';

import styles from '../../../index.less';

const EchartsPage = () => {
  const { changeColor, options } = useModel('useEchartsModel');
  const chartRef = useRef<any>(null);
  // const [chartData, setChartData] = useState(data);
  const [getNewOptions, setGetNewOptions] = useState<any>(options);
  const [diff, setDiff] = useState(100);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current as any);
    myChart.setOption(options, true);
    // 避免放大缩小时重复渲染数据
    myChart.on(
      'dataZoom',
      echarts.throttle(function (params: any) {
        const start = params.batch[0].start;
        const end = params.batch[0].end;
        let difference = end - start;

        let option: any = myChart.getOption();
        setGetNewOptions(option);
        setDiff(difference);
      }, 20),
    );

    const start = getNewOptions.dataZoom[0]?.start;
    const end = getNewOptions.dataZoom[0]?.end;
    // const showVisualDataList = (arr) => {
    //   const startValue = getNewOptions.dataZoom[0].startValue;
    //   const endValue = getNewOptions.dataZoom[0].endValue;

    //   const startList = arr.filter((item) => {
    //     return (
    //       item[0] >= startValue &&
    //       item[0] <= endValue &&
    //       item[1] >= startValue &&
    //       item[1] <= endValue
    //     );
    //   });
    //   return startList.sort((a, b) => a[0] - b[0]);
    // };
    if (start && end) {
      // const xxx = getNewOptions.series.map((item) => {
      //   const isShowLabel = diff < 25;
      //   console.log(11, item.label.show, diff, diff < 25, isShowLabel);
      //   return {
      //     ...item,
      //     label: {
      //       ...item.label,
      //       show: isShowLabel,
      //     },
      //     data: showVisualDataList(data),
      //   };
      // });
      // Object.assign(getNewOptions, { series: xxx });
      getNewOptions.series.map((item) => (item.label.show = diff < 25));
      //  setOption(option, true) 实质是 setOption(option, {notMerge: true})的缩写
      myChart.setOption(getNewOptions, true);
    }
    return () => {
      myChart.dispose();
    };
  }, [changeColor, diff, options]);
  return <div ref={chartRef} className={styles['echarts-canvas']} />;
};

export default EchartsPage;
