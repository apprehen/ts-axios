import { AxiosRequestConfig } from './types'
import xhr from './xhr'
function axios(config: AxiosRequestConfig) {
  xhr(config)
  // TODO
}

export default axios
