const { default: axios } = require("axios");
const key = require("./api_key");
const url = require("./url");

module.exports = {
  getData: (params) => {
    return axios({
      method: "GET",
      url: url.baseUrl + params,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key.bearer_token}`,
      },
    });
  },
  postData: (params, data) => {
    return axios({
      method: "POST",
      url: url.baseUrl + params,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key.bearer_token}`,
      },
      data: data,
    });
  },
};
