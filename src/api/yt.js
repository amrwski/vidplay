import axios from "axios"

export const API_KEY = "AIzaSyDojPYyOhNvfJM5atnllJvaLCGjXrVov94"

export const yt = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  // headers: {
  //   Authorization: "Bearer AIzaSyDojPYyOhNvfJM5atnllJvaLCGjXrVov94",
  // },
})
