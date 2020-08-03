import axios from "axios";
import md5 from "md5";

let timestamp = new Date().getTime();
let apikey = "d53d5fcbd019564b9045a2f3bb4310da";
let apiprivatekey = "86aa217c956574518ee6f31994228d8e2a3421a0";
let hash = md5(timestamp + apikey + apiprivatekey);

const api = axios.create({
  baseURL: "https://gateway.marvel.com",
});

// Add a request interceptor to increment apikey and hash in request
api.interceptors.request.use(
  function (config) {
    config.url = config.url + `?apikey=${apikey}&hash=${hash}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { api };
