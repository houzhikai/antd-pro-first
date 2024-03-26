export const interfaceDataList = {
  msgID: 201,
  result: 0,
  msg: "",
  data: {
    deviceType: "M5000", //设备类型
    envCheck: 0, //枚举 0:无需环境确认    1:
    status: 2, //0:不允许校准诊断  1:未开始校准诊断  2:校准诊断中
    caliMode: 0, //校准诊断模式 0：DC  1：AC   2：DIAG 3:None
    boards: [
      //单板列表
      {
        key: "0",
        title: "Slot 1 - DRU288s", //页面描述,Slot ${slot}-${boardDesc}
        slot: 0, //槽位号
        boardDesc: "DRU288s", //单板描述
        serviceState: 0, //业务状态  0：空闲 1：测试中 2：升级中 3：校准中 4：诊断中
        disabled: true, //是否禁用(禁用checkbox，还需要可以展开)（如果为真则其子状态也为真）
        children: [
          //子节点
          {
            key: "0-AC-0",
            title: "Linearity Cal (${fileDesc})", //测试大类描述
            type: 1, //校准诊断分类 0：DC  1：AC   2：DIAG
            status: 4, //测试大类状态  0：未开始 1：进行中  2：完成 3：异常 4：检测环境
            disabled: false, //是否禁用
            fileExist: true, //是否存在历史文件
            fileDesc: "2024-03-19", //文件描述
            children: [
              {
                key: "0-AC-0-0",
                title: "Check", //测试小类描述
                status: 0, //测试小类状态  0：未开始 1：进行中  2：完成 3：异常
                disabled: false, //是否禁用
                select: true, //是否选中
              },
              {
                key: "0-AC-0-1",
                title: "Calibrate",
                status: 1,
                disabled: true,
                select: true,
              },
              {
                key: "0-AC-0-2",
                title: "Verify",
                status: 2,
                disabled: false,
                select: true,
              },
              {
                key: "0-AC-0-3",
                title: "Save",
                status: 3,
                disabled: false,
                select: true,
              },
            ],
          },
          {
            key: "0-AC-1",
            title: "TG Sync (${fileDesc})",
            type: 1,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "0-AC-1-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "0-AC-1-1",
                title: "Calibrate",
                status: 0,
                disabled: true,
                select: true,
              },
              {
                key: "0-AC-1-2",
                title: "Verify",
                status: 1,
                disabled: true,
                select: true,
              },
              {
                key: "0-AC-1-3",
                title: "Save",
                status: 1,
                disabled: true,
                select: true,
              },
            ],
          },
          {
            key: "0-AC-2",
            title: "TX Cal (${fileDesc})",
            type: 1,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "0-AC-2-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "0-AC-2-1",
                title: "Calibrate",
                status: 0,
                disabled: true,
                select: true,
              },
              {
                key: "0-AC-2-2",
                title: "Verify",
                status: 1,
                disabled: true,
                select: true,
              },
              {
                key: "0-AC-2-3",
                title: "Save",
                status: 1,
                disabled: true,
                select: true,
              },
            ],
          },
          {
            key: "0-AC-3",
            title: "RX Cal (${fileDesc})",
            type: 1,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "0-AC-3-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "0-AC-3-1",
                title: "Calibrate",
                status: 0,
                disabled: true,
                select: true,
              },
              {
                key: "0-AC-3-2",
                title: "Verify",
                status: 1,
                disabled: true,
                select: true,
              },
              {
                key: "0-AC-3-3",
                title: "Save",
                status: 1,
                disabled: true,
                select: true,
              },
            ],
          },
          {
            key: "0-AC-4",
            title: "Cable Cal (${fileDesc})",
            type: 1,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "0-AC-4-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "0-AC-4-1",
                title: "Calibrate",
                status: 0,
                disabled: true,
                select: true,
              },
              {
                key: "0-AC-4-2",
                title: "Verify",
                status: 1,
                disabled: true,
                select: true,
              },
              {
                key: "0-AC-4-3",
                title: "Save",
                status: 1,
                disabled: true,
                select: true,
              },
            ],
          },
          {
            key: "0-AC-5",
            title: "TDR (${fileDesc})",
            type: 1,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "0-AC-5-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "0-AC-5-1",
                title: "Calibrate",
                status: 0,
                disabled: true,
                select: true,
              },
              {
                key: "0-AC-5-2",
                title: "Verify",
                status: 1,
                disabled: true,
                select: true,
              },
              {
                key: "0-AC-5-3",
                title: "Save",
                status: 1,
                disabled: true,
                select: true,
              },
            ],
          },
          {
            key: "0-DC-0",
            title: "ADC Cal (${fileDesc})",
            type: 0,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "0-DC-0-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "0-DC-0-1",
                title: "Calibrate",
                status: 0,
                disabled: true,
                select: true,
              },
              {
                key: "0-DC-0-2",
                title: "Verify",
                status: 1,
                disabled: true,
                select: true,
              },
              {
                key: "0-DC-0-3",
                title: "Save",
                status: 1,
                disabled: true,
                select: true,
              },
            ],
          },
          {
            key: "0-DC-1",
            title: "DC Cal (${fileDesc})",
            type: 0,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "0-DC-1-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "0-DC-1-1",
                title: "Calibrate",
                status: 0,
                disabled: true,
                select: true,
              },
              {
                key: "0-DC-1-2",
                title: "Verify",
                status: 1,
                disabled: true,
                select: true,
              },
              {
                key: "0-DC-1-3",
                title: "Save",
                status: 1,
                disabled: true,
                select: true,
              },
            ],
          },
          {
            key: "0-DC-2",
            title: "High-CurrentCal (${fileDesc})",
            type: 0,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "0-DC-2-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "0-DC-2-1",
                title: "Calibrate",
                status: 0,
                disabled: true,
                select: true,
              },
              {
                key: "0-DC-2-2",
                title: "Verify",
                status: 1,
                disabled: true,
                select: true,
              },
              {
                key: "0-DC-2-3",
                title: "Save",
                status: 1,
                disabled: true,
                select: true,
              },
            ],
          },
          {
            key: "0-Diag-0",
            title: "OPEN (${fileDesc})",
            type: 2,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "0-Diag-0-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "0-Diag-0-1",
                title: "Handle",
                status: 0,
                disabled: true,
                select: true,
              },
            ],
          },
          {
            key: "0-Diag-1",
            title: "SHOLT (${fileDesc})",
            type: 2,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "0-Diag-1-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "0-Diag-1-1",
                title: "Handle",
                status: 0,
                disabled: true,
                select: true,
              },
            ],
          },
        ],
      },
      {
        key: "1",
        title: "Slot 2 - DRU288s", //页面描述,Slot ${slot}-${boardDesc}
        slot: 0, //槽位号
        boardDesc: "DRU288s", //单板描述
        serviceState: 0, //业务状态  0：空闲 1：测试中 2：升级中 3：校准中 4：诊断中
        disabled: true, //是否禁用(禁用checkbox，还需要可以展开)（如果为真则其子状态也为真）
        children: [
          //子节点
          {
            key: "1-AC-0",
            title: "Linearity Cal (${fileDesc})", //测试大类描述
            type: 1, //校准诊断分类 0：DC  1：AC   2：DIAG
            status: 4, //测试大类状态  0：未开始 1：进行中  2：完成 3：异常 4：检测环境
            disabled: false, //是否禁用
            fileExist: true, //是否存在历史文件
            fileDesc: "2024-03-19", //文件描述
            children: [
              {
                key: "1-AC-0-0",
                title: "Check", //测试小类描述
                status: 0, //测试小类状态  0：未开始 1：进行中  2：完成 3：异常
                disabled: false, //是否禁用
                select: true, //是否选中
              },
              {
                key: "1-AC-0-1",
                title: "Calibrate",
                status: 1,
                disabled: true,
                select: true,
              },
              {
                key: "1-AC-0-2",
                title: "Verify",
                status: 2,
                disabled: false,
                select: true,
              },
              {
                key: "1-AC-0-3",
                title: "Save",
                status: 3,
                disabled: false,
                select: true,
              },
            ],
          },
          {
            key: "1-AC-1",
            title: "TG Sync (${fileDesc})",
            type: 1,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "1-AC-1-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "1-AC-1-1",
                title: "Calibrate",
                status: 0,
                disabled: true,
                select: true,
              },
              {
                key: "1-AC-1-2",
                title: "Verify",
                status: 1,
                disabled: true,
                select: true,
              },
              {
                key: "1-AC-1-3",
                title: "Save",
                status: 1,
                disabled: true,
                select: true,
              },
            ],
          },
          {
            key: "1-AC-2",
            title: "TX Cal (${fileDesc})",
            type: 1,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "1-AC-2-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "1-AC-2-1",
                title: "Calibrate",
                status: 0,
                disabled: true,
                select: true,
              },
              {
                key: "1-AC-2-2",
                title: "Verify",
                status: 1,
                disabled: true,
                select: true,
              },
              {
                key: "1-AC-2-3",
                title: "Save",
                status: 1,
                disabled: true,
                select: true,
              },
            ],
          },
          {
            key: "1-AC-3",
            title: "RX Cal (${fileDesc})",
            type: 1,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "1-AC-3-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "1-AC-3-1",
                title: "Calibrate",
                status: 0,
                disabled: true,
                select: true,
              },
              {
                key: "1-AC-3-2",
                title: "Verify",
                status: 1,
                disabled: true,
                select: true,
              },
              {
                key: "1-AC-3-3",
                title: "Save",
                status: 1,
                disabled: true,
                select: true,
              },
            ],
          },
          {
            key: "1-AC-4",
            title: "Cable Cal (${fileDesc})",
            type: 1,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "1-AC-4-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "1-AC-4-1",
                title: "Calibrate",
                status: 0,
                disabled: true,
                select: true,
              },
              {
                key: "1-AC-4-2",
                title: "Verify",
                status: 1,
                disabled: true,
                select: true,
              },
              {
                key: "1-AC-4-3",
                title: "Save",
                status: 1,
                disabled: true,
                select: true,
              },
            ],
          },
          {
            key: "1-AC-5",
            title: "TDR (${fileDesc})",
            type: 1,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "1-AC-5-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "1-AC-5-1",
                title: "Calibrate",
                status: 0,
                disabled: true,
                select: true,
              },
              {
                key: "1-AC-5-2",
                title: "Verify",
                status: 1,
                disabled: true,
                select: true,
              },
              {
                key: "1-AC-5-3",
                title: "Save",
                status: 1,
                disabled: true,
                select: true,
              },
            ],
          },
          {
            key: "1-DC-0",
            title: "ADC Cal (${fileDesc})",
            type: 0,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "1-DC-0-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "1-DC-0-1",
                title: "Calibrate",
                status: 0,
                disabled: true,
                select: true,
              },
              {
                key: "1-DC-0-2",
                title: "Verify",
                status: 1,
                disabled: true,
                select: true,
              },
              {
                key: "1-DC-0-3",
                title: "Save",
                status: 1,
                disabled: true,
                select: true,
              },
            ],
          },
          {
            key: "1-DC-1",
            title: "DC Cal (${fileDesc})",
            type: 0,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "1-DC-1-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "1-DC-1-1",
                title: "Calibrate",
                status: 0,
                disabled: true,
                select: true,
              },
              {
                key: "1-DC-1-2",
                title: "Verify",
                status: 1,
                disabled: true,
                select: true,
              },
              {
                key: "1-DC-1-3",
                title: "Save",
                status: 1,
                disabled: true,
                select: true,
              },
            ],
          },
          {
            key: "1-DC-2",
            title: "High-CurrentCal (${fileDesc})",
            type: 0,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "1-DC-2-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "1-DC-2-1",
                title: "Calibrate",
                status: 0,
                disabled: true,
                select: true,
              },
              {
                key: "1-DC-2-2",
                title: "Verify",
                status: 1,
                disabled: true,
                select: true,
              },
              {
                key: "1-DC-2-3",
                title: "Save",
                status: 1,
                disabled: true,
                select: true,
              },
            ],
          },
          {
            key: "1-Diag-0",
            title: "OPEN (${fileDesc})",
            type: 2,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "1-Diag-0-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "1-Diag-0-1",
                title: "Handle",
                status: 0,
                disabled: true,
                select: true,
              },
            ],
          },
          {
            key: "1-Diag-1",
            title: "OPEN (${fileDesc})",
            type: 2,
            status: 0,
            disabled: false,
            fileExist: true,
            fileDesc: "2024-03-19",
            children: [
              {
                key: "1-Diag-1-0",
                title: "Check",
                status: 2,
                disabled: true,
                select: true,
              },
              {
                key: "1-Diag-1-1",
                title: "Handle",
                status: 0,
                disabled: true,
                select: true,
              },
            ],
          },
        ],
      },
    ],
  },
};
