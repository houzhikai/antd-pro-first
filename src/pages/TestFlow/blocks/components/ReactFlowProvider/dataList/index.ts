interface HandleList {
  type: 'source' | 'target';
  className: string;
  position: string;
  id: string;
  style?: any;
}

export const initHandleList: HandleList[] = [
  {
    type: 'target',
    className: 'top',
    position: 'Top',
    id: 'a',
    style: { background: '#fff', border: '1px solid #1a192b' },
  },
  {
    type: 'source',
    className: 'bottom',
    position: 'Bottom',
    id: 'b',
  },
];
