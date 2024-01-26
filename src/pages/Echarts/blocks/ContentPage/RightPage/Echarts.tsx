import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { useModel } from '@umijs/max';

import styles from '../../../index.less';

const EchartsPage = () => {
  const { axisValue, changeColor, options } = useModel('useEchartsModel');
  const chartRef = useRef(null);
  // const [chartData, setChartData] = useState(data);
  useEffect(() => {
    const myChart = echarts.init(chartRef.current as any);
    myChart.setOption(options);
  }, [axisValue, changeColor]);
  return <div ref={chartRef} className={styles['echarts-canvas']} />;
};

export default EchartsPage;
