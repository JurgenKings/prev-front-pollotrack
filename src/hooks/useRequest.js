import axios from "axios"

const useRequest = () => {
  const requestHandler = async (method, url, data = null, config = {}) => {
    try {
      const response = await axios({
        method,
        url,
        data,
        ...config,
      })
      if (url === "http://localhost:8000/api/v1/login") return response.data
      else return response.data.data

    } catch (error) { }
  }

  const requestGet = async (url) => requestHandler('GET', url)

  const requestPost = async (url, data, config) => requestHandler('POST', url, data, config)

  const requestPut = async (url, data, config) => requestHandler('PUT', url, data, config)

  const requestDelete = async (url) => requestHandler('DELETE', url)

  return { requestGet, requestPost, requestPut, requestDelete }
}

export { useRequest }