export enum StatusENUM {
  // 0 正常 | 1 正在升级 | 2 等待升级 | 3 升级完成 | 4 升级异常 | 5 在位下线 | 6 在位下电 | 7 启动中 | 8 繁忙 | - 其他
  Normal = 0,
  Upgrading = 1,
  WaitingUpgrade = 2,
  FinishUpgrade = 3,
  ExceptionUpgrade = 4,
  Offline = 5, //'在位下线'
  PowerOff = 6,
  Starting = 7,
  Busy = 8,
}
