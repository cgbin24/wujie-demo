let baseUrl = 'https://gateway-biz.needleos.cn'
const imgPrefixUrl = 'http://116.62.33.42:18800/file?file_id='
const baseDomain = 'https://gateway-biz.needleos.cn'

// if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://api.needleos.cn/dev'
//   // baseUrl = 'https://gateway-biz.needleos.cn'
// } else if (process.env.NODE_ENV === 'production') {
//   baseUrl = 'https://gateway-biz.needleos.cn'
// } else if (process.env.NODE_ENV === 'test') {
//   baseUrl = 'http://api.needleos.cn/test'
// }

export { baseUrl, imgPrefixUrl, baseDomain }
