import lscache from "lscache";

class User {
  /* 保存token */
  saveToken(accessToken) {
    lscache.set("accessToken", accessToken, 60 * 24 * 15);
  }
  /* 获取token */
  getToken() {
    return lscache.get("accessToken");
  }
  /* 退出登录 */
  logout() {
    lscache.remove("accessToken");
  }
  /* 是否登录 */
  isLogin() {
    return !!this.getToken();
  }
}

export default new User();
