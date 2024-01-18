import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.PROD ? 'http://localhost:8000' : 'http://localhost:8000'
})

export default http
