const custom_token = {
  borderRadius: 2,
  lineWidth: 1,
};

export const custom_light_token = {
  ...custom_token,
  colorBgContainer: '#f8f8f8',
  colorPrimary: '#007acc',
};

const darkTextColor = '#cfd6df';
const darkBg = '#1f1f1f';
export const custom_dark_token = {
  ...custom_token,
  colorPrimary: '#0e639c',
  colorText: darkTextColor, //default text color
  colorBorder: '#373d3e', // border color
  colorTextDisabled: '#717171', // disable text color
  colorTextSecondary: darkTextColor, // label text color
  colorBgContainer: darkBg, // defult color background
  controlOutlineWidth: 0, // border windth, or box shadow
  colorBorderSecondary: '#34393b',
  colorTextPlaceholder: '#555555',
  colorBgElevated: '#1f1f1f',
  lineWidthFocus: 0, // outline width
  colorIcon: '#767675',
  colorTextDescription: '#f8f8f8', // description color , or tag icon color
};

export const custom_Descriptions = {
  titleMarginBottom: 0,
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
  nodeSelectedBg: '#1f2223',
};

export const custom_dark_Input = {
  activeShadow: '0 0 0 2px #1f1f1f',
};

export const custom_dark_Message = {
  contentBg: '#1f1f1f',
};

export const custom_dark_Modal = {
  contentBg: '#1f1f1f',
  titleColor: '#cfcdca',
  headerBg: '#1f1f1f',
};

export const custom_dark_Select = {
  optionSelectedBg: '#181a1b',
  optionActiveBg: '#1f2223',
};

const common_Table = {
  bodySortBg: '#181a1b',
  cellPaddingBlockMD: 0, // y, background color needs to be fully filled,
  cellPaddingInlineMD: 0, // x, background color needs to be fully filled,
};
export const custom_dark_Table = {
  ...common_Table,
  headerBg: '#4a4a4a',
  borderColor: '#1f1f1f',
  headerSplitColor: '#1f1f1f',
  rowExpandedBg: '#000',
  rowSelectedBg: '#163a54',
  rowSelectedHoverBg: '#163a54',
};

export const custom_light_Table = {
  ...common_Table,
  headerBg: '#f8f8f8',
  borderColor: '#fff',
  headerSplitColor: '#fff',
  rowExpandedBg: '#ccc',
  rowSelectedBg: '#e5f2f8',
  rowSelectedHoverBg: '#e5f2f8',
};
const common_Collapse = {
  headerPadding: '0',
  contentPadding: '0',
};
export const custom_dark_Collapse = {
  ...common_Collapse,
  contentBg: '#1e1e1e',
};
export const custom_Collapse = {
  ...common_Collapse,
  contentBg: '#fff',
};
