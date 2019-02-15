improt axios from 'axios'

// 创建axios实例
const service = axios.create({
  beseURL: 127.0.0.1:9088,
  timeout: 5000
})

export default service