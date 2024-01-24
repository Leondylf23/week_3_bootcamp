import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',
  homePost: "post",
  registerUser: "user/register",
  loginUser: "user/login",
  getProfile: "user/get-profile",
  postNewPost: 'post/create',
  getMyPost: "post/my-post"
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const ping = () => callAPI(urls.ping, 'get');
export const fetchHomePostData = () => callAPI(urls.homePost, "GET");
export const sendRegisterUser = (formData) => callAPI(urls.registerUser, "POST", {}, {}, formData);
export const getLoginUser = (formData) => callAPI(urls.loginUser, "POST", {}, {}, formData);
export const getProfileData = (token) => callAPI(urls.getProfile, "GET");
export const postNewPost = (token, formData) => callAPI(urls.postNewPost, "POST", {} , {}, formData);
export const getMyPost = () => callAPI(urls.getMyPost, "GET");
export const getPostDetail = () => callAPI()