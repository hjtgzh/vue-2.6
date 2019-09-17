import { Message } from "element-ui";

export const menuList = [
  {
    name: "导航-父级",
    icon: "el-icon-location",
    index: "0",
    child: [
      {
        name: "导航-子级1",
        index: "/child"
      },
      {
        name: "导航-子级2",
        index: "2"
      }
    ]
  },
  {
    name: "导航-home",
    index: "/",
    icon: "el-icon-menu"
  },
  {
    name: "导航-about",
    index: "/about",
    icon: "el-icon-document"
  },
  {
    name: "导航四",
    index: "3",
    icon: "el-icon-setting"
  }
];

export const message = {
  success: msg => {
    Message.success({
      message: msg || "成功",
      duration: 2000
    });
  },
  error: msg => {
    Message.error({
      message: msg || "失败",
      duration: 2000
    });
  }
};
