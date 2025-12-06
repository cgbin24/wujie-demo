import axios, { AxiosResponse } from "axios";
import { baseUrl } from "./config";
import { getStorage, removeStorage } from "../utils/storage";

const axiosIns = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  withCredentials: false,
})

axiosIns.interceptors.request.use(
  (config: any) => {
    const token = getStorage('token') || ''
    token && (config.headers.token = token)
    return config
  },
  (error) => {
    return Promise.reject(error.response)
  }
)

axiosIns.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response.status === 200) {
      // 转换判断code
      if (response.data && response.data.code) {
        response.data.code = response.status === 200 ? 'ok' : response.data.code
      }
      return response.data
    } else {
      throw new Error(response.status.toString())
    }
  },
  (error) => {
    if (error) {
      switch (error.response.status) {
        // 其他错误，直接抛出错误提示
        // 401: token过期，缺少token
        case 401:
          // customToast('登录过期。请重新登录~')
          removeStorage('token')
          // router.replace('/login')
          // 重定向到登录页
          break
        case 400:
          // 过滤错误码
          const errorCode: number[] = []
          if (!errorCode.includes(error.response?.data.code)) {
            try {
              // @ts-ignore
              window.$message.info(error.response.data.msg || '')
            } catch (e) {}
          }
          break
        case 500:
          // @ts-ignore
          window.$message.info(error.response.data.msg || '服务器异常，请稍后重试…')
          break
        default:
          break
      }
      // return Promise.reject({ code: 500, msg: '服务器异常，请稍后重试…' })
      return Promise.reject(error.response.data)
    }
  }
)

export default axiosIns
