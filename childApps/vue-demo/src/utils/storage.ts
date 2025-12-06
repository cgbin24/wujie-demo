/**
 * 统一管理Storage
 */

// 设置缓存
const setStorage = (key: string, value: string) => {
  try {
    if (!key) return
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
  } catch (error) {
    console.log(error)
  }
}

// 获取缓存
const getStorage = (key: string) => {
  try {
    return window.localStorage.getItem(key)
  } catch (error) {
    console.log(error)
  }
}

// 删除缓存
const removeStorage = (key: string) => {
  key && window.localStorage.removeItem(key)
}

// 清空缓存
const clearStorage = () => {
  window.localStorage.clear()
}

export { setStorage, getStorage, removeStorage, clearStorage }
