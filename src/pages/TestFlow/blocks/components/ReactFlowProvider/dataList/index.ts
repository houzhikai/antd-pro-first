interface HandleList {
  type: 'source' | 'target';
  className: string;
  position: string;
  id: string;
  style?: any;
}

export const initHandleList: HandleList[] = [
  {
    type: 'source',
    className: 'top',
    position: 'Top',
    id: 'a',
  },
  {
    type: 'target',
    className: 'bottom',
    position: 'Bottom',
    id: 'c',
    style: { background: '#fff', border: '1px solid #1a192b' },
  },
];
