import {
  custom_dark_token,
  custom_dark_Button,
  custom_dark_Popconfirm,
  custom_dark_Radio,
  custom_dark_Tree,
  custom_dark_Input,
  custom_dark_Message,
  custom_dark_Modal,
  custom_dark_Select,
  custom_dark_Table,
  custom_light_Table,
} from './theme';

export const getThemeToken = (theme) => {
  return theme === 'dark'
    ? {
        token: custom_dark_token,
        components: {
          Button: custom_dark_Button,
          Popconfirm: custom_dark_Popconfirm,
          Radio: custom_dark_Radio,
          Tree: custom_dark_Tree,
          Input: custom_dark_Input,
          Message: custom_dark_Message,
          Modal: custom_dark_Modal,
          Select: custom_dark_Select,
          Table: custom_dark_Table, //  dark light
        },
      }
    : {
        token: {},
        components: {
          Table: custom_light_Table, //  dark light
        },
      };
};
