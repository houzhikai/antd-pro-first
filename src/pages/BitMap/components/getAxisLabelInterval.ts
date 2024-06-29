import { getRatioNumber } from './getRatioNumber';

export const getAxisLabelInterval = (scaleNumber) => {
  const percentage = getRatioNumber(scaleNumber) * 100;
  let value: any = {};
  switch (scaleNumber) {
    case 0.125:
      value = {
        axisTick: { xInterval: 0, yInterval: 0 }, //  设置刻度线每个都展示
        axisLabel: { xInterval: 0, yInterval: 0 }, // 设置标签每隔5个展示（注意这里是从0开始计数的，所以应该设置为4）
      };
      break;
    case 0.2:
      value = {
        axisTick: { xInterval: 15, yInterval: 15 },
        axisLabel: { xInterval: 15, yInterval: 1024 / 64 - 1 },
      };
      break;
    case 1:
      value = {
        axisTick: { xInterval: 63, yInterval: 1024 / 16 - 1 },
        axisLabel: { xInterval: 63, yInterval: 1024 / 16 - 1 },
      };
      break;
    case 4:
      value = {
        axisTick: { xInterval: 63, yInterval: 1024 / 8 - 1 },
        axisLabel: { xInterval: 63, yInterval: 1024 / 8 - 1 },
      };
      break;
    case 16:
      value = {
        axisTick: { xInterval: 31, yInterval: 1024 / 8 - 1 },
        axisLabel: { xInterval: 31, yInterval: 1024 / 8 - 1 },
      };
      break;
    case 64:
      value = {
        axisTick: { xInterval: 15, yInterval: 1024 / 16 - 1 },
        axisLabel: { xInterval: 15, yInterval: 1024 / 16 - 1 },
      };
      break;
    case 256:
      value = {
        axisTick: { xInterval: 7, yInterval: 1024 / 32 - 1 },
        axisLabel: { xInterval: 7, yInterval: 1024 / 32 - 1 },
      };
      break;
    default:
      value = {
        axisTick: { xInterval: 64, yInterval: 1024 / 16 - 1 },
        axisLabel: { xInterval: 64, yInterval: 1024 / 16 - 1 },
      };
  }
  return { ...value, end: { xEnd: percentage, yEnd: percentage } };
};
