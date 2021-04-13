import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-613b5.firebaseio.com/",
});

export default instance;
