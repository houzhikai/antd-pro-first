import { getRatioNumber } from './getRatioNumber';

export const getAxisLabelInterval = (scaleNumber) => {
  const percentage = getRatioNumber(scaleNumber) * 100;
  let value: any = {};
  if (scaleNumber === 0.125) {
    value = {
      axisTick: { xInterval: 0, yInterval: 0 }, //  设置刻度线每个都展示
      axisLabel: { xInterval: 4, yInterval: 4 }, // 设置标签每隔5个展示（注意这里是从0开始计数的，所以应该设置为4）
    };
  } else if (scaleNumber === 0.2) {
    value = {
      axisTick: { xInterval: 15, yInterval: 15 },
      axisLabel: { xInterval: 15, yInterval: 1024 / 64 - 1 },
    };
  } else if (scaleNumber === 256) {
    value = {
      axisTick: { xInterval: 1024 / 32 - 1, yInterval: 1024 / 64 - 1 },
      axisLabel: { xInterval: 1024 / 32 - 1, yInterval: 1024 / 64 - 1 },
    };
  } else {
    value = {
      axisTick: { xInterval: 1024 / 32 - 1, yInterval: 1024 / 32 - 1 },
      axisLabel: { xInterval: 1024 / 32 - 1, yInterval: 1024 / 32 - 1 },
    };
  }
  return { ...value, end: { xEnd: percentage, yEnd: percentage } };
};
