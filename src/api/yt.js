import axios from "axios"

export const yt = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
})
