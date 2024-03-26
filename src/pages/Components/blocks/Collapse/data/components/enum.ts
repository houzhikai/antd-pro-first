// 测试项的状态，枚举树形结构的状态
export enum TestUnitStatus {
  NOSTART = 0,
  PROCESS = 1,
  FINISH = 2,
  ERROR = 3,
  TESTENVIRONMENT = 4,
}
// 整体状态，控制 start、stop 的 disable
export enum WholeStatus {
  NOTALLOW = 0,
  NOTSTART = 1,
  DIAGING = 2,
}
// 校准诊断模式, 控制 AC、DC、DIAG 的radio 的禁用
export enum WholeCaliMode {
  DC = 0, // 只能选择 DC
  AC = 1, // 只能选择 AC
  DIAG = 2, // 只能选择 DIAG
  NONE = 3, // 都可以选
}
// 模式枚举，用来过滤树形结构里面的数据
export enum TestUnitType {
  DC = 0, // DC
  AC = 1, //  AC
  DIAG = 2, //  DIAG
}
