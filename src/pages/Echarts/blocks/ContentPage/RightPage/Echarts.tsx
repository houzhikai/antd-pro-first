import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { useModel } from '@umijs/max';

import styles from '../../../index.less';

const EchartsPage = () => {
  const { axisValue, changeColor, options } = useModel('useEchartsModel');
  const chartRef = useRef<any>(null);
  // const [chartData, setChartData] = useState(data);

  useEffect(() => {
    const myChart = echarts.init(chartRef.current as any);
    myChart.setOption(options);

    // 避免放大缩小时重复渲染数据
    myChart.on('dataZoom', function (params: any) {
      const start = params.batch[0].start;
      const end = params.batch[0].end;
      let diff = end - start;
      let option: any = myChart.getOption();
      console.log({ params, option });
      option.series.map((item) => (item.label.show = diff < 25));
      myChart.clear();
      // setOption(option, true) 实质是 setOption(option, {notMerge: true})的缩写
      myChart.setOption(option, true);
      //
    });
    myChart.on('viewChanged', function (params) {
      console.log('平移', params);
    });
    return () => {
      myChart.dispose();
    };
  }, [axisValue, changeColor]);
  return <div ref={chartRef} className={styles['echarts-canvas']} />;
};

export default EchartsPage;
