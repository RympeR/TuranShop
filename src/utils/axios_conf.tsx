import axios from "axios";

export const instance = axios.create({
  baseURL: "https://mobile.turancoin.net/api/",
  timeout: 1000,
  headers: { Authorization: "token 17add1c12560b77f7909b6755e8936b9085182ba" },
});