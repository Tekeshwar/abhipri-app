import axios from 'axios'

// const apiBaseUrl = 'https://tekeshwar.github.io'
const apiBaseUrl = 'http://localhost:8080'

export const getInstaData = () => {
  return axios.get(`${apiBaseUrl}/static/data.json`)
}
