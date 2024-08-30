import {
  custom_light_token,
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
  custom_Descriptions,
  custom_dark_Collapse,
  custom_Collapse,
} from "./theme";

export const getThemeToken = (theme: "dark" | "light") => {
  return theme === "dark"
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
          Descriptions: custom_Descriptions,
          Collapse: custom_dark_Collapse,
        },
      }
    : {
        token: custom_light_token,
        components: {
          Table: custom_light_Table, //  dark light
          Descriptions: custom_Descriptions,
          Collapse: custom_Collapse,
        },
      };
};
