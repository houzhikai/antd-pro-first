const darkTextColor = '#cfd6df'; // 暗色主题下的文字颜色
const darkBg = '#1f1f1f'; // 暗色主题下的文字颜色
export const custom_dark_token = {
  colorText: darkTextColor, // 最深的文本色。为了符合W3C标准，默认的文本颜色使用了该色，同时这个颜色也是最深的中性色。
  colorBorder: '#373d3e', // 默认使用的边框颜色, 用于分割不同的元素，例如：表单的分割线、卡片的分割线等。
  colorBgContainerDisabled: '#f5f5f5', // 控制容器在禁用状态下的背景色。
  colorTextDisabled: '#b7b7de', // 控制禁用状态下的字体颜色。
  colorBgContainer: darkBg, // 组件的容器背景色，例如：默认按钮、输入框等。务必不要将其与 `colorBgElevated` 混淆。
  colorBorderSecondary: '#424242', // second container border color
  colorTextPlaceholder: '#555555',
  colorBgElevated: '#1f1f1f',
  lineWidthFocus: 0, // outline width
  colorIcon: '#767675',
  controlOutlineWidth: 0, // 	控制输入组件的外轮廓线宽度。
  colorTextDescription: '#fff', // 	控制文本描述字体颜色。
};

export const custom_dark_Popconfirm = {
  colorText: darkTextColor,
  colorTextHeading: darkTextColor,
};
export const custom_dark_Button = {
  colorText: darkTextColor,
  defaultBg: darkBg,
  defaultHoverBg: darkBg,
  defaultShadow: '0 0 0 #1f1f1f',
  primaryShadow: '0 0 0 #1f1f1f',
  dangerShadow: '0 0 0 #1f1f1f',
};
export const custom_dark_Radio = {
  buttonBg: darkBg,
};
export const custom_dark_Tree = {
  nodeSelectedBg: '#1f2223', // 节点选中态背景色
};

export const custom_dark_Input = {
  activeShadow: '0 0 0 2px #1f1f1f',
};

export const custom_dark_Message = {
  contentBg: '#181a1b',
};

export const custom_dark_Modal = {
  contentBg: '#181a1b',
  titleColor: '#cfcdca',
  headerBg: '#181a1b',
};
export const custom_dark_Select = {
  optionSelectedBg: '#181a1b', // 选项选中时文本颜色
  optionActiveBg: '#1f2223',
};
