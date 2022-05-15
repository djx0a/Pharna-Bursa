import axios from "axios";

const API_URL = "https://signalai.azure-api.net/signalai/";


const register = (data) => {
    return axios.post(API_URL + "demo_register", data);
};


const login = (username, password) => {
    return axios
      .post(API_URL + "demo_login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data) {
         // localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };

  
  export default {
    register,
    login
  };