<template>
  <div :class="styles.loginPage">
    <div :class="styles.login" v-loading="loading">
      <div :class="styles.title">菜花网</div>
      <div>
        <label for="username" :class="styles.label">账号</label>
        <el-input
          :class="styles.input"
          prefix-icon="el-icon-user"
          id="username"
          placeholder="请输入账号"
          v-model="username"
        ></el-input>
      </div>
      <div>
        <label for="password" :class="styles.label">密码</label>
        <el-input
          :class="styles.input"
          prefix-icon="el-icon-unlock"
          type="password"
          show-password
          id="password"
          placeholder="请输入密码"
          v-model="password"
          @keydown.enter.native="handleLogin"
        ></el-input>
      </div>
      <el-checkbox :class="styles.rememberPsw" v-model="checked">
        记住密码
      </el-checkbox>
      <el-button :class="styles.submit" type="primary" @click="handleLogin">
        登 录
      </el-button>
    </div>
  </div>
</template>
<script>
import styles from "./style.module.less";
import user from "@/utils/user";
// import { getMenuList } from "@/configs/menuConfig";
// import { mapActions } from "vuex";
import message from "@/utils/message";

export default {
  name: "login",
  data() {
    return {
      styles,
      loading: false,
      checked: true,
      username: "17682305203",
      password: "123456"
    };
  },
  computed: {
    redirect() {
      return this.$route.query.redirect;
    }
  },
  methods: {
    // ...mapActions("userInfo", ["fetchUserInfo"]),
    async handleLogin() {
      const { username, password } = this;
      if (!username) {
        message.warning("请输入账号");
        return;
      }
      if (!password) {
        message.warning("请输入账号");
        return;
      }
      this.loading = true;
      const result = await this.$services.fetchLogin({
        username,
        password
      });
      this.loading = false;
      if (result) {
        const { access_token } = result;
        message.success("登录成功");
        // if (checked) {
        //   saveUserAccount({
        //     username,
        //     password
        //   });
        // } else {
        //   removeUserAccount();
        // }
        user.saveToken(access_token);
        // this.fetchUserInfo();
        // await getMenuList();
        // this.$eventBus.$emit("loginSuccess");
        if (this.redirect) {
          this.$router.replace(this.redirect);
        } else {
          this.$router.replace("/");
        }
      }
    }
  }
};
</script>
