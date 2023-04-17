export const custom_dark_page = {
  colorBgAppListIconHover: '#bfa',
  colorTextAppListIconHover: '#bfa',
  colorTextAppListIcon: '#bfa',
  colorPrimary: '#bfa',
  // 侧边菜单的色值，与顶部菜单不同。
  sider: {
    colorMenuBackground: '#242525', //menu 的背景颜色
    colorTextMenuTitle: '#e5e0d8', //sider 的标题字体颜色
    colorMenuItemDivider: '#999', //menuItem 分割线的颜色
    colorTextMenu: '#c8c5be', //menuItem 的字体颜色
    colorTextMenuSecondary: '#e5dcb1', //menu 的二级字体颜色，
    colorTextMenuSelected: '#3990d0', //menuItem 的选中字体颜色
    colorTextMenuActive: '#346a92', //menuItem hover 的选中字体颜色
    colorTextMenuItemHover: '#409fe7', //menuItem 的 hover 字体颜色
    colorBgMenuItemHover: '#242525', //menuItem 的 hover 背景颜色
    colorBgMenuItemSelected: '#113545', //menuItem 的选中背景颜色
    colorBgMenuItemCollapsedHover: '#1c2f40', //收起 menuItem 的 hover 背景颜色
    colorBgMenuItemCollapsedSelected: '#1c2f40', //收起 menuItem 的选中背景颜色
    colorBgMenuItemCollapsedElevated: '#1c2f40', //收起 menuItem 的弹出菜单背景颜色
    colorBgCollapsedButton: '#1f1f1f', //展开收起按钮背景颜色
    colorTextCollapsedButton: '#b1b1b1', //展开收起按钮 hover 字体颜色
    colorTextCollapsedButtonHover: '#1c2f40', //展开收起按钮 hover 时字体颜色
  },
  header: {
    colorBgHeader: '#1a1a1a', //header 的背景颜色	rgba(240, 242, 245, 0.4)
    colorHeaderTitle: '#08111a', //sider 的标题字体颜色	colorTextHeading
    colorTextMenu: '#9f9f9f', //menuItem 的字体颜色	colorText
    colorTextMenuSecondary: '#9f9f9f', //menu 的二级字体颜色，比如 footer 和 action 的 icon	colorText
    colorTextMenuSelected: '#ffffff', //	menuItem 的选中字体颜色	rgb(0,0,0)
    colorTextMenuActive: '#cecece', //menuItem hover 的选中字体颜色	rgba(0, 0, 0, 0.85)
    colorBgMenuItemHover: '#1a1a1a', //menuItem 的 hover 背景颜色	rgba(90, 75, 75, 0.03)
    colorBgMenuItemSelected: '#1a1a1a', //menuItem 的选中背景颜色	rgba(0, 0, 0, 0.04)
    colorBgMenuItemCollapsedHover: '#1a1a1a', //收起 menuItem 的 hover 背景颜色	rgba(0, 145, 255, 0.1)
    colorBgMenuItemCollapsedSelected: '#1a1a1a', //收起 menuItem 的选中背景颜色	rgba(0, 145, 255, 0.08)
    colorTextRightActionsItem: '#08111a', //右上角字体颜色	colorTextSecondary
    colorBgRightActionsItemHover: '#08111a', //右上角选中的 hover 颜色	rgba(0, 0, 0, 0.03)
    heightLayoutHeader: 56, //header 高度 56
  },
  // 右边内容栏
  pageContainer: {
    paddingBlockPageContainerContent: 24, //pageContainer 自带的 padding block 默认 24
    paddingInlinePageContainerContent: '', //pageContainer 自带的 padding inline 默认 40
    colorBgPageContainer: '#242525', //pageContainer 的背景颜色 默认 透明
    colorBgPageContainerFixed: '#1c2f40', //pageContainer 被固定时的背景颜色 默认 #FFF
  },
};

export const custom_dark_component = {
  colorPrimaryText: '#fff',
  colorPrimary: '#f1212c', //主按钮
  borderRadius: 0, // 圆角
  colorBgBase: '#242525', // 背景颜色
  colorText: '#fff', // 文字颜色
  colorTextPlaceholder: '#4c4c4c', // 提示信息文字颜色 placeholder
  controlItemBgActiveDisabled: '#3c9ae8', //控制组件项在禁用状态下的激活背景颜色
  controlOutline: '#424242', // 控制输入组件的外轮廓线颜色
  colorTextSecondary: '#fff', //例如 Label 文本、Menu 的文本选中态等场景
  controlTmpOutline: '#fff',
  colorInfoText: '#fff',
  // colorBgContainer: '#bfa', //组件的容器背景色 ,务必不要将其与 `colorBgElevated` 混淆
};
