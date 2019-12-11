import * as loginService from "./login.service";

export const OAUTH_PARAMS = {
  client_id: "logistics",
  client_secret: "L9ZUYKIM",
  scope: "read",
  register_type: "password",
  grant_type: "password",
  grant_type_sms: "sms"
};

export default {
  ...loginService
};
