const CryptoJS = require("crypto-js");
const key = require("./api_key");

module.exports = {
  decryptedKey: (encryptedKey) => {
    return CryptoJS.AES.decrypt(encryptedKey, "my-key", {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.AnsiX923,
    }).toString(CryptoJS.enc.Utf8);
  },
};
