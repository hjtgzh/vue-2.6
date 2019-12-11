import { Message, MessageBox } from "element-ui";

export const message = {
  success: msg => {
    Message.success({
      message: msg || "成功",
      duration: 2000
    });
  },
  warning: msg => {
    Message.warning({
      message: msg,
      duration: 2000
    });
  },
  error: msg => {
    Message.error({
      message: msg || "失败",
      duration: 2000
    });
  },
  confirm: params => {
    const {
      title,
      confirmFn,
      cancelFn,
      confirmText,
      cancelText,
      beforeClose
    } = params;
    MessageBox.confirm(title, "提示", {
      distinguishCancelAndClose: true,
      confirmButtonText: confirmText || "确定",
      cancelButtonText: cancelText || "取消",
      beforeClose
    })
      .then(() => {
        if (confirmFn && typeof confirmFn === "function") {
          confirmFn();
        }
      })
      .catch(() => {
        if (cancelFn && typeof confirmFn === "function") {
          cancelFn();
        }
      });
  },
  prompt: MessageBox.prompt,
  alert: MessageBox.alert
};

export default message;
