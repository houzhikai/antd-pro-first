import queryParams from './components/queryParams';

export default (initialState: API.UserInfo) => {
  // 在这里按照初始化数据定义项目中的权限，统一管理
  // 参考文档 https://umijs.org/docs/max/access
  const canSeeAdmin = !!(
    initialState && initialState.name !== 'dontHaveAccess'
  );
  const isCanSeevirtualTable =
    queryParams().canSeevirtualTableAccess === 'true' ? false : true;
  // queryParams().canSeevirtualTableAccess === 'true';
  return {
    canSeeAdmin,
    canSeevirtualTable: isCanSeevirtualTable,
  };
};
