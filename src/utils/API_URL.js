import axios from "axios"

const API_URL = axios.create({
    baseURL: "https://job--finder.herokuapp.com"
})

export default API_URL;