export const columns: any = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 100,
    align: 'center',
  },
  {
    title: 'Code',
    dataIndex: 'code',
    width: 100,
    align: 'center',
  },
  {
    title: 'Color',
    dataIndex: 'color',
    width: 100,
    align: 'center',
    render: (text) => {
      return <div style={{ background: text, height: 30 }} />;
    },
  },
  {
    title: 'Count',
    dataIndex: 'count',
    width: 100,
    align: 'center',
  },
  {
    title: 'percent',
    dataIndex: 'percent',
    width: 100,
    align: 'center',
  },
];
