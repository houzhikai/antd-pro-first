import React, { useEffect, useState } from 'react';

const ReduxIndex = () => {
  let mockData = {
    deviceInfo: {
      title: 'DEVICE INFO',
      data: [
        {
          label: 'LotID:',
          children: 'mock-1282',
        },
        {
          label: 'WaferID:',
          children: 2,
        },
        {
          label: 'FlowID:',
          children: '',
        },
        {
          label: 'ProductID:',
          children: '',
        },
        {
          label: 'TestProgram:',
          children: '',
        },
        {
          label: 'TesterID:',
          children: '',
        },
        {
          label: 'OperatorID:',
          children: '',
        },
        {
          label: 'StartTime:',
          children: '2024_01_02_19_39_35',
        },
        {
          label: 'EndTime:',
          children: '2024_01_02_19_40_59',
        },
        {
          label: 'NotchSide:',
          children: '',
        },
        {
          label: 'SortID:',
          children: '',
        },
        {
          label: 'GridXmax:',
          children: '',
        },
        {
          label: 'GridYmax:',
          children: '',
        },
        {
          label: 'FabSite:',
          children: '',
        },
        {
          label: 'TestSite:',
          children: '',
        },
        {
          label: 'ProbeCardID:',
          children: '',
        },
        {
          label: 'LoadBoardID:',
          children: '',
        },
        {
          label: 'CustomerID:',
          children: '',
        },
        {
          label: 'CustomerPartID:',
          children: '',
        },
      ],
    },
    summary: {
      title: 'SUMMARY',
      total: {
        columns: [
          {
            title: 'TotalCnt',
            dataIndex: 'TotalCnt',
          },
          {
            title: 'PassCnt',
            dataIndex: 'PassCnt',
          },
          {
            title: 'FailCnt',
            dataIndex: 'FailCnt',
          },
          {
            title: 'Yield',
            dataIndex: 'Yield',
          },
        ],
        data: [
          {
            TotalCnt: 298,
            PassCnt: 168,
            FailCnt: 130,
            Yield: '56.38%',
          },
        ],
      },
      softBinList: {
        columns: [
          {
            title: 'SoftBinID',
            dataIndex: 'SoftBinID',
          },
          {
            title: 'BinName',
            dataIndex: 'BinName',
          },
          {
            title: 'Count',
            dataIndex: 'Count',
          },
          {
            title: 'Yield',
            dataIndex: 'Yield',
          },
          {
            title: 'Color',
            dataIndex: 'Color',
          },
        ],
        data: [
          {
            SoftBinID: 2001,
            BinName: 'FB1',
            Count: 130,
            Yield: '43.62%',
            //   Color: '#008000',
          },
          {
            SoftBinID: 1002,
            BinName: 'PB2',
            Count: 0,
            Yield: '0.00%',
            //   Color: '#fd0003',
          },
          {
            SoftBinID: 2002,
            BinName: 'FB2',
            Count: 0,
            Yield: '0.00%',
            //   Color: '#f60',
          },
          {
            SoftBinID: 1001,
            BinName: 'PB1',
            Count: 168,
            Yield: '56.38%',
            //   Color: '#3f6063',
          },
        ],
      },
    },
    echartsDataList: [
      // 地址 2/8 touchDown 2 和 3
      [2, 8, 12, 0, 2, 1001],
      [2, 8, 13, 0, 3, 1001],
      [2, 9, 1, 1, 2, 1001],
      [2, 10, 1, 2, 2, 1001],
      [2, 11, 1, 3, 2, 1001],
      [2, 12, 2, 4, 2, 2001],
      [2, 13, 2, 5, 2, 2001],
      [2, 14, 2, 6, 2, 2001],
      [2, 15, 2, 7, 2, 2001],
      [4, 8, 1, 0, 3, 1001],
      [4, 9, 1, 1, 3, 1001],
      [4, 10, 1, 2, 3, 1001],
      [4, 11, 1, 3, 3, 1001],
      [4, 12, 2, 4, 3, 2001],
    ],
  };
  const array1 = [
    [4, 13, 2, 5, 3, 2001],
    [4, 14, 2, 6, 3, 2001],
    [4, 15, 2, 7, 3, 2001],
    [6, 8, 1, 0, 4, 1001],
    [6, 9, 1, 1, 4, 1001],
    [6, 10, 1, 2, 4, 1001],
    [6, 11, 1, 3, 4, 1001],
    [6, 12, 2, 4, 4, 2001],
    [6, 13, 2, 5, 4, 2001],
    [6, 14, 2, 6, 4, 2001],
    [6, 15, 2, 7, 4, 2001],
    [8, 8, 1, 0, 5, 1001],
    [8, 9, 1, 1, 5, 1001],
    [8, 10, 1, 2, 5, 1001],
    [8, 11, 1, 3, 5, 1001],
    [8, 12, 2, 4, 5, 2001],
    [8, 13, 2, 5, 5, 2001],
    [8, 14, 2, 6, 5, 2001],
    [8, 15, 2, 7, 5, 2001],
    [10, 8, 1, 0, 6, 1001],
    [10, 9, 1, 1, 6, 1001],
    [10, 10, 1, 2, 6, 1001],
    [10, 11, 1, 3, 6, 1001],
    [10, 12, 2, 4, 6, 2001],
    [10, 13, 2, 5, 6, 2001],
    [10, 14, 2, 6, 6, 2001],
    [10, 15, 2, 7, 6, 2001],
    [12, 8, 1, 0, 7, 1001],
    [12, 9, 1, 1, 7, 1001],
    [12, 10, 1, 2, 7, 1001],
    [12, 11, 1, 3, 7, 1001],
    [12, 12, 2, 4, 7, 2001],
    [12, 13, 2, 5, 7, 2001],
    [12, 14, 2, 6, 7, 2001],
    [12, 15, 2, 7, 7, 2001],
    [14, 8, 1, 0, 8, 1001],
    [14, 9, 1, 1, 8, 1001],
    [14, 10, 1, 2, 8, 1001],
    [14, 11, 1, 3, 8, 1001],
    [14, 12, 2, 4, 8, 2001],
    [14, 13, 2, 5, 8, 2001],
    [14, 14, 2, 6, 8, 2001],
    [14, 15, 2, 7, 8, 2001],
    [16, 8, 1, 0, 9, 1001],
    [16, 9, 1, 1, 9, 1001],
    [16, 10, 1, 2, 9, 1001],
    [16, 11, 1, 3, 9, 1001],
    [16, 12, 2, 4, 9, 2001],
    [16, 13, 2, 5, 9, 2001],
    [16, 14, 2, 6, 9, 2001],
    [16, 15, 2, 7, 9, 2001],
    [18, 8, 1, 0, 10, 1001],
    [18, 9, 1, 1, 10, 1001],
    [18, 10, 1, 2, 10, 1001],
    [18, 11, 1, 3, 10, 1001],
    [18, 12, 2, 4, 10, 2001],
    [18, 13, 2, 5, 10, 2001],
    [18, 14, 2, 6, 10, 2001],
    [18, 15, 2, 7, 10, 2001],
    [20, 8, 1, 0, 11, 1001],
    [20, 9, 1, 1, 11, 1001],
    [20, 10, 1, 2, 11, 1001],
    [20, 11, 1, 3, 11, 1001],
    [20, 12, 2, 4, 11, 2001],
    [20, 13, 2, 5, 11, 2001],
    [20, 14, 2, 6, 11, 2001],
    [20, 15, 2, 7, 11, 2001],
    [22, 8, 1, 0, 12, 1001],
    [22, 9, 1, 1, 12, 1001],
    [22, 10, 1, 2, 12, 1001],
    [22, 11, 1, 3, 12, 1001],
    [22, 12, 2, 4, 12, 2001],
    [22, 13, 2, 5, 12, 2001],
    [22, 14, 2, 6, 12, 2001],
    [22, 15, 2, 7, 12, 2001],
    [2, 16, 1, 0, 14, 1001],
    [2, 17, 1, 1, 14, 1001],
    [2, 18, 1, 2, 14, 1001],
    [4, 16, 1, 0, 15, 1001],
    [4, 17, 1, 1, 15, 1001],
    [4, 18, 1, 2, 15, 1001],
    [4, 19, 1, 3, 15, 1001],
    [4, 20, 2, 4, 15, 2001],
    [6, 16, 1, 0, 16, 1001],
  ];
  const array2 = [
    [6, 17, 1, 1, 16, 1001],
    [6, 18, 1, 2, 16, 1001],
    [6, 19, 1, 3, 16, 1001],
    [6, 20, 2, 4, 16, 2001],
    [6, 21, 2, 5, 16, 2001],
    [6, 22, 2, 6, 16, 2001],
    [8, 16, 1, 0, 17, 1001],
    [8, 17, 1, 1, 17, 1001],
    [8, 18, 1, 2, 17, 1001],
    [8, 19, 1, 3, 17, 1001],
    [8, 20, 2, 4, 17, 2001],
    [8, 21, 2, 5, 17, 2001],
    [8, 22, 2, 6, 17, 2001],
    [10, 16, 1, 0, 18, 1001],
    [10, 17, 1, 1, 18, 1001],
    [10, 18, 1, 2, 18, 1001],
    [10, 19, 1, 3, 18, 1001],
    [10, 20, 2, 4, 18, 2001],
    [10, 21, 2, 5, 18, 2001],
    [10, 22, 2, 6, 18, 2001],
    [12, 16, 1, 0, 19, 1001],
    [12, 17, 1, 1, 19, 1001],
    [12, 18, 1, 2, 19, 1001],
    [12, 19, 1, 3, 19, 1001],
    [12, 20, 2, 4, 19, 2001],
    [12, 21, 2, 5, 19, 2001],
    [12, 22, 2, 6, 19, 2001],
    [14, 16, 1, 0, 20, 1001],
    [14, 17, 1, 1, 20, 1001],
    [14, 18, 1, 2, 20, 1001],
    [14, 19, 1, 3, 20, 1001],
    [14, 20, 2, 4, 20, 2001],
    [14, 21, 2, 5, 20, 2001],
    [14, 22, 2, 6, 20, 2001],
    [16, 16, 1, 0, 21, 1001],
    [16, 17, 1, 1, 21, 1001],
    [16, 18, 1, 2, 21, 1001],
    [16, 19, 1, 3, 21, 1001],
    [16, 20, 2, 4, 21, 2001],
    [16, 21, 2, 5, 21, 2001],
    [16, 22, 2, 6, 21, 2001],
    [18, 16, 1, 0, 22, 1001],
    [18, 17, 1, 1, 22, 1001],
    [18, 18, 1, 2, 22, 1001],
    [18, 19, 1, 3, 22, 1001],
    [18, 20, 2, 4, 22, 2001],
    [18, 21, 2, 5, 22, 2001],
    [20, 16, 1, 0, 23, 1001],
    [20, 17, 1, 1, 23, 1001],
    [20, 18, 1, 2, 23, 1001],
    [20, 19, 1, 3, 23, 1001],
    [22, 16, 1, 0, 24, 1001],
    [1, 8, 1, 8, 1, 1001],
    [1, 9, 1, 9, 1, 1001],
    [1, 10, 1, 10, 1, 1001],
    [1, 11, 1, 11, 1, 1001],
    [1, 12, 2, 12, 1, 2001],
    [1, 13, 2, 13, 1, 2001],
    [1, 14, 2, 14, 1, 2001],
    [1, 15, 2, 15, 1, 2001],
    [3, 8, 1, 8, 2, 1001],
    [3, 9, 1, 9, 2, 1001],
    [3, 10, 1, 10, 2, 1001],
    [3, 11, 1, 11, 2, 1001],
    [3, 12, 2, 12, 2, 2001],
    [3, 13, 2, 13, 2, 2001],
    [3, 14, 2, 14, 2, 2001],
    [3, 15, 2, 15, 2, 2001],
    [5, 8, 1, 8, 3, 1001],
    [5, 9, 1, 9, 3, 1001],
    [5, 10, 1, 10, 3, 1001],
    [5, 11, 1, 11, 3, 1001],
    [5, 12, 2, 12, 3, 2001],
    [5, 13, 2, 13, 3, 2001],
    [5, 14, 2, 14, 3, 2001],
    [5, 15, 2, 15, 3, 2001],
    [7, 8, 1, 8, 4, 1001],
    [7, 9, 1, 9, 4, 1001],
    [7, 10, 1, 10, 4, 1001],
    [7, 11, 1, 11, 4, 1001],
    [7, 12, 2, 12, 4, 2001],
    [7, 13, 2, 13, 4, 2001],
    [7, 14, 2, 14, 4, 2001],
    [7, 15, 2, 15, 4, 2001],
    [9, 8, 1, 8, 5, 1001],
    [9, 9, 1, 9, 5, 1001],
    [9, 10, 1, 10, 5, 1001],
    [9, 11, 1, 11, 5, 1001],
    [9, 12, 2, 12, 5, 2001],
    [9, 13, 2, 13, 5, 2001],
    [9, 14, 2, 14, 5, 2001],
    [9, 15, 2, 15, 5, 2001],
    [11, 8, 1, 8, 6, 1001],
    [11, 9, 1, 9, 6, 1001],
    [11, 10, 1, 10, 6, 1001],
    [11, 11, 1, 11, 6, 1001],
    [11, 12, 2, 12, 6, 2001],
    [11, 13, 2, 13, 6, 2001],
    [11, 14, 2, 14, 6, 2001],
    [11, 15, 2, 15, 6, 2001],
  ];
  const array3 = [
    [13, 8, 1, 8, 7, 1001],
    [13, 9, 1, 9, 7, 1001],
    [13, 10, 1, 10, 7, 1001],
    [13, 11, 1, 11, 7, 1001],
    [13, 12, 2, 12, 7, 2001],
    [13, 13, 2, 13, 7, 2001],
    [13, 14, 2, 14, 7, 2001],
    [13, 15, 2, 15, 7, 2001],
    [15, 8, 1, 8, 8, 1001],
    [15, 9, 1, 9, 8, 1001],
    [15, 10, 1, 10, 8, 1001],
    [15, 11, 1, 11, 8, 1001],
    [15, 12, 2, 12, 8, 2001],
    [15, 13, 2, 13, 8, 2001],
    [15, 14, 2, 14, 8, 2001],
    [15, 15, 2, 15, 8, 2001],
    [17, 8, 1, 8, 9, 1001],
    [17, 9, 1, 9, 9, 1001],
    [17, 10, 1, 10, 9, 1001],
    [17, 11, 1, 11, 9, 1001],
    [17, 12, 2, 12, 9, 2001],
    [17, 13, 2, 13, 9, 2001],
    [17, 14, 2, 14, 9, 2001],
    [17, 15, 2, 15, 9, 2001],
    [19, 8, 1, 8, 10, 1001],
    [19, 9, 1, 9, 10, 1001],
    [19, 10, 1, 10, 10, 1001],
    [19, 11, 1, 11, 10, 1001],
    [19, 12, 2, 12, 10, 2001],
    [19, 13, 2, 13, 10, 2001],
    [19, 14, 2, 14, 10, 2001],
    [19, 15, 2, 15, 10, 2001],
    [21, 8, 1, 8, 11, 1001],
    [21, 9, 1, 9, 11, 1001],
    [21, 10, 1, 10, 11, 1001],
    [21, 11, 1, 11, 11, 1001],
    [21, 12, 2, 12, 11, 2001],
    [21, 13, 2, 13, 11, 2001],
    [21, 14, 2, 14, 11, 2001],
    [21, 15, 2, 15, 11, 2001],
    [1, 16, 1, 8, 13, 1001],
    [3, 16, 1, 8, 14, 1001],
    [3, 17, 1, 9, 14, 1001],
    [3, 18, 1, 10, 14, 1001],
    [3, 19, 1, 11, 14, 1001],
    [5, 16, 1, 8, 15, 1001],
    [5, 17, 1, 9, 15, 1001],
    [5, 18, 1, 10, 15, 1001],
    [5, 19, 1, 11, 15, 1001],
    [5, 20, 2, 12, 15, 2001],
    [5, 21, 2, 13, 15, 2001],
    [7, 16, 1, 8, 16, 1001],
    [7, 17, 1, 9, 16, 1001],
    [7, 18, 1, 10, 16, 1001],
    [7, 19, 1, 11, 16, 1001],
    [7, 20, 2, 12, 16, 2001],
    [7, 21, 2, 13, 16, 2001],
    [7, 22, 2, 14, 16, 2001],
    [9, 16, 1, 8, 17, 1001],
    [9, 17, 1, 9, 17, 1001],
    [9, 18, 1, 10, 17, 1001],
    [9, 19, 1, 11, 17, 1001],
    [9, 20, 2, 12, 17, 2001],
    [9, 21, 2, 13, 17, 2001],
    [9, 22, 2, 14, 17, 2001],
    [11, 16, 1, 8, 18, 1001],
    [11, 17, 1, 9, 18, 1001],
    [11, 18, 1, 10, 18, 1001],
    [11, 19, 1, 11, 18, 1001],
    [11, 20, 2, 12, 18, 2001],
    [11, 21, 2, 13, 18, 2001],
    [11, 22, 2, 14, 18, 2001],
    [13, 16, 1, 8, 19, 1001],
    [13, 17, 1, 9, 19, 1001],
    [13, 18, 1, 10, 19, 1001],
    [13, 19, 1, 11, 19, 1001],
    [13, 20, 2, 12, 19, 2001],
    [13, 21, 2, 13, 19, 2001],
    [13, 22, 2, 14, 19, 2001],
    [15, 16, 1, 8, 20, 1001],
    [15, 17, 1, 9, 20, 1001],
    [15, 18, 1, 10, 20, 1001],
    [15, 19, 1, 11, 20, 1001],
    [15, 20, 2, 12, 20, 2001],
    [15, 21, 2, 13, 20, 2001],
    [15, 22, 2, 14, 20, 2001],
    [17, 16, 1, 8, 21, 1001],
    [17, 17, 1, 9, 21, 1001],
    [17, 18, 1, 10, 21, 1001],
    [17, 19, 1, 11, 21, 1001],
    [17, 20, 2, 12, 21, 2001],
    [17, 21, 2, 13, 21, 2001],
    [17, 22, 2, 14, 21, 2001],
    [19, 16, 1, 8, 22, 1001],
    [19, 17, 1, 9, 22, 1001],
    [19, 18, 1, 10, 22, 1001],
    [19, 19, 1, 11, 22, 1001],
    [19, 20, 2, 12, 22, 2001],
    [21, 16, 1, 8, 23, 1001],
    [21, 17, 1, 9, 23, 1001],
    [21, 18, 1, 10, 23, 1001],
  ];
  // const mockData = {
  //   deviceInfo: {
  //     title: 'DEVICE INFO',
  //     data: [
  //       {
  //         label: 'LotID:',
  //         children: 'mock-1282',
  //       },
  //       {
  //         label: 'WaferID:',
  //         children: 2,
  //       },
  //       {
  //         label: 'FlowID:',
  //         children: '',
  //       },
  //       {
  //         label: 'ProductID:',
  //         children: '',
  //       },
  //       {
  //         label: 'TestProgram:',
  //         children: '',
  //       },
  //       {
  //         label: 'TesterID:',
  //         children: '',
  //       },
  //       {
  //         label: 'OperatorID:',
  //         children: '',
  //       },
  //       {
  //         label: 'StartTime:',
  //         children: '2024_01_02_19_39_35',
  //       },
  //       {
  //         label: 'EndTime:',
  //         children: '2024_01_02_19_40_59',
  //       },
  //       {
  //         label: 'NotchSide:',
  //         children: '',
  //       },
  //       {
  //         label: 'SortID:',
  //         children: '',
  //       },
  //       {
  //         label: 'GridXmax:',
  //         children: '',
  //       },
  //       {
  //         label: 'GridYmax:',
  //         children: '',
  //       },
  //       {
  //         label: 'FabSite:',
  //         children: '',
  //       },
  //       {
  //         label: 'TestSite:',
  //         children: '',
  //       },
  //       {
  //         label: 'ProbeCardID:',
  //         children: '',
  //       },
  //       {
  //         label: 'LoadBoardID:',
  //         children: '',
  //       },
  //       {
  //         label: 'CustomerID:',
  //         children: '',
  //       },
  //       {
  //         label: 'CustomerPartID:',
  //         children: '',
  //       },
  //     ],
  //   },
  //   summary: {
  //     title: 'SUMMARY',
  //     total: {
  //       columns: [
  //         {
  //           title: 'TotalCnt',
  //           dataIndex: 'TotalCnt',
  //         },
  //         {
  //           title: 'PassCnt',
  //           dataIndex: 'PassCnt',
  //         },
  //         {
  //           title: 'FailCnt',
  //           dataIndex: 'FailCnt',
  //         },
  //         {
  //           title: 'Yield',
  //           dataIndex: 'Yield',
  //         },
  //       ],
  //       data: [
  //         {
  //           TotalCnt: 298,
  //           PassCnt: 168,
  //           FailCnt: 130,
  //           Yield: '56.38%',
  //         },
  //       ],
  //     },
  //     softBinList: {
  //       columns: [
  //         {
  //           title: 'SoftBinID',
  //           dataIndex: 'SoftBinID',
  //         },
  //         {
  //           title: 'BinName',
  //           dataIndex: 'BinName',
  //         },
  //         {
  //           title: 'Count',
  //           dataIndex: 'Count',
  //         },
  //         {
  //           title: 'Yield',
  //           dataIndex: 'Yield',
  //         },
  //         {
  //           title: 'Color',
  //           dataIndex: 'Color',
  //         },
  //       ],
  //       data: [
  //         {
  //           SoftBinID: 2001,
  //           BinName: 'FB1',
  //           Count: 130,
  //           Yield: '43.62%',
  //           //   Color: '#008000',
  //         },
  //         {
  //           SoftBinID: 1002,
  //           BinName: 'PB2',
  //           Count: 0,
  //           Yield: '0.00%',
  //           //   Color: '#fd0003',
  //         },
  //         {
  //           SoftBinID: 2002,
  //           BinName: 'FB2',
  //           Count: 0,
  //           Yield: '0.00%',
  //           //   Color: '#f60',
  //         },
  //         {
  //           SoftBinID: 1001,
  //           BinName: 'PB1',
  //           Count: 168,
  //           Yield: '56.38%',
  //           //   Color: '#3f6063',
  //         },
  //       ],
  //     },
  //   },
  //   echartsDataList: [
  //     // 地址 2/8 touchDown 2 和 3
  //     [2, 8, 12, 0, 2, 1001],
  //     [2, 8, 13, 0, 3, 1001],
  //     [2, 9, 1, 1, 2, 1001],
  //     [2, 10, 1, 2, 2, 1001],
  //     [2, 11, 1, 3, 2, 1001],
  //     [2, 12, 2, 4, 2, 2001],
  //     [2, 13, 2, 5, 2, 2001],
  //     [2, 14, 2, 6, 2, 2001],
  //     [2, 15, 2, 7, 2, 2001],
  //     [4, 8, 1, 0, 3, 1001],
  //     [4, 9, 1, 1, 3, 1001],
  //     [4, 10, 1, 2, 3, 1001],
  //     [4, 11, 1, 3, 3, 1001],
  //     [4, 12, 2, 4, 3, 2001],
  //     [4, 13, 2, 5, 3, 2001],
  //     [4, 14, 2, 6, 3, 2001],
  //     [4, 15, 2, 7, 3, 2001],
  //     [6, 8, 1, 0, 4, 1001],
  //     [6, 9, 1, 1, 4, 1001],
  //     [6, 10, 1, 2, 4, 1001],
  //     [6, 11, 1, 3, 4, 1001],
  //     [6, 12, 2, 4, 4, 2001],
  //     [6, 13, 2, 5, 4, 2001],
  //     [6, 14, 2, 6, 4, 2001],
  //     [6, 15, 2, 7, 4, 2001],
  //     [8, 8, 1, 0, 5, 1001],
  //     [8, 9, 1, 1, 5, 1001],
  //     [8, 10, 1, 2, 5, 1001],
  //     [8, 11, 1, 3, 5, 1001],
  //     [8, 12, 2, 4, 5, 2001],
  //     [8, 13, 2, 5, 5, 2001],
  //     [8, 14, 2, 6, 5, 2001],
  //     [8, 15, 2, 7, 5, 2001],
  //     [10, 8, 1, 0, 6, 1001],
  //     [10, 9, 1, 1, 6, 1001],
  //     [10, 10, 1, 2, 6, 1001],
  //     [10, 11, 1, 3, 6, 1001],
  //     [10, 12, 2, 4, 6, 2001],
  //     [10, 13, 2, 5, 6, 2001],
  //     [10, 14, 2, 6, 6, 2001],
  //     [10, 15, 2, 7, 6, 2001],
  //     [12, 8, 1, 0, 7, 1001],
  //     [12, 9, 1, 1, 7, 1001],
  //     [12, 10, 1, 2, 7, 1001],
  //     [12, 11, 1, 3, 7, 1001],
  //     [12, 12, 2, 4, 7, 2001],
  //     [12, 13, 2, 5, 7, 2001],
  //     [12, 14, 2, 6, 7, 2001],
  //     [12, 15, 2, 7, 7, 2001],
  //     [14, 8, 1, 0, 8, 1001],
  //     [14, 9, 1, 1, 8, 1001],
  //     [14, 10, 1, 2, 8, 1001],
  //     [14, 11, 1, 3, 8, 1001],
  //     [14, 12, 2, 4, 8, 2001],
  //     [14, 13, 2, 5, 8, 2001],
  //     [14, 14, 2, 6, 8, 2001],
  //     [14, 15, 2, 7, 8, 2001],
  //     [16, 8, 1, 0, 9, 1001],
  //     [16, 9, 1, 1, 9, 1001],
  //     [16, 10, 1, 2, 9, 1001],
  //     [16, 11, 1, 3, 9, 1001],
  //     [16, 12, 2, 4, 9, 2001],
  //     [16, 13, 2, 5, 9, 2001],
  //     [16, 14, 2, 6, 9, 2001],
  //     [16, 15, 2, 7, 9, 2001],
  //     [18, 8, 1, 0, 10, 1001],
  //     [18, 9, 1, 1, 10, 1001],
  //     [18, 10, 1, 2, 10, 1001],
  //     [18, 11, 1, 3, 10, 1001],
  //     [18, 12, 2, 4, 10, 2001],
  //     [18, 13, 2, 5, 10, 2001],
  //     [18, 14, 2, 6, 10, 2001],
  //     [18, 15, 2, 7, 10, 2001],
  //     [20, 8, 1, 0, 11, 1001],
  //     [20, 9, 1, 1, 11, 1001],
  //     [20, 10, 1, 2, 11, 1001],
  //     [20, 11, 1, 3, 11, 1001],
  //     [20, 12, 2, 4, 11, 2001],
  //     [20, 13, 2, 5, 11, 2001],
  //     [20, 14, 2, 6, 11, 2001],
  //     [20, 15, 2, 7, 11, 2001],
  //     [22, 8, 1, 0, 12, 1001],
  //     [22, 9, 1, 1, 12, 1001],
  //     [22, 10, 1, 2, 12, 1001],
  //     [22, 11, 1, 3, 12, 1001],
  //     [22, 12, 2, 4, 12, 2001],
  //     [22, 13, 2, 5, 12, 2001],
  //     [22, 14, 2, 6, 12, 2001],
  //     [22, 15, 2, 7, 12, 2001],
  //     [2, 16, 1, 0, 14, 1001],
  //     [2, 17, 1, 1, 14, 1001],
  //     [2, 18, 1, 2, 14, 1001],
  //     [4, 16, 1, 0, 15, 1001],
  //     [4, 17, 1, 1, 15, 1001],
  //     [4, 18, 1, 2, 15, 1001],
  //     [4, 19, 1, 3, 15, 1001],
  //     [4, 20, 2, 4, 15, 2001],
  //     [6, 16, 1, 0, 16, 1001],
  //     [6, 17, 1, 1, 16, 1001],
  //     [6, 18, 1, 2, 16, 1001],
  //     [6, 19, 1, 3, 16, 1001],
  //     [6, 20, 2, 4, 16, 2001],
  //     [6, 21, 2, 5, 16, 2001],
  //     [6, 22, 2, 6, 16, 2001],
  //     [8, 16, 1, 0, 17, 1001],
  //     [8, 17, 1, 1, 17, 1001],
  //     [8, 18, 1, 2, 17, 1001],
  //     [8, 19, 1, 3, 17, 1001],
  //     [8, 20, 2, 4, 17, 2001],
  //     [8, 21, 2, 5, 17, 2001],
  //     [8, 22, 2, 6, 17, 2001],
  //     [10, 16, 1, 0, 18, 1001],
  //     [10, 17, 1, 1, 18, 1001],
  //     [10, 18, 1, 2, 18, 1001],
  //     [10, 19, 1, 3, 18, 1001],
  //     [10, 20, 2, 4, 18, 2001],
  //     [10, 21, 2, 5, 18, 2001],
  //     [10, 22, 2, 6, 18, 2001],
  //     [12, 16, 1, 0, 19, 1001],
  //     [12, 17, 1, 1, 19, 1001],
  //     [12, 18, 1, 2, 19, 1001],
  //     [12, 19, 1, 3, 19, 1001],
  //     [12, 20, 2, 4, 19, 2001],
  //     [12, 21, 2, 5, 19, 2001],
  //     [12, 22, 2, 6, 19, 2001],
  //     [14, 16, 1, 0, 20, 1001],
  //     [14, 17, 1, 1, 20, 1001],
  //     [14, 18, 1, 2, 20, 1001],
  //     [14, 19, 1, 3, 20, 1001],
  //     [14, 20, 2, 4, 20, 2001],
  //     [14, 21, 2, 5, 20, 2001],
  //     [14, 22, 2, 6, 20, 2001],
  //     [16, 16, 1, 0, 21, 1001],
  //     [16, 17, 1, 1, 21, 1001],
  //     [16, 18, 1, 2, 21, 1001],
  //     [16, 19, 1, 3, 21, 1001],
  //     [16, 20, 2, 4, 21, 2001],
  //     [16, 21, 2, 5, 21, 2001],
  //     [16, 22, 2, 6, 21, 2001],
  //     [18, 16, 1, 0, 22, 1001],
  //     [18, 17, 1, 1, 22, 1001],
  //     [18, 18, 1, 2, 22, 1001],
  //     [18, 19, 1, 3, 22, 1001],
  //     [18, 20, 2, 4, 22, 2001],
  //     [18, 21, 2, 5, 22, 2001],
  //     [20, 16, 1, 0, 23, 1001],
  //     [20, 17, 1, 1, 23, 1001],
  //     [20, 18, 1, 2, 23, 1001],
  //     [20, 19, 1, 3, 23, 1001],
  //     [22, 16, 1, 0, 24, 1001],
  //     [1, 8, 1, 8, 1, 1001],
  //     [1, 9, 1, 9, 1, 1001],
  //     [1, 10, 1, 10, 1, 1001],
  //     [1, 11, 1, 11, 1, 1001],
  //     [1, 12, 2, 12, 1, 2001],
  //     [1, 13, 2, 13, 1, 2001],
  //     [1, 14, 2, 14, 1, 2001],
  //     [1, 15, 2, 15, 1, 2001],
  //     [3, 8, 1, 8, 2, 1001],
  //     [3, 9, 1, 9, 2, 1001],
  //     [3, 10, 1, 10, 2, 1001],
  //     [3, 11, 1, 11, 2, 1001],
  //     [3, 12, 2, 12, 2, 2001],
  //     [3, 13, 2, 13, 2, 2001],
  //     [3, 14, 2, 14, 2, 2001],
  //     [3, 15, 2, 15, 2, 2001],
  //     [5, 8, 1, 8, 3, 1001],
  //     [5, 9, 1, 9, 3, 1001],
  //     [5, 10, 1, 10, 3, 1001],
  //     [5, 11, 1, 11, 3, 1001],
  //     [5, 12, 2, 12, 3, 2001],
  //     [5, 13, 2, 13, 3, 2001],
  //     [5, 14, 2, 14, 3, 2001],
  //     [5, 15, 2, 15, 3, 2001],
  //     [7, 8, 1, 8, 4, 1001],
  //     [7, 9, 1, 9, 4, 1001],
  //     [7, 10, 1, 10, 4, 1001],
  //     [7, 11, 1, 11, 4, 1001],
  //     [7, 12, 2, 12, 4, 2001],
  //     [7, 13, 2, 13, 4, 2001],
  //     [7, 14, 2, 14, 4, 2001],
  //     [7, 15, 2, 15, 4, 2001],
  //     [9, 8, 1, 8, 5, 1001],
  //     [9, 9, 1, 9, 5, 1001],
  //     [9, 10, 1, 10, 5, 1001],
  //     [9, 11, 1, 11, 5, 1001],
  //     [9, 12, 2, 12, 5, 2001],
  //     [9, 13, 2, 13, 5, 2001],
  //     [9, 14, 2, 14, 5, 2001],
  //     [9, 15, 2, 15, 5, 2001],
  //     [11, 8, 1, 8, 6, 1001],
  //     [11, 9, 1, 9, 6, 1001],
  //     [11, 10, 1, 10, 6, 1001],
  //     [11, 11, 1, 11, 6, 1001],
  //     [11, 12, 2, 12, 6, 2001],
  //     [11, 13, 2, 13, 6, 2001],
  //     [11, 14, 2, 14, 6, 2001],
  //     [11, 15, 2, 15, 6, 2001],
  //     [13, 8, 1, 8, 7, 1001],
  //     [13, 9, 1, 9, 7, 1001],
  //     [13, 10, 1, 10, 7, 1001],
  //     [13, 11, 1, 11, 7, 1001],
  //     [13, 12, 2, 12, 7, 2001],
  //     [13, 13, 2, 13, 7, 2001],
  //     [13, 14, 2, 14, 7, 2001],
  //     [13, 15, 2, 15, 7, 2001],
  //     [15, 8, 1, 8, 8, 1001],
  //     [15, 9, 1, 9, 8, 1001],
  //     [15, 10, 1, 10, 8, 1001],
  //     [15, 11, 1, 11, 8, 1001],
  //     [15, 12, 2, 12, 8, 2001],
  //     [15, 13, 2, 13, 8, 2001],
  //     [15, 14, 2, 14, 8, 2001],
  //     [15, 15, 2, 15, 8, 2001],
  //     [17, 8, 1, 8, 9, 1001],
  //     [17, 9, 1, 9, 9, 1001],
  //     [17, 10, 1, 10, 9, 1001],
  //     [17, 11, 1, 11, 9, 1001],
  //     [17, 12, 2, 12, 9, 2001],
  //     [17, 13, 2, 13, 9, 2001],
  //     [17, 14, 2, 14, 9, 2001],
  //     [17, 15, 2, 15, 9, 2001],
  //     [19, 8, 1, 8, 10, 1001],
  //     [19, 9, 1, 9, 10, 1001],
  //     [19, 10, 1, 10, 10, 1001],
  //     [19, 11, 1, 11, 10, 1001],
  //     [19, 12, 2, 12, 10, 2001],
  //     [19, 13, 2, 13, 10, 2001],
  //     [19, 14, 2, 14, 10, 2001],
  //     [19, 15, 2, 15, 10, 2001],
  //     [21, 8, 1, 8, 11, 1001],
  //     [21, 9, 1, 9, 11, 1001],
  //     [21, 10, 1, 10, 11, 1001],
  //     [21, 11, 1, 11, 11, 1001],
  //     [21, 12, 2, 12, 11, 2001],
  //     [21, 13, 2, 13, 11, 2001],
  //     [21, 14, 2, 14, 11, 2001],
  //     [21, 15, 2, 15, 11, 2001],
  //     [1, 16, 1, 8, 13, 1001],
  //     [3, 16, 1, 8, 14, 1001],
  //     [3, 17, 1, 9, 14, 1001],
  //     [3, 18, 1, 10, 14, 1001],
  //     [3, 19, 1, 11, 14, 1001],
  //     [5, 16, 1, 8, 15, 1001],
  //     [5, 17, 1, 9, 15, 1001],
  //     [5, 18, 1, 10, 15, 1001],
  //     [5, 19, 1, 11, 15, 1001],
  //     [5, 20, 2, 12, 15, 2001],
  //     [5, 21, 2, 13, 15, 2001],
  //     [7, 16, 1, 8, 16, 1001],
  //     [7, 17, 1, 9, 16, 1001],
  //     [7, 18, 1, 10, 16, 1001],
  //     [7, 19, 1, 11, 16, 1001],
  //     [7, 20, 2, 12, 16, 2001],
  //     [7, 21, 2, 13, 16, 2001],
  //     [7, 22, 2, 14, 16, 2001],
  //     [9, 16, 1, 8, 17, 1001],
  //     [9, 17, 1, 9, 17, 1001],
  //     [9, 18, 1, 10, 17, 1001],
  //     [9, 19, 1, 11, 17, 1001],
  //     [9, 20, 2, 12, 17, 2001],
  //     [9, 21, 2, 13, 17, 2001],
  //     [9, 22, 2, 14, 17, 2001],
  //     [11, 16, 1, 8, 18, 1001],
  //     [11, 17, 1, 9, 18, 1001],
  //     [11, 18, 1, 10, 18, 1001],
  //     [11, 19, 1, 11, 18, 1001],
  //     [11, 20, 2, 12, 18, 2001],
  //     [11, 21, 2, 13, 18, 2001],
  //     [11, 22, 2, 14, 18, 2001],
  //     [13, 16, 1, 8, 19, 1001],
  //     [13, 17, 1, 9, 19, 1001],
  //     [13, 18, 1, 10, 19, 1001],
  //     [13, 19, 1, 11, 19, 1001],
  //     [13, 20, 2, 12, 19, 2001],
  //     [13, 21, 2, 13, 19, 2001],
  //     [13, 22, 2, 14, 19, 2001],
  //     [15, 16, 1, 8, 20, 1001],
  //     [15, 17, 1, 9, 20, 1001],
  //     [15, 18, 1, 10, 20, 1001],
  //     [15, 19, 1, 11, 20, 1001],
  //     [15, 20, 2, 12, 20, 2001],
  //     [15, 21, 2, 13, 20, 2001],
  //     [15, 22, 2, 14, 20, 2001],
  //     [17, 16, 1, 8, 21, 1001],
  //     [17, 17, 1, 9, 21, 1001],
  //     [17, 18, 1, 10, 21, 1001],
  //     [17, 19, 1, 11, 21, 1001],
  //     [17, 20, 2, 12, 21, 2001],
  //     [17, 21, 2, 13, 21, 2001],
  //     [17, 22, 2, 14, 21, 2001],
  //     [19, 16, 1, 8, 22, 1001],
  //     [19, 17, 1, 9, 22, 1001],
  //     [19, 18, 1, 10, 22, 1001],
  //     [19, 19, 1, 11, 22, 1001],
  //     [19, 20, 2, 12, 22, 2001],
  //     [21, 16, 1, 8, 23, 1001],
  //     [21, 17, 1, 9, 23, 1001],
  //     [21, 18, 1, 10, 23, 1001],
  //   ],
  // };

  const [count, setCount] = useState(mockData);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      mockData.echartsDataList.concat(array1);
      console.log(11, { mockData });
      i++;
      if (i === 0) {
        setCount(mockData);
      } else if (i === 1) {
        setCount((obj) => {
          return {
            ...obj,
            echartsDataList: obj.echartsDataList.concat(array1),
          };
        });
      } else if (i === 2) {
        setCount((obj) => {
          return {
            ...obj,
            echartsDataList: obj.echartsDataList.concat(array2),
          };
        });
      } else if (i === 3) {
        setCount((obj) => {
          return {
            ...obj,
            echartsDataList: obj.echartsDataList.concat(array3),
          };
        });
        clearInterval(timer);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  console.log(count);
  return <div>111</div>;
};

export default ReduxIndex;
