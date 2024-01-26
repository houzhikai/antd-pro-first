import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useModel } from '@umijs/max';
import * as echarts from 'echarts';
import styles from '../../../index.less';

const EchartsForReact = () => {
  const { options } = useModel('useEchartsModel');
  return (
    <ReactECharts
      className={styles['echarts-canvas']}
      echarts={echarts}
      option={options}
      lazyUpdate={true}
      notMerge={true}
    />
  );
};

export default EchartsForReact;
