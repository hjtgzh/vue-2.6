import api from "@/api";
import { message } from "@/utils/message";
import config from "@/api/config";
import { OAUTH_PARAMS } from "./index";

//登录
export const fetchLogin = async params => {
  const response = await api.post(
    `${config.baseUrl.proAuth}/authz/oauth/token`,
    {
      ...params,
      appVersion: "1.0",
      client_id: OAUTH_PARAMS.client_id,
      client_secret: OAUTH_PARAMS.client_secret,
      scope: OAUTH_PARAMS.scope,
      grant_type: OAUTH_PARAMS.grant_type
    }
  );
  if (!response.success) {
    message.error(response.message);
  }
  return response.result;
};
