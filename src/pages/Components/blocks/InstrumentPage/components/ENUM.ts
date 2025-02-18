export enum StatusType {
  NormalLeisure = '0', // 在位正常空闲
  NormalBusy = '1', // 在位正常 升级中/校准中/诊断中/自检中
  AlarmlLeisure = '2', // 在位告警空闲
  AlarmlBusy = '3', // 在位告警 升级中/校准中/诊断中/自检中
  ErrorLeisure = '4', // 在位错误空闲
  ErrorBusy = '5', // 在位错误 升级中/校准中/诊断中/自检中
  NotPosition = '6', // 不在位
  OffPosition = '7', // 在位下线
  InPlacePowerOff = '8', // 在位下电
  Starting = '9', // 启动中
}
export enum UpdateType {
  NormalLeisure = '0', // 空闲
  Testing = '1', // 测试中
  Upgrading = '2', // 升级中
  Calibrationing = '3', // 校准中
  Diagnosising = '4', // 诊断中
  ErrorBusy = '5', // 自检中
}
