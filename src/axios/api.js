import axios from 'axios'
axios.defaults.timeout = 5000
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://dida.yundianba.club:8082'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://dida.yundianba.club:8082'
}

console.log(axios.defaults.baseURL)
// request请求拦截器
axios.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json;charset=uft-8'
    let authToken = localStorage.token
    if (authToken) {
      config.headers.Authorization = authToken
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// response请求拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  err => {
    console.log(err.response)
    if (err && err.response) {
      console.log(err.response)
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break
        case 401:
          console.log(err.response.data)
          err.message = '401错误'
          break
        case 403:
          err.message = '拒绝访问'
          break
        case 404:
          err.message = '请求错误,未找到该资源'
          break
        case 405:
          err.message = '请求方法未允许'
          break
        case 408:
          err.message = '请求超时'
          break
        case 500:
          err.message = '微服务故障, 请稍后再试'
          break
        case 501:
          err.message = '网络未实现'
          break
        case 502:
          err.message = '网络错误'
          break
        case 503:
          err.message = '服务不可用'
          break
        case 504:
          err.message = '网络超时'
          break
        case 505:
          err.message = 'http版本不支持该请求'
          break
        default:
          err.message = '连接错误'
      }
    } else {}
    console.log(err)
    return Promise.resolve(err.response)
  }
)

export const ApiService = {
  // 获取用户信息
  getUser: (params) => {
    console.log(axios.defaults.baseURL)
    return axios.post('/basic/getBasicById', params).then(res => res)
  }
}
