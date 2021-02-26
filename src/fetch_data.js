const { default: axios } = require("axios");
const key = require("./api_key");
const decrypt = require("./convert");

module.exports = {
  getData: (params) => {
    return axios({
      method: "GET",
      url: "https://api.themoviedb.org/3" + params,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${decrypt.decryptedKey(key.bearer_token)}`,
      },
    });
  },
  postData: (params, data) => {
    return axios({
      method: "POST",
      url: "https://api.themoviedb.org/3" + params,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${decrypt.decryptedKey(key.bearer_token)}`,
      },
      data: data,
    });
  },
};
